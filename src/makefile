serve:
	bundle exec jekyll s

build:
	JEKYLL_ENV=production bundle exec jekyll build --destination ./build
	mv ./build/* ../

build-local:
	jekyll build --destination ./build
	mv ./build/* ../