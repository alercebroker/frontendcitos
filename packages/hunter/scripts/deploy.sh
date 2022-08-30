#!/usr/bin/env bash

aws s3 sync dist s3://$HUNTER_BUCKET_NAME --acl public-read
