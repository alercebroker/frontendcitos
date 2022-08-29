#!/usr/bin/env bash

aws s3 sync storybook-static s3://$COMPONENT_LIBRARY_BUCKET_NAME --acl public-read
