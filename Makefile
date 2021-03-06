APP = ask_izzy
REPO = contyard.office.infoxchange.net.au/$(APP)
VERSION_TAG := $(shell git describe)
TAG := $(shell if [ -z "$(CI)" ]; then echo $(VERSION_TAG); else echo "$(VERSION_TAG)-ci"; fi)
FORKLIFT := docker run -t

# Allow multi-line assignments to include a `\` on the end of every
# line (including the last one), which avoids the situation where you
# have to touch two lines in order to add an item to the list.
NULL=

# Default flags for Forklift
FORKLIFT_FLAGS ?=
TEST_FLAGS ?=

# Flags used by Forklift for CI (N.B. you must pass in ISS_URL)
CI_FORKLIFT_FLAGS := $(FORKLIFT_FLAGS) \
	-e CI="$(CI)" \
	-e GOOGLE_API_KEY="$(GOOGLE_API_KEY)" \
	-e ISS_URL="$(ISS_URL)" \
	-e SELENIUM_BROWSER="phantomjs" \
	$(NULL)

CI_TEST_FLAGS := $(TEST_FLAGS) \
	$(NULL)

build:
	@test -z "`git status --porcelain`" || echo "WARNING: you have changes to your git repo not committed to this tag"
	docker build -t $(REPO):$(TAG) .
	@echo "Successfully built $(REPO):$(TAG)..."
	@if [ -n "$(CI)" ]; then \
		docker push $(REPO):$(TAG); \
	fi

dockerpush:
	@if [ -n "$(CI)" ]; then \
		docker tag $(REPO):$(TAG) $(REPO):$(VERSION_TAG); \
		docker rmi $(REPO):$(TAG); \
	fi
	docker push $(REPO):$(VERSION_TAG)

push: dockerpush
	@if git describe --exact-match 2> /dev/null; then \
		for remote in `git remote`; do git push $$remote $(TAG); done; \
	fi

lint:
	$(FORKLIFT) $(CI_FORKLIFT_FLAGS) -- $(REPO):$(TAG) lint

unit-test:
	$(FORKLIFT) $(CI_FORKLIFT_FLAGS) -- $(REPO):$(TAG) unit-test $(CI_TEST_FLAGS)

feature-test:
	$(FORKLIFT) $(CI_FORKLIFT_FLAGS) -- $(REPO):$(TAG) feature-test $(CI_TEST_FLAGS)

search-test:
	$(FORKLIFT) $(CI_FORKLIFT_FLAGS) -- $(REPO):$(TAG) search-test $(CI_TEST_FLAGS)

deploy:
	$(FORKLIFT) -- $(REPO):$(TAG) deploy

serve:
	$(FORKLIFT) -- $(REPO):$(TAG) serve

release:
	@if ! git describe --exact-match 2>/dev/null; then \
		while [ -z "$$CONTINUE" ]; do \
			read -r -p "Release not tagged. Release anyway? y/N " CONTINUE; \
		done ; \
		[ $$CONTINUE = "y" ] || [ $$CONTINUE = "Y" ] || (echo "Exiting."; exit 1;) \
	fi

	rm -rf tags_repo
	git clone \
		--single-branch \
		--depth 1 \
		git@gitlab.office.infoxchange.net.au:devops/tags.git tags_repo
	cd tags_repo && \
		./update_tag "$(APPNAME)" "$(VERSION_TAG)" && \
		git commit -am "Release $(APP) $(VERSION_TAG) to $(APPNAME)" &&\
		git push
	rm -rf tags_repo

release-dev:
	$(MAKE) release APPNAME=askizzy.docker.dev CONTINUE=y

release-test:
	$(MAKE) release APPNAME=askizzy-test.docker.dev CONTINUE=y

release-uat:
	$(MAKE) release APPNAME=askizzy-uat.askizzy.org.au CONTINUE=y

release-prod:
	$(MAKE) release APPNAME=askizzy.org.au

.PHONY: build push test deploy serve \
	release-dev release-test release-uat release-prod
