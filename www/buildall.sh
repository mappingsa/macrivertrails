#!/bin/sh
MIDDLEMAN_BUILD_TARGET=debug middleman build
MIDDLEMAN_BUILD_TARGET=web middleman build
MIDDLEMAN_BUILD_TARGET=phonegap middleman build