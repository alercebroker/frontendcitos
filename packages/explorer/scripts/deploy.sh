#!/usr/bin/env bash

aws s3 sync dist s3://$EXPLORER_BUCKET_NAME
