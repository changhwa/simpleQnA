resource_root = src/main/resources/static
cmd = $(subst :, ,$(filter-out $@,$(MAKECMDGOALS)))

build:
		mvn clean compile
build-ft:
		cd $(resource_root) && gulp build
npm:
		cd $(resource_root) && npm $(cmd) --save
npm-dev:
		cd $(resource_root) && npm $(cmd) --save-dev
watch:
		cd $(resource_root) && gulp watch
@:
		@echo end
%:
		@echo end
