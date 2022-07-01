## Classes

<dl>
<dt><a href="#HttpService">HttpService</a></dt>
<dd><p>http service class</p></dd>
<dt><a href="#HttpError">HttpError</a></dt>
<dd><p>HttpError class</p></dd>
<dt><a href="#ParseError">ParseError</a></dt>
<dd><p>Parse error class</p></dd>
</dl>

## Members

<dl>
<dt><a href="#ParseError">ParseError</a></dt>
<dd><p>Identifies if object is instance of ParseError</p></dd>
</dl>

<a name="HttpService"></a>

## HttpService
<p>http service class</p>

**Kind**: global class  

* [HttpService](#HttpService)
    * [new HttpService(baseUrl, axiosInstance, accessToken)](#new_HttpService_new)
    * [.get(requestObject, parser)](#HttpService+get) ⇒
    * [.post(requestObject, parser)](#HttpService+post) ⇒

<a name="new_HttpService_new"></a>

### new HttpService(baseUrl, axiosInstance, accessToken)
<p>http service constructor</p>


| Param | Description |
| --- | --- |
| baseUrl | <p>base url for axsios instance</p> |
| axiosInstance | <p>optional axios instance to use instead of creating a new one</p> |
| accessToken | <p>token for authentication with the API</p> |

<a name="HttpService+get"></a>

### httpService.get(requestObject, parser) ⇒
<p>Performs a GET http request and parses the result.</p>
<h3>Example usage</h3>
<pre class="prettyprint source lang-js"><code> import { HttpService } from 'http-client
 const client = HttpService('https://api.alerce.online/alerts/v1/')
 const parseTo = (response) => {
   return {
     oid: response.objectId,
     ra: response.meanRa,
     dec: response.meanDec,
   }
 }
 const filterParams = { ra: 37, dec: -14 }
 const result = await client.get(
   { url: '/objects', config: { params: filterParams } },
   { parseTo }
 )
 console.log(result)
</code></pre>

**Kind**: instance method of [<code>HttpService</code>](#HttpService)  
**Returns**: <p>the parsed data according to the parseTo function.</p>  

| Param | Description |
| --- | --- |
| requestObject | <p>an object containing url and axios config for the request.</p> |
| parser | <p>object containing the parser function for the result.</p> |

<a name="HttpService+post"></a>

### httpService.post(requestObject, parser) ⇒
<p>Performs a POST http request and parses the result.</p>

**Kind**: instance method of [<code>HttpService</code>](#HttpService)  
**Returns**: <p>the parsed data according to the parseTo function.</p>  

| Param | Description |
| --- | --- |
| requestObject | <p>an object containing url and axios config for the request.</p> |
| parser | <p>object containing the parser function for the result.</p> |

<a name="HttpError"></a>

## HttpError
<p>HttpError class</p>

**Kind**: global class  
<a name="ParseError"></a>

## ParseError
<p>Parse error class</p>

**Kind**: global class  
<a name="ParseError"></a>

## ParseError
<p>Identifies if object is instance of ParseError</p>

**Kind**: global variable  

| Param | Description |
| --- | --- |
| e | <p>error instance</p> |

<a name="HttpStatusCode"></a>

## HttpStatusCode : <code>enum</code>
<p>Hypertext Transfer Protocol (HTTP) response status codes.</p>

**Kind**: global enum  
**See**: [https://en.wikipedia.org/wiki/List_of_HTTP_status_codes](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes)  
