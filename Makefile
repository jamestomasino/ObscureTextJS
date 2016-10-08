#=================================================================================
# Setup
#=================================================================================

install:
	s3_website cfg apply --config-dir "$$HOME/.s3config/obscure.tomasino.org/"

#=================================================================================
# Deployment
#=================================================================================

deploy:
	s3_website push --site=. --config-dir "$$HOME/.s3config/obscure.tomasino.org/"

#  vim: set shiftwidth=4 tabstop=4 noexpandtab:
