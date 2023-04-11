#ifdef __OBJC__
#import <UIKit/UIKit.h>
#else
#ifndef FOUNDATION_EXPORT
#if defined(__cplusplus)
#define FOUNDATION_EXPORT extern "C"
#else
#define FOUNDATION_EXPORT extern
#endif
#endif
#endif

#import "args.h"
#import "chrono.h"
#import "color.h"
#import "compile.h"
#import "core.h"
#import "format-inl.h"
#import "format.h"
#import "locale.h"
#import "os.h"
#import "ostream.h"
#import "printf.h"
#import "ranges.h"

FOUNDATION_EXPORT double fmtVersionNumber;
FOUNDATION_EXPORT const unsigned char fmtVersionString[];

