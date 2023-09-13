PHONY: .install .run

install:
	npm install
	cd ./client && npm install
	cd ./server && npm install

run:
	npm run dev