[@alercebroker/http-client](../README.md) / [Modules](../modules.md) / [types](../modules/types.md) / HttpStatusCode

# Enumeration: HttpStatusCode

[types](../modules/types.md).HttpStatusCode

Hypertext Transfer Protocol (HTTP) response status codes.

**`See`**

[https://en.wikipedia.org/wiki/List_of_HTTP_status_codes](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes)

## Table of contents

### Enumeration Members

- [ACCEPTED](types.HttpStatusCode.md#accepted)
- [ALREADY\_REPORTED](types.HttpStatusCode.md#already_reported)
- [BAD\_GATEWAY](types.HttpStatusCode.md#bad_gateway)
- [BAD\_REQUEST](types.HttpStatusCode.md#bad_request)
- [CONFLICT](types.HttpStatusCode.md#conflict)
- [CONTINUE](types.HttpStatusCode.md#continue)
- [CREATED](types.HttpStatusCode.md#created)
- [EXPECTATION\_FAILED](types.HttpStatusCode.md#expectation_failed)
- [FAILED\_DEPENDENCY](types.HttpStatusCode.md#failed_dependency)
- [FORBIDDEN](types.HttpStatusCode.md#forbidden)
- [FOUND](types.HttpStatusCode.md#found)
- [GATEWAY\_TIMEOUT](types.HttpStatusCode.md#gateway_timeout)
- [GONE](types.HttpStatusCode.md#gone)
- [HTTP\_VERSION\_NOT\_SUPPORTED](types.HttpStatusCode.md#http_version_not_supported)
- [IM\_USED](types.HttpStatusCode.md#im_used)
- [INSUFFICIENT\_STORAGE](types.HttpStatusCode.md#insufficient_storage)
- [INTERNAL\_SERVER\_ERROR](types.HttpStatusCode.md#internal_server_error)
- [I\_AM\_A\_TEAPOT](types.HttpStatusCode.md#i_am_a_teapot)
- [LENGTH\_REQUIRED](types.HttpStatusCode.md#length_required)
- [LOCKED](types.HttpStatusCode.md#locked)
- [LOOP\_DETECTED](types.HttpStatusCode.md#loop_detected)
- [METHOD\_NOT\_ALLOWED](types.HttpStatusCode.md#method_not_allowed)
- [MISDIRECTED\_REQUEST](types.HttpStatusCode.md#misdirected_request)
- [MOVED\_PERMANENTLY](types.HttpStatusCode.md#moved_permanently)
- [MULTIPLE\_CHOICES](types.HttpStatusCode.md#multiple_choices)
- [MULTI\_STATUS](types.HttpStatusCode.md#multi_status)
- [NETWORK\_AUTHENTICATION\_REQUIRED](types.HttpStatusCode.md#network_authentication_required)
- [NON\_AUTHORITATIVE\_INFORMATION](types.HttpStatusCode.md#non_authoritative_information)
- [NOT\_ACCEPTABLE](types.HttpStatusCode.md#not_acceptable)
- [NOT\_EXTENDED](types.HttpStatusCode.md#not_extended)
- [NOT\_FOUND](types.HttpStatusCode.md#not_found)
- [NOT\_IMPLEMENTED](types.HttpStatusCode.md#not_implemented)
- [NOT\_MODIFIED](types.HttpStatusCode.md#not_modified)
- [NO\_CONTENT](types.HttpStatusCode.md#no_content)
- [OK](types.HttpStatusCode.md#ok)
- [PARTIAL\_CONTENT](types.HttpStatusCode.md#partial_content)
- [PAYLOAD\_TOO\_LARGE](types.HttpStatusCode.md#payload_too_large)
- [PAYMENT\_REQUIRED](types.HttpStatusCode.md#payment_required)
- [PERMANENT\_REDIRECT](types.HttpStatusCode.md#permanent_redirect)
- [PRECONDITION\_FAILED](types.HttpStatusCode.md#precondition_failed)
- [PRECONDITION\_REQUIRED](types.HttpStatusCode.md#precondition_required)
- [PROCESSING](types.HttpStatusCode.md#processing)
- [PROXY\_AUTHENTICATION\_REQUIRED](types.HttpStatusCode.md#proxy_authentication_required)
- [RANGE\_NOT\_SATISFIABLE](types.HttpStatusCode.md#range_not_satisfiable)
- [REQUEST\_HEADER\_FIELDS\_TOO\_LARGE](types.HttpStatusCode.md#request_header_fields_too_large)
- [REQUEST\_TIMEOUT](types.HttpStatusCode.md#request_timeout)
- [RESET\_CONTENT](types.HttpStatusCode.md#reset_content)
- [SEE\_OTHER](types.HttpStatusCode.md#see_other)
- [SERVICE\_UNAVAILABLE](types.HttpStatusCode.md#service_unavailable)
- [SWITCHING\_PROTOCOLS](types.HttpStatusCode.md#switching_protocols)
- [SWITCH\_PROXY](types.HttpStatusCode.md#switch_proxy)
- [TEMPORARY\_REDIRECT](types.HttpStatusCode.md#temporary_redirect)
- [TOO\_MANY\_REQUESTS](types.HttpStatusCode.md#too_many_requests)
- [UNAUTHORIZED](types.HttpStatusCode.md#unauthorized)
- [UNAVAILABLE\_FOR\_LEGAL\_REASONS](types.HttpStatusCode.md#unavailable_for_legal_reasons)
- [UNPROCESSABLE\_ENTITY](types.HttpStatusCode.md#unprocessable_entity)
- [UNSUPPORTED\_MEDIA\_TYPE](types.HttpStatusCode.md#unsupported_media_type)
- [UPGRADE\_REQUIRED](types.HttpStatusCode.md#upgrade_required)
- [URI\_TOO\_LONG](types.HttpStatusCode.md#uri_too_long)
- [USE\_PROXY](types.HttpStatusCode.md#use_proxy)
- [VARIANT\_ALSO\_NEGOTIATES](types.HttpStatusCode.md#variant_also_negotiates)

## Enumeration Members

### ACCEPTED

• **ACCEPTED** = ``202``

The request has been accepted for processing, but the processing has not been completed.
The request might or might not be eventually acted upon, and may be disallowed when processing occurs.

#### Defined in

[src/lib/core/error/http-status-code.ts:45](https://github.com/alercebroker/frontendcitos/blob/5c6beff/packages/http-client/src/lib/core/error/http-status-code.ts#L45)

___

### ALREADY\_REPORTED

• **ALREADY\_REPORTED** = ``208``

The members of a DAV binding have already been enumerated in a preceding part of the (multistatus) response,
and are not being included again.

#### Defined in

[src/lib/core/error/http-status-code.ts:82](https://github.com/alercebroker/frontendcitos/blob/5c6beff/packages/http-client/src/lib/core/error/http-status-code.ts#L82)

___

### BAD\_GATEWAY

• **BAD\_GATEWAY** = ``502``

The server was acting as a gateway or proxy and received an invalid response from the upstream server.

#### Defined in

[src/lib/core/error/http-status-code.ts:335](https://github.com/alercebroker/frontendcitos/blob/5c6beff/packages/http-client/src/lib/core/error/http-status-code.ts#L335)

___

### BAD\_REQUEST

• **BAD\_REQUEST** = ``400``

The server cannot or will not process the request due to an apparent client error
(e.g., malformed request syntax, too large size, invalid request message framing, or deceptive request routing).

#### Defined in

[src/lib/core/error/http-status-code.ts:157](https://github.com/alercebroker/frontendcitos/blob/5c6beff/packages/http-client/src/lib/core/error/http-status-code.ts#L157)

___

### CONFLICT

• **CONFLICT** = ``409``

Indicates that the request could not be processed because of conflict in the request,
such as an edit conflict between multiple simultaneous updates.

#### Defined in

[src/lib/core/error/http-status-code.ts:213](https://github.com/alercebroker/frontendcitos/blob/5c6beff/packages/http-client/src/lib/core/error/http-status-code.ts#L213)

___

### CONTINUE

• **CONTINUE** = ``100``

The server has received the request headers and the client should proceed to send the request body
(in the case of a request for which a body needs to be sent; for example, a POST request).
Sending a large request body to a server after a request has been rejected for inappropriate headers would be inefficient.
To have a server check the request's headers, a client must send Expect: 100-continue as a header in its initial request
and receive a 100 Continue status code in response before sending the body. The response 417 Expectation Failed indicates the request should not be continued.

#### Defined in

[src/lib/core/error/http-status-code.ts:14](https://github.com/alercebroker/frontendcitos/blob/5c6beff/packages/http-client/src/lib/core/error/http-status-code.ts#L14)

___

### CREATED

• **CREATED** = ``201``

The request has been fulfilled, resulting in the creation of a new resource.

#### Defined in

[src/lib/core/error/http-status-code.ts:39](https://github.com/alercebroker/frontendcitos/blob/5c6beff/packages/http-client/src/lib/core/error/http-status-code.ts#L39)

___

### EXPECTATION\_FAILED

• **EXPECTATION\_FAILED** = ``417``

The server cannot meet the requirements of the Expect request-header field.

#### Defined in

[src/lib/core/error/http-status-code.ts:262](https://github.com/alercebroker/frontendcitos/blob/5c6beff/packages/http-client/src/lib/core/error/http-status-code.ts#L262)

___

### FAILED\_DEPENDENCY

• **FAILED\_DEPENDENCY** = ``424``

The request failed due to failure of a previous request (e.g., a PROPPATCH).

#### Defined in

[src/lib/core/error/http-status-code.ts:289](https://github.com/alercebroker/frontendcitos/blob/5c6beff/packages/http-client/src/lib/core/error/http-status-code.ts#L289)

___

### FORBIDDEN

• **FORBIDDEN** = ``403``

The request was valid, but the server is refusing action.
The user might not have the necessary permissions for a resource.

#### Defined in

[src/lib/core/error/http-status-code.ts:178](https://github.com/alercebroker/frontendcitos/blob/5c6beff/packages/http-client/src/lib/core/error/http-status-code.ts#L178)

___

### FOUND

• **FOUND** = ``302``

This is an example of industry practice contradicting the standard.
The HTTP/1.0 specification (RFC 1945) required the client to perform a temporary redirect
(the original describing phrase was "Moved Temporarily"), but popular browsers implemented 302
with the functionality of a 303 See Other. Therefore, HTTP/1.1 added status codes 303 and 307
to distinguish between the two behaviours. However, some Web applications and frameworks
use the 302 status code as if it were the 303.

#### Defined in

[src/lib/core/error/http-status-code.ts:110](https://github.com/alercebroker/frontendcitos/blob/5c6beff/packages/http-client/src/lib/core/error/http-status-code.ts#L110)

___

### GATEWAY\_TIMEOUT

• **GATEWAY\_TIMEOUT** = ``504``

The server was acting as a gateway or proxy and did not receive a timely response from the upstream server.

#### Defined in

[src/lib/core/error/http-status-code.ts:346](https://github.com/alercebroker/frontendcitos/blob/5c6beff/packages/http-client/src/lib/core/error/http-status-code.ts#L346)

___

### GONE

• **GONE** = ``410``

Indicates that the resource requested is no longer available and will not be available again.
This should be used when a resource has been intentionally removed and the resource should be purged.
Upon receiving a 410 status code, the client should not request the resource in the future.
Clients such as search engines should remove the resource from their indices.
Most use cases do not require clients and search engines to purge the resource, and a "404 Not Found" may be used instead.

#### Defined in

[src/lib/core/error/http-status-code.ts:222](https://github.com/alercebroker/frontendcitos/blob/5c6beff/packages/http-client/src/lib/core/error/http-status-code.ts#L222)

___

### HTTP\_VERSION\_NOT\_SUPPORTED

• **HTTP\_VERSION\_NOT\_SUPPORTED** = ``505``

The server does not support the HTTP protocol version used in the request

#### Defined in

[src/lib/core/error/http-status-code.ts:351](https://github.com/alercebroker/frontendcitos/blob/5c6beff/packages/http-client/src/lib/core/error/http-status-code.ts#L351)

___

### IM\_USED

• **IM\_USED** = ``226``

The server has fulfilled a request for the resource,
and the response is a representation of the result of one or more instance-manipulations applied to the current instance.

#### Defined in

[src/lib/core/error/http-status-code.ts:88](https://github.com/alercebroker/frontendcitos/blob/5c6beff/packages/http-client/src/lib/core/error/http-status-code.ts#L88)

___

### INSUFFICIENT\_STORAGE

• **INSUFFICIENT\_STORAGE** = ``507``

The server is unable to store the representation needed to complete the request.

#### Defined in

[src/lib/core/error/http-status-code.ts:361](https://github.com/alercebroker/frontendcitos/blob/5c6beff/packages/http-client/src/lib/core/error/http-status-code.ts#L361)

___

### INTERNAL\_SERVER\_ERROR

• **INTERNAL\_SERVER\_ERROR** = ``500``

A generic error message, given when an unexpected condition was encountered and no more specific message is suitable.

#### Defined in

[src/lib/core/error/http-status-code.ts:324](https://github.com/alercebroker/frontendcitos/blob/5c6beff/packages/http-client/src/lib/core/error/http-status-code.ts#L324)

___

### I\_AM\_A\_TEAPOT

• **I\_AM\_A\_TEAPOT** = ``418``

This code was defined in 1998 as one of the traditional IETF April Fools' jokes, in RFC 2324, Hyper Text Coffee Pot Control Protocol,
and is not expected to be implemented by actual HTTP servers. The RFC specifies this code should be returned by
teapots requested to brew coffee. This HTTP status is used as an Easter egg in some websites, including Google.com.

#### Defined in

[src/lib/core/error/http-status-code.ts:269](https://github.com/alercebroker/frontendcitos/blob/5c6beff/packages/http-client/src/lib/core/error/http-status-code.ts#L269)

___

### LENGTH\_REQUIRED

• **LENGTH\_REQUIRED** = ``411``

The request did not specify the length of its content, which is required by the requested resource.

#### Defined in

[src/lib/core/error/http-status-code.ts:227](https://github.com/alercebroker/frontendcitos/blob/5c6beff/packages/http-client/src/lib/core/error/http-status-code.ts#L227)

___

### LOCKED

• **LOCKED** = ``423``

The resource that is being accessed is locked.

#### Defined in

[src/lib/core/error/http-status-code.ts:284](https://github.com/alercebroker/frontendcitos/blob/5c6beff/packages/http-client/src/lib/core/error/http-status-code.ts#L284)

___

### LOOP\_DETECTED

• **LOOP\_DETECTED** = ``508``

The server detected an infinite loop while processing the request.

#### Defined in

[src/lib/core/error/http-status-code.ts:366](https://github.com/alercebroker/frontendcitos/blob/5c6beff/packages/http-client/src/lib/core/error/http-status-code.ts#L366)

___

### METHOD\_NOT\_ALLOWED

• **METHOD\_NOT\_ALLOWED** = ``405``

A request method is not supported for the requested resource;
for example, a GET request on a form that requires data to be presented via POST, or a PUT request on a read-only resource.

#### Defined in

[src/lib/core/error/http-status-code.ts:190](https://github.com/alercebroker/frontendcitos/blob/5c6beff/packages/http-client/src/lib/core/error/http-status-code.ts#L190)

___

### MISDIRECTED\_REQUEST

• **MISDIRECTED\_REQUEST** = ``421``

The request was directed at a server that is not able to produce a response (for example because a connection reuse).

#### Defined in

[src/lib/core/error/http-status-code.ts:274](https://github.com/alercebroker/frontendcitos/blob/5c6beff/packages/http-client/src/lib/core/error/http-status-code.ts#L274)

___

### MOVED\_PERMANENTLY

• **MOVED\_PERMANENTLY** = ``301``

This and all future requests should be directed to the given URI.

#### Defined in

[src/lib/core/error/http-status-code.ts:100](https://github.com/alercebroker/frontendcitos/blob/5c6beff/packages/http-client/src/lib/core/error/http-status-code.ts#L100)

___

### MULTIPLE\_CHOICES

• **MULTIPLE\_CHOICES** = ``300``

Indicates multiple options for the resource from which the client may choose (via agent-driven content negotiation).
For example, this code could be used to present multiple video format options,
to list files with different filename extensions, or to suggest word-sense disambiguation.

#### Defined in

[src/lib/core/error/http-status-code.ts:95](https://github.com/alercebroker/frontendcitos/blob/5c6beff/packages/http-client/src/lib/core/error/http-status-code.ts#L95)

___

### MULTI\_STATUS

• **MULTI\_STATUS** = ``207``

The message body that follows is an XML message and can contain a number of separate response codes,
depending on how many sub-requests were made.

#### Defined in

[src/lib/core/error/http-status-code.ts:76](https://github.com/alercebroker/frontendcitos/blob/5c6beff/packages/http-client/src/lib/core/error/http-status-code.ts#L76)

___

### NETWORK\_AUTHENTICATION\_REQUIRED

• **NETWORK\_AUTHENTICATION\_REQUIRED** = ``511``

The client needs to authenticate to gain network access.
Intended for use by intercepting proxies used to control access to the network (e.g., "captive portals" used
to require agreement to Terms of Service before granting full Internet access via a Wi-Fi hotspot).

#### Defined in

[src/lib/core/error/http-status-code.ts:378](https://github.com/alercebroker/frontendcitos/blob/5c6beff/packages/http-client/src/lib/core/error/http-status-code.ts#L378)

___

### NON\_AUTHORITATIVE\_INFORMATION

• **NON\_AUTHORITATIVE\_INFORMATION** = ``203``

SINCE HTTP/1.1
The server is a transforming proxy that received a 200 OK from its origin,
but is returning a modified version of the origin's response.

#### Defined in

[src/lib/core/error/http-status-code.ts:52](https://github.com/alercebroker/frontendcitos/blob/5c6beff/packages/http-client/src/lib/core/error/http-status-code.ts#L52)

___

### NOT\_ACCEPTABLE

• **NOT\_ACCEPTABLE** = ``406``

The requested resource is capable of generating only content not acceptable according to the Accept headers sent in the request.

#### Defined in

[src/lib/core/error/http-status-code.ts:195](https://github.com/alercebroker/frontendcitos/blob/5c6beff/packages/http-client/src/lib/core/error/http-status-code.ts#L195)

___

### NOT\_EXTENDED

• **NOT\_EXTENDED** = ``510``

Further extensions to the request are required for the server to fulfill it.

#### Defined in

[src/lib/core/error/http-status-code.ts:371](https://github.com/alercebroker/frontendcitos/blob/5c6beff/packages/http-client/src/lib/core/error/http-status-code.ts#L371)

___

### NOT\_FOUND

• **NOT\_FOUND** = ``404``

The requested resource could not be found but may be available in the future.
Subsequent requests by the client are permissible.

#### Defined in

[src/lib/core/error/http-status-code.ts:184](https://github.com/alercebroker/frontendcitos/blob/5c6beff/packages/http-client/src/lib/core/error/http-status-code.ts#L184)

___

### NOT\_IMPLEMENTED

• **NOT\_IMPLEMENTED** = ``501``

The server either does not recognize the request method, or it lacks the ability to fulfill the request.
Usually this implies future availability (e.g., a new feature of a web-service API).

#### Defined in

[src/lib/core/error/http-status-code.ts:330](https://github.com/alercebroker/frontendcitos/blob/5c6beff/packages/http-client/src/lib/core/error/http-status-code.ts#L330)

___

### NOT\_MODIFIED

• **NOT\_MODIFIED** = ``304``

Indicates that the resource has not been modified since the version specified by the request headers If-Modified-Since or If-None-Match.
In such case, there is no need to retransmit the resource since the client still has a previously-downloaded copy.

#### Defined in

[src/lib/core/error/http-status-code.ts:124](https://github.com/alercebroker/frontendcitos/blob/5c6beff/packages/http-client/src/lib/core/error/http-status-code.ts#L124)

___

### NO\_CONTENT

• **NO\_CONTENT** = ``204``

The server successfully processed the request and is not returning any content.

#### Defined in

[src/lib/core/error/http-status-code.ts:57](https://github.com/alercebroker/frontendcitos/blob/5c6beff/packages/http-client/src/lib/core/error/http-status-code.ts#L57)

___

### OK

• **OK** = ``200``

Standard response for successful HTTP requests.
The actual response will depend on the request method used.
In a GET request, the response will contain an entity corresponding to the requested resource.
In a POST request, the response will contain an entity describing or containing the result of the action.

#### Defined in

[src/lib/core/error/http-status-code.ts:34](https://github.com/alercebroker/frontendcitos/blob/5c6beff/packages/http-client/src/lib/core/error/http-status-code.ts#L34)

___

### PARTIAL\_CONTENT

• **PARTIAL\_CONTENT** = ``206``

The server is delivering only part of the resource (byte serving) due to a range header sent by the client.
The range header is used by HTTP clients to enable resuming of interrupted downloads,
or split a download into multiple simultaneous streams.

#### Defined in

[src/lib/core/error/http-status-code.ts:70](https://github.com/alercebroker/frontendcitos/blob/5c6beff/packages/http-client/src/lib/core/error/http-status-code.ts#L70)

___

### PAYLOAD\_TOO\_LARGE

• **PAYLOAD\_TOO\_LARGE** = ``413``

The request is larger than the server is willing or able to process. Previously called "Request Entity Too Large".

#### Defined in

[src/lib/core/error/http-status-code.ts:237](https://github.com/alercebroker/frontendcitos/blob/5c6beff/packages/http-client/src/lib/core/error/http-status-code.ts#L237)

___

### PAYMENT\_REQUIRED

• **PAYMENT\_REQUIRED** = ``402``

Reserved for future use. The original intention was that this code might be used as part of some form of digital
cash or micro payment scheme, but that has not happened, and this code is not usually used.
Google Developers API uses this status if a particular developer has exceeded the daily limit on requests.

#### Defined in

[src/lib/core/error/http-status-code.ts:172](https://github.com/alercebroker/frontendcitos/blob/5c6beff/packages/http-client/src/lib/core/error/http-status-code.ts#L172)

___

### PERMANENT\_REDIRECT

• **PERMANENT\_REDIRECT** = ``308``

The request and all future requests should be repeated using another URI.
307 and 308 parallel the behaviors of 302 and 301, but do not allow the HTTP method to change.
So, for example, submitting a form to a permanently redirected resource may continue smoothly.

#### Defined in

[src/lib/core/error/http-status-code.ts:151](https://github.com/alercebroker/frontendcitos/blob/5c6beff/packages/http-client/src/lib/core/error/http-status-code.ts#L151)

___

### PRECONDITION\_FAILED

• **PRECONDITION\_FAILED** = ``412``

The server does not meet one of the preconditions that the requester put on the request.

#### Defined in

[src/lib/core/error/http-status-code.ts:232](https://github.com/alercebroker/frontendcitos/blob/5c6beff/packages/http-client/src/lib/core/error/http-status-code.ts#L232)

___

### PRECONDITION\_REQUIRED

• **PRECONDITION\_REQUIRED** = ``428``

The origin server requires the request to be conditional.
Intended to prevent "the 'lost update' problem, where a client
GETs a resource's state, modifies it, and PUTs it back to the server,
when meanwhile a third party has modified the state on the server, leading to a conflict."

#### Defined in

[src/lib/core/error/http-status-code.ts:302](https://github.com/alercebroker/frontendcitos/blob/5c6beff/packages/http-client/src/lib/core/error/http-status-code.ts#L302)

___

### PROCESSING

• **PROCESSING** = ``102``

A WebDAV request may contain many sub-requests involving file operations, requiring a long time to complete the request.
This code indicates that the server has received and is processing the request, but no response is available yet.
This prevents the client from timing out and assuming the request was lost.

#### Defined in

[src/lib/core/error/http-status-code.ts:26](https://github.com/alercebroker/frontendcitos/blob/5c6beff/packages/http-client/src/lib/core/error/http-status-code.ts#L26)

___

### PROXY\_AUTHENTICATION\_REQUIRED

• **PROXY\_AUTHENTICATION\_REQUIRED** = ``407``

The client must first authenticate itself with the proxy.

#### Defined in

[src/lib/core/error/http-status-code.ts:200](https://github.com/alercebroker/frontendcitos/blob/5c6beff/packages/http-client/src/lib/core/error/http-status-code.ts#L200)

___

### RANGE\_NOT\_SATISFIABLE

• **RANGE\_NOT\_SATISFIABLE** = ``416``

The client has asked for a portion of the file (byte serving), but the server cannot supply that portion.
For example, if the client asked for a part of the file that lies beyond the end of the file.
Called "Requested Range Not Satisfiable" previously.

#### Defined in

[src/lib/core/error/http-status-code.ts:257](https://github.com/alercebroker/frontendcitos/blob/5c6beff/packages/http-client/src/lib/core/error/http-status-code.ts#L257)

___

### REQUEST\_HEADER\_FIELDS\_TOO\_LARGE

• **REQUEST\_HEADER\_FIELDS\_TOO\_LARGE** = ``431``

The server is unwilling to process the request because either an individual header field,
or all the header fields collectively, are too large.

#### Defined in

[src/lib/core/error/http-status-code.ts:313](https://github.com/alercebroker/frontendcitos/blob/5c6beff/packages/http-client/src/lib/core/error/http-status-code.ts#L313)

___

### REQUEST\_TIMEOUT

• **REQUEST\_TIMEOUT** = ``408``

The server timed out waiting for the request.
According to HTTP specifications:
"The client did not produce a request within the time that the server was prepared to wait. The client MAY repeat the request without modifications at any later time."

#### Defined in

[src/lib/core/error/http-status-code.ts:207](https://github.com/alercebroker/frontendcitos/blob/5c6beff/packages/http-client/src/lib/core/error/http-status-code.ts#L207)

___

### RESET\_CONTENT

• **RESET\_CONTENT** = ``205``

The server successfully processed the request, but is not returning any content.
Unlike a 204 response, this response requires that the requester reset the document view.

#### Defined in

[src/lib/core/error/http-status-code.ts:63](https://github.com/alercebroker/frontendcitos/blob/5c6beff/packages/http-client/src/lib/core/error/http-status-code.ts#L63)

___

### SEE\_OTHER

• **SEE\_OTHER** = ``303``

SINCE HTTP/1.1
The response to the request can be found under another URI using a GET method.
When received in response to a POST (or PUT/DELETE), the client should presume that
the server has received the data and should issue a redirect with a separate GET message.

#### Defined in

[src/lib/core/error/http-status-code.ts:118](https://github.com/alercebroker/frontendcitos/blob/5c6beff/packages/http-client/src/lib/core/error/http-status-code.ts#L118)

___

### SERVICE\_UNAVAILABLE

• **SERVICE\_UNAVAILABLE** = ``503``

The server is currently unavailable (because it is overloaded or down for maintenance).
Generally, this is a temporary state.

#### Defined in

[src/lib/core/error/http-status-code.ts:341](https://github.com/alercebroker/frontendcitos/blob/5c6beff/packages/http-client/src/lib/core/error/http-status-code.ts#L341)

___

### SWITCHING\_PROTOCOLS

• **SWITCHING\_PROTOCOLS** = ``101``

The requester has asked the server to switch protocols and the server has agreed to do so.

#### Defined in

[src/lib/core/error/http-status-code.ts:19](https://github.com/alercebroker/frontendcitos/blob/5c6beff/packages/http-client/src/lib/core/error/http-status-code.ts#L19)

___

### SWITCH\_PROXY

• **SWITCH\_PROXY** = ``306``

No longer used. Originally meant "Subsequent requests should use the specified proxy."

#### Defined in

[src/lib/core/error/http-status-code.ts:136](https://github.com/alercebroker/frontendcitos/blob/5c6beff/packages/http-client/src/lib/core/error/http-status-code.ts#L136)

___

### TEMPORARY\_REDIRECT

• **TEMPORARY\_REDIRECT** = ``307``

SINCE HTTP/1.1
In this case, the request should be repeated with another URI; however, future requests should still use the original URI.
In contrast to how 302 was historically implemented, the request method is not allowed to be changed when reissuing the original request.
For example, a POST request should be repeated using another POST request.

#### Defined in

[src/lib/core/error/http-status-code.ts:144](https://github.com/alercebroker/frontendcitos/blob/5c6beff/packages/http-client/src/lib/core/error/http-status-code.ts#L144)

___

### TOO\_MANY\_REQUESTS

• **TOO\_MANY\_REQUESTS** = ``429``

The user has sent too many requests in a given amount of time. Intended for use with rate-limiting schemes.

#### Defined in

[src/lib/core/error/http-status-code.ts:307](https://github.com/alercebroker/frontendcitos/blob/5c6beff/packages/http-client/src/lib/core/error/http-status-code.ts#L307)

___

### UNAUTHORIZED

• **UNAUTHORIZED** = ``401``

Similar to 403 Forbidden, but specifically for use when authentication is required and has failed or has not yet
been provided. The response must include a WWW-Authenticate header field containing a challenge applicable to the
requested resource. See Basic access authentication and Digest access authentication. 401 semantically means
"unauthenticated",i.e. the user does not have the necessary credentials.

#### Defined in

[src/lib/core/error/http-status-code.ts:165](https://github.com/alercebroker/frontendcitos/blob/5c6beff/packages/http-client/src/lib/core/error/http-status-code.ts#L165)

___

### UNAVAILABLE\_FOR\_LEGAL\_REASONS

• **UNAVAILABLE\_FOR\_LEGAL\_REASONS** = ``451``

A server operator has received a legal demand to deny access to a resource or to a set of resources
that includes the requested resource. The code 451 was chosen as a reference to the novel Fahrenheit 451.

#### Defined in

[src/lib/core/error/http-status-code.ts:319](https://github.com/alercebroker/frontendcitos/blob/5c6beff/packages/http-client/src/lib/core/error/http-status-code.ts#L319)

___

### UNPROCESSABLE\_ENTITY

• **UNPROCESSABLE\_ENTITY** = ``422``

The request was well-formed but was unable to be followed due to semantic errors.

#### Defined in

[src/lib/core/error/http-status-code.ts:279](https://github.com/alercebroker/frontendcitos/blob/5c6beff/packages/http-client/src/lib/core/error/http-status-code.ts#L279)

___

### UNSUPPORTED\_MEDIA\_TYPE

• **UNSUPPORTED\_MEDIA\_TYPE** = ``415``

The request entity has a media type which the server or resource does not support.
For example, the client uploads an image as image/svg+xml, but the server requires that images use a different format.

#### Defined in

[src/lib/core/error/http-status-code.ts:250](https://github.com/alercebroker/frontendcitos/blob/5c6beff/packages/http-client/src/lib/core/error/http-status-code.ts#L250)

___

### UPGRADE\_REQUIRED

• **UPGRADE\_REQUIRED** = ``426``

The client should switch to a different protocol such as TLS/1.0, given in the Upgrade header field.

#### Defined in

[src/lib/core/error/http-status-code.ts:294](https://github.com/alercebroker/frontendcitos/blob/5c6beff/packages/http-client/src/lib/core/error/http-status-code.ts#L294)

___

### URI\_TOO\_LONG

• **URI\_TOO\_LONG** = ``414``

The URI provided was too long for the server to process. Often the result of too much data being encoded as a query-string of a GET request,
in which case it should be converted to a POST request.
Called "Request-URI Too Long" previously.

#### Defined in

[src/lib/core/error/http-status-code.ts:244](https://github.com/alercebroker/frontendcitos/blob/5c6beff/packages/http-client/src/lib/core/error/http-status-code.ts#L244)

___

### USE\_PROXY

• **USE\_PROXY** = ``305``

SINCE HTTP/1.1
The requested resource is available only through a proxy, the address for which is provided in the response.
Many HTTP clients (such as Mozilla and Internet Explorer) do not correctly handle responses with this status code, primarily for security reasons.

#### Defined in

[src/lib/core/error/http-status-code.ts:131](https://github.com/alercebroker/frontendcitos/blob/5c6beff/packages/http-client/src/lib/core/error/http-status-code.ts#L131)

___

### VARIANT\_ALSO\_NEGOTIATES

• **VARIANT\_ALSO\_NEGOTIATES** = ``506``

Transparent content negotiation for the request results in a circular reference.

#### Defined in

[src/lib/core/error/http-status-code.ts:356](https://github.com/alercebroker/frontendcitos/blob/5c6beff/packages/http-client/src/lib/core/error/http-status-code.ts#L356)
