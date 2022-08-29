#!/usr/bin/env bash

aws s3 sync docs/.vitepress/dist s3://$HTTP_CLIENT_BUCKET_NAME --acl public-read
