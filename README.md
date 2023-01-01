<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# Logarithm of Probability Density Function

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> [Arcsine][arcsine-distribution] distribution logarithm of [probability density function][pdf] (PDF).

<section class="intro">

The [probability density function][pdf] (PDF) for a [arcsine][arcsine-distribution] random variable is

<!-- <equation class="equation" label="eq:arcsine_pdf" align="center" raw="f(x;a,b)=\begin{cases} {\frac{1}{\pi {\sqrt{(x-a)(b-x)}}}} & \text{for } x \in [a,b] \\ 0 & \text{otherwise} \end{cases}" alt="Probability density function (PDF) for an distribution."> -->

<div class="equation" align="center" data-raw-text="f(x;a,b)=\begin{cases} {\frac{1}{\pi {\sqrt{(x-a)(b-x)}}}} &amp; \text{for } x \in [a,b] \\ 0 &amp; \text{otherwise} \end{cases}" data-equation="eq:arcsine_pdf">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/arcsine/logpdf/docs/img/equation_arcsine_pdf.svg" alt="Probability density function (PDF) for an distribution.">
    <br>
</div>

<!-- </equation> -->

where `a` is the minimum support and `b` is the maximum support of the distribution. The parameters must satisfy `a < b`.

</section>

<!-- /.intro -->



<section class="usage">

## Usage

```javascript
import logpdf from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-arcsine-logpdf@deno/mod.js';
```

You can also import the following named exports from the package:

```javascript
import { factory } from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-arcsine-logpdf@deno/mod.js';
```

#### logpdf( x, a, b )

Evaluates the logarithm of the [probability density function][pdf] (PDF) for an [arcsine][arcsine-distribution] distribution with parameters `a` (minimum support) and `b` (maximum support).

```javascript
var y = logpdf( 2.0, 0.0, 4.0 );
// returns ~-1.838

y = logpdf( 5.0, 0.0, 4.0 );
// returns -Infinity

y = logpdf( 0.25, 0.0, 1.0 );
// returns ~-0.308
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = logpdf( NaN, 0.0, 1.0 );
// returns NaN

y = logpdf( 0.0, NaN, 1.0 );
// returns NaN

y = logpdf( 0.0, 0.0, NaN );
// returns NaN
```

If provided `a >= b`, the function returns `NaN`.

```javascript
var y = logpdf( 2.5, 3.0, 2.0 );
// returns NaN

y = logpdf( 2.5, 3.0, 3.0 );
// returns NaN
```

#### logpdf.factory( a, b )

Returns a `function` for evaluating the logarithm of the [PDF][pdf] for an [arcsine][arcsine-distribution] distribution with parameters `a` (minimum support) and `b` (maximum support).

```javascript
var mylogPDF = logpdf.factory( 6.0, 7.0 );
var y = mylogPDF( 7.0 );
// returns Infinity

y = mylogPDF( 5.0 );
// returns -Infinity
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   In virtually all cases, using the `logpdf` or `logcdf` functions is preferable to manually computing the logarithm of the `pdf` or `cdf`, respectively, since the latter is prone to overflow and underflow.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
import randu from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-randu@deno/mod.js';
import logpdf from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-arcsine-logpdf@deno/mod.js';

var a;
var b;
var x;
var y;
var i;

for ( i = 0; i < 25; i++ ) {
    x = ( randu()*20.0 ) - 10.0;
    a = ( randu()*20.0 ) - 20.0;
    b = a + ( randu()*40.0 );
    y = logpdf( x, a, b );
    console.log( 'x: %d, a: %d, b: %d, ln(f(x;a,b)): %d', x.toFixed( 4 ), a.toFixed( 4 ), b.toFixed( 4 ), y.toFixed( 4 ) );
}
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-base-dists-arcsine-logpdf.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-base-dists-arcsine-logpdf

[test-image]: https://github.com/stdlib-js/stats-base-dists-arcsine-logpdf/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/stats-base-dists-arcsine-logpdf/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-base-dists-arcsine-logpdf/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-base-dists-arcsine-logpdf?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-base-dists-arcsine-logpdf.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-base-dists-arcsine-logpdf/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-base-dists-arcsine-logpdf/tree/deno
[umd-url]: https://github.com/stdlib-js/stats-base-dists-arcsine-logpdf/tree/umd
[esm-url]: https://github.com/stdlib-js/stats-base-dists-arcsine-logpdf/tree/esm
[branches-url]: https://github.com/stdlib-js/stats-base-dists-arcsine-logpdf/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-base-dists-arcsine-logpdf/main/LICENSE

[pdf]: https://en.wikipedia.org/wiki/Probability_density_function

[arcsine-distribution]: https://en.wikipedia.org/wiki/Uniform_distribution

</section>

<!-- /.links -->
