import { GET_ISSUE } from '../queries/getReactIssues'
import { IssueState } from '../../generated/graphql'

export const mockIssue17846 = {
    request: {
        query: GET_ISSUE,
        variables: {
            id: 17846,
        },
    },
    result: {
        data: {
            repository: {
                issue: {
                    title: 'Warning: Did not expect server HTML to contain the [first prerendered] text node "[chinese characters]"',
                    bodyHTML:
                        '<p>I don\'t even know where to start with this. When I inspect the source of this error, it is a very well-written section of code, but I can find almost no documentation on this problem anywhere. I don\'t know what causes it and short of spending the next two weeks stepping through React and Next.js, I have no way of know where to start. I thought I had fixed the problem by making FontAwesome a dynamic import, but then the text next to it through the same error. I\'ve also had classes causing errors by not resolving to the same class names on hydration as the prerendered HTML has. I don\'t understand this problem and I don\'t know what it means.</p>\n<p>Here\'s my package.json, if that helps anything. This problem doesn\'t make any sense to me but i\'ve been running into it since I started with next.js, but I don\'t know anything about it.</p>\n<div class="highlight highlight-source-json position-relative overflow-auto" data-snippet-clipboard-copy-content="{\n  &quot;name&quot;: &quot;next-project&quot;,\n  &quot;version&quot;: &quot;1.0.0&quot;,\n  &quot;description&quot;: &quot;&quot;,\n  &quot;main&quot;: &quot;src/pages/index.ts&quot;,\n  &quot;scripts&quot;: {\n    &quot;dev&quot;: &quot;rm -rf .next .expo &amp;&amp; next dev&quot;,\n    &quot;build&quot;: &quot;next build&quot;,\n    &quot;start&quot;: &quot;next start&quot;,\n    &quot;next&quot;: &quot;next&quot;\n  },\n  &quot;author&quot;: &quot;https://github.com/arlen22/&quot;,\n  &quot;license&quot;: &quot;ISC&quot;,\n  &quot;dependencies&quot;: {\n    &quot;@expo/vector-icons&quot;: &quot;^10.0.6&quot;,\n    &quot;@unimodules/core&quot;: &quot;^5.0.0&quot;,\n    &quot;@unimodules/react-native-adapter&quot;: &quot;^5.0.0&quot;,\n    &quot;@zeit/next-css&quot;: &quot;^1.0.1&quot;,\n    &quot;babel-preset-expo&quot;: &quot;^8.0.0&quot;,\n    &quot;expo-asset&quot;: &quot;^8.0.0&quot;,\n    &quot;expo-font&quot;: &quot;^8.0.0&quot;,\n    &quot;native-base&quot;: &quot;^2.13.8&quot;,\n    &quot;next&quot;: &quot;^9.1.5&quot;,\n    &quot;next-fonts&quot;: &quot;^0.19.0&quot;,\n    &quot;next-images&quot;: &quot;^1.2.0&quot;,\n    &quot;next-progressbar&quot;: &quot;^1.0.0&quot;,\n    &quot;node-fetch&quot;: &quot;^2.6.0&quot;,\n    &quot;react&quot;: &quot;^16.12.0&quot;,\n    &quot;react-dom&quot;: &quot;^16.12.0&quot;,\n    &quot;react-icons&quot;: &quot;^3.8.0&quot;,\n    &quot;react-native-drawer-layout&quot;: &quot;^2.0.0&quot;,\n    &quot;react-native-web&quot;: &quot;^0.11.7&quot;,\n    &quot;rxjs&quot;: &quot;^6.5.4&quot;\n  },\n  &quot;devDependencies&quot;: {\n    &quot;@expo/next-adapter&quot;: &quot;^2.0.0-beta.10&quot;,\n    &quot;@types/node&quot;: &quot;^12.12.18&quot;,\n    &quot;@types/react&quot;: &quot;^16.9.16&quot;,\n    &quot;@types/react-native&quot;: &quot;^0.60.25&quot;,\n    &quot;@types/react-native-drawer-layout&quot;: &quot;^1.3.5&quot;,\n    &quot;file-loader&quot;: &quot;^5.0.2&quot;,\n    &quot;next-transpile-modules&quot;: &quot;^2.3.1&quot;,\n    &quot;typescript&quot;: &quot;^3.7.3&quot;,\n    &quot;url-loader&quot;: &quot;^3.0.0&quot;\n  }\n}\n"><pre>{\n  <span class="pl-s"><span class="pl-pds">"</span>name<span class="pl-pds">"</span></span>: <span class="pl-s"><span class="pl-pds">"</span>next-project<span class="pl-pds">"</span></span>,\n  <span class="pl-s"><span class="pl-pds">"</span>version<span class="pl-pds">"</span></span>: <span class="pl-s"><span class="pl-pds">"</span>1.0.0<span class="pl-pds">"</span></span>,\n  <span class="pl-s"><span class="pl-pds">"</span>description<span class="pl-pds">"</span></span>: <span class="pl-s"><span class="pl-pds">"</span><span class="pl-pds">"</span></span>,\n  <span class="pl-s"><span class="pl-pds">"</span>main<span class="pl-pds">"</span></span>: <span class="pl-s"><span class="pl-pds">"</span>src/pages/index.ts<span class="pl-pds">"</span></span>,\n  <span class="pl-s"><span class="pl-pds">"</span>scripts<span class="pl-pds">"</span></span>: {\n    <span class="pl-s"><span class="pl-pds">"</span>dev<span class="pl-pds">"</span></span>: <span class="pl-s"><span class="pl-pds">"</span>rm -rf .next .expo &amp;&amp; next dev<span class="pl-pds">"</span></span>,\n    <span class="pl-s"><span class="pl-pds">"</span>build<span class="pl-pds">"</span></span>: <span class="pl-s"><span class="pl-pds">"</span>next build<span class="pl-pds">"</span></span>,\n    <span class="pl-s"><span class="pl-pds">"</span>start<span class="pl-pds">"</span></span>: <span class="pl-s"><span class="pl-pds">"</span>next start<span class="pl-pds">"</span></span>,\n    <span class="pl-s"><span class="pl-pds">"</span>next<span class="pl-pds">"</span></span>: <span class="pl-s"><span class="pl-pds">"</span>next<span class="pl-pds">"</span></span>\n  },\n  <span class="pl-s"><span class="pl-pds">"</span>author<span class="pl-pds">"</span></span>: <span class="pl-s"><span class="pl-pds">"</span>https://github.com/arlen22/<span class="pl-pds">"</span></span>,\n  <span class="pl-s"><span class="pl-pds">"</span>license<span class="pl-pds">"</span></span>: <span class="pl-s"><span class="pl-pds">"</span>ISC<span class="pl-pds">"</span></span>,\n  <span class="pl-s"><span class="pl-pds">"</span>dependencies<span class="pl-pds">"</span></span>: {\n    <span class="pl-s"><span class="pl-pds">"</span>@expo/vector-icons<span class="pl-pds">"</span></span>: <span class="pl-s"><span class="pl-pds">"</span>^10.0.6<span class="pl-pds">"</span></span>,\n    <span class="pl-s"><span class="pl-pds">"</span>@unimodules/core<span class="pl-pds">"</span></span>: <span class="pl-s"><span class="pl-pds">"</span>^5.0.0<span class="pl-pds">"</span></span>,\n    <span class="pl-s"><span class="pl-pds">"</span>@unimodules/react-native-adapter<span class="pl-pds">"</span></span>: <span class="pl-s"><span class="pl-pds">"</span>^5.0.0<span class="pl-pds">"</span></span>,\n    <span class="pl-s"><span class="pl-pds">"</span>@zeit/next-css<span class="pl-pds">"</span></span>: <span class="pl-s"><span class="pl-pds">"</span>^1.0.1<span class="pl-pds">"</span></span>,\n    <span class="pl-s"><span class="pl-pds">"</span>babel-preset-expo<span class="pl-pds">"</span></span>: <span class="pl-s"><span class="pl-pds">"</span>^8.0.0<span class="pl-pds">"</span></span>,\n    <span class="pl-s"><span class="pl-pds">"</span>expo-asset<span class="pl-pds">"</span></span>: <span class="pl-s"><span class="pl-pds">"</span>^8.0.0<span class="pl-pds">"</span></span>,\n    <span class="pl-s"><span class="pl-pds">"</span>expo-font<span class="pl-pds">"</span></span>: <span class="pl-s"><span class="pl-pds">"</span>^8.0.0<span class="pl-pds">"</span></span>,\n    <span class="pl-s"><span class="pl-pds">"</span>native-base<span class="pl-pds">"</span></span>: <span class="pl-s"><span class="pl-pds">"</span>^2.13.8<span class="pl-pds">"</span></span>,\n    <span class="pl-s"><span class="pl-pds">"</span>next<span class="pl-pds">"</span></span>: <span class="pl-s"><span class="pl-pds">"</span>^9.1.5<span class="pl-pds">"</span></span>,\n    <span class="pl-s"><span class="pl-pds">"</span>next-fonts<span class="pl-pds">"</span></span>: <span class="pl-s"><span class="pl-pds">"</span>^0.19.0<span class="pl-pds">"</span></span>,\n    <span class="pl-s"><span class="pl-pds">"</span>next-images<span class="pl-pds">"</span></span>: <span class="pl-s"><span class="pl-pds">"</span>^1.2.0<span class="pl-pds">"</span></span>,\n    <span class="pl-s"><span class="pl-pds">"</span>next-progressbar<span class="pl-pds">"</span></span>: <span class="pl-s"><span class="pl-pds">"</span>^1.0.0<span class="pl-pds">"</span></span>,\n    <span class="pl-s"><span class="pl-pds">"</span>node-fetch<span class="pl-pds">"</span></span>: <span class="pl-s"><span class="pl-pds">"</span>^2.6.0<span class="pl-pds">"</span></span>,\n    <span class="pl-s"><span class="pl-pds">"</span>react<span class="pl-pds">"</span></span>: <span class="pl-s"><span class="pl-pds">"</span>^16.12.0<span class="pl-pds">"</span></span>,\n    <span class="pl-s"><span class="pl-pds">"</span>react-dom<span class="pl-pds">"</span></span>: <span class="pl-s"><span class="pl-pds">"</span>^16.12.0<span class="pl-pds">"</span></span>,\n    <span class="pl-s"><span class="pl-pds">"</span>react-icons<span class="pl-pds">"</span></span>: <span class="pl-s"><span class="pl-pds">"</span>^3.8.0<span class="pl-pds">"</span></span>,\n    <span class="pl-s"><span class="pl-pds">"</span>react-native-drawer-layout<span class="pl-pds">"</span></span>: <span class="pl-s"><span class="pl-pds">"</span>^2.0.0<span class="pl-pds">"</span></span>,\n    <span class="pl-s"><span class="pl-pds">"</span>react-native-web<span class="pl-pds">"</span></span>: <span class="pl-s"><span class="pl-pds">"</span>^0.11.7<span class="pl-pds">"</span></span>,\n    <span class="pl-s"><span class="pl-pds">"</span>rxjs<span class="pl-pds">"</span></span>: <span class="pl-s"><span class="pl-pds">"</span>^6.5.4<span class="pl-pds">"</span></span>\n  },\n  <span class="pl-s"><span class="pl-pds">"</span>devDependencies<span class="pl-pds">"</span></span>: {\n    <span class="pl-s"><span class="pl-pds">"</span>@expo/next-adapter<span class="pl-pds">"</span></span>: <span class="pl-s"><span class="pl-pds">"</span>^2.0.0-beta.10<span class="pl-pds">"</span></span>,\n    <span class="pl-s"><span class="pl-pds">"</span>@types/node<span class="pl-pds">"</span></span>: <span class="pl-s"><span class="pl-pds">"</span>^12.12.18<span class="pl-pds">"</span></span>,\n    <span class="pl-s"><span class="pl-pds">"</span>@types/react<span class="pl-pds">"</span></span>: <span class="pl-s"><span class="pl-pds">"</span>^16.9.16<span class="pl-pds">"</span></span>,\n    <span class="pl-s"><span class="pl-pds">"</span>@types/react-native<span class="pl-pds">"</span></span>: <span class="pl-s"><span class="pl-pds">"</span>^0.60.25<span class="pl-pds">"</span></span>,\n    <span class="pl-s"><span class="pl-pds">"</span>@types/react-native-drawer-layout<span class="pl-pds">"</span></span>: <span class="pl-s"><span class="pl-pds">"</span>^1.3.5<span class="pl-pds">"</span></span>,\n    <span class="pl-s"><span class="pl-pds">"</span>file-loader<span class="pl-pds">"</span></span>: <span class="pl-s"><span class="pl-pds">"</span>^5.0.2<span class="pl-pds">"</span></span>,\n    <span class="pl-s"><span class="pl-pds">"</span>next-transpile-modules<span class="pl-pds">"</span></span>: <span class="pl-s"><span class="pl-pds">"</span>^2.3.1<span class="pl-pds">"</span></span>,\n    <span class="pl-s"><span class="pl-pds">"</span>typescript<span class="pl-pds">"</span></span>: <span class="pl-s"><span class="pl-pds">"</span>^3.7.3<span class="pl-pds">"</span></span>,\n    <span class="pl-s"><span class="pl-pds">"</span>url-loader<span class="pl-pds">"</span></span>: <span class="pl-s"><span class="pl-pds">"</span>^3.0.0<span class="pl-pds">"</span></span>\n  }\n}</pre></div>',
                    state: IssueState.Closed,
                    number: 17846,
                    createdAt: '2020-01-15T15:41:52Z',
                    closedAt: '2020-04-22T13:42:10Z',
                    author: {
                        login: 'Arlen22',
                    },
                    comments: {
                        pageInfo: {
                            hasNextPage: false,
                        },
                        totalCount: 16,
                        edges: [
                            {
                                node: {
                                    author: {
                                        login: 'gaearon',
                                    },
                                    createdAt: '2020-01-15T19:18:35Z',
                                    databaseId: 574813645,
                                    bodyHTML:
                                        "<p>It's very unlikely we'd be able to help you without a reduced reproducing case.</p>",
                                },
                            },
                            {
                                node: {
                                    author: {
                                        login: 'Arlen22',
                                    },
                                    createdAt: '2020-01-15T20:03:38Z',
                                    databaseId: 574833076,
                                    bodyHTML:
                                        "<p>I don't know how to narrow it down to a reproducible use case. Basically there is no way to reliably get it to happen because I don't know why it's happening. I don't know what the situations are that can cause the error. The only reason I posted it here was because the error is in ReactDOM and I think it's connected with React DOM Server. I've got it to happen with almost no code, and yet I can't reliably reproduce it.</p>",
                                },
                            },
                            {
                                node: {
                                    author: {
                                        login: 'Arlen22',
                                    },
                                    createdAt: '2020-01-15T20:20:11Z',
                                    databaseId: 574839103,
                                    bodyHTML:
                                        '<p>Here is my next.config.js.</p>\n<div class="highlight highlight-source-js position-relative overflow-auto" data-snippet-clipboard-copy-content="const withPB = require(&quot;next-progressbar&quot;);\nconst { withExpo } = require(\'@expo/next-adapter\');\nconst withImages = require(\'next-images\');\nconst withFonts = require(\'next-fonts\');\nconst withCSS = require(\'@zeit/next-css\')\nconst path = require(\'path\');\n\nmodule.exports = withCSS(withExpo(withImages(withFonts(withPB({\n  projectRoot: __dirname,\n  typescript:{\n    ignoreDevErrors: true\n  },\n  webpack(config, options) {\n    config.resolve.alias[\'src\'] = path.join(__dirname, \'src\');\n    config.resolve.alias[\'assets\'] = path.join(__dirname, \'assets\');\n    config.resolve.alias[\'cache\'] = path.join(__dirname, \'cache\');\n    return config\n  },\n})))));\n"><pre><span class="pl-k">const</span> <span class="pl-s1">withPB</span> <span class="pl-c1">=</span> <span class="pl-en">require</span><span class="pl-kos">(</span><span class="pl-s">"next-progressbar"</span><span class="pl-kos">)</span><span class="pl-kos">;</span>\n<span class="pl-k">const</span> <span class="pl-kos">{</span> withExpo <span class="pl-kos">}</span> <span class="pl-c1">=</span> <span class="pl-en">require</span><span class="pl-kos">(</span><span class="pl-s">\'@expo/next-adapter\'</span><span class="pl-kos">)</span><span class="pl-kos">;</span>\n<span class="pl-k">const</span> <span class="pl-s1">withImages</span> <span class="pl-c1">=</span> <span class="pl-en">require</span><span class="pl-kos">(</span><span class="pl-s">\'next-images\'</span><span class="pl-kos">)</span><span class="pl-kos">;</span>\n<span class="pl-k">const</span> <span class="pl-s1">withFonts</span> <span class="pl-c1">=</span> <span class="pl-en">require</span><span class="pl-kos">(</span><span class="pl-s">\'next-fonts\'</span><span class="pl-kos">)</span><span class="pl-kos">;</span>\n<span class="pl-k">const</span> <span class="pl-s1">withCSS</span> <span class="pl-c1">=</span> <span class="pl-en">require</span><span class="pl-kos">(</span><span class="pl-s">\'@zeit/next-css\'</span><span class="pl-kos">)</span>\n<span class="pl-k">const</span> <span class="pl-s1">path</span> <span class="pl-c1">=</span> <span class="pl-en">require</span><span class="pl-kos">(</span><span class="pl-s">\'path\'</span><span class="pl-kos">)</span><span class="pl-kos">;</span>\n\n<span class="pl-smi">module</span><span class="pl-kos">.</span><span class="pl-c1">exports</span> <span class="pl-c1">=</span> <span class="pl-s1">withCSS</span><span class="pl-kos">(</span><span class="pl-en">withExpo</span><span class="pl-kos">(</span><span class="pl-s1">withImages</span><span class="pl-kos">(</span><span class="pl-s1">withFonts</span><span class="pl-kos">(</span><span class="pl-s1">withPB</span><span class="pl-kos">(</span><span class="pl-kos">{</span>\n  <span class="pl-c1">projectRoot</span>: <span class="pl-s1">__dirname</span><span class="pl-kos">,</span>\n  <span class="pl-c1">typescript</span>:<span class="pl-kos">{</span>\n    <span class="pl-c1">ignoreDevErrors</span>: <span class="pl-c1">true</span>\n  <span class="pl-kos">}</span><span class="pl-kos">,</span>\n  <span class="pl-en">webpack</span><span class="pl-kos">(</span><span class="pl-s1">config</span><span class="pl-kos">,</span> <span class="pl-s1">options</span><span class="pl-kos">)</span> <span class="pl-kos">{</span>\n    <span class="pl-s1">config</span><span class="pl-kos">.</span><span class="pl-c1">resolve</span><span class="pl-kos">.</span><span class="pl-c1">alias</span><span class="pl-kos">[</span><span class="pl-s">\'src\'</span><span class="pl-kos">]</span> <span class="pl-c1">=</span> <span class="pl-s1">path</span><span class="pl-kos">.</span><span class="pl-en">join</span><span class="pl-kos">(</span><span class="pl-s1">__dirname</span><span class="pl-kos">,</span> <span class="pl-s">\'src\'</span><span class="pl-kos">)</span><span class="pl-kos">;</span>\n    <span class="pl-s1">config</span><span class="pl-kos">.</span><span class="pl-c1">resolve</span><span class="pl-kos">.</span><span class="pl-c1">alias</span><span class="pl-kos">[</span><span class="pl-s">\'assets\'</span><span class="pl-kos">]</span> <span class="pl-c1">=</span> <span class="pl-s1">path</span><span class="pl-kos">.</span><span class="pl-en">join</span><span class="pl-kos">(</span><span class="pl-s1">__dirname</span><span class="pl-kos">,</span> <span class="pl-s">\'assets\'</span><span class="pl-kos">)</span><span class="pl-kos">;</span>\n    <span class="pl-s1">config</span><span class="pl-kos">.</span><span class="pl-c1">resolve</span><span class="pl-kos">.</span><span class="pl-c1">alias</span><span class="pl-kos">[</span><span class="pl-s">\'cache\'</span><span class="pl-kos">]</span> <span class="pl-c1">=</span> <span class="pl-s1">path</span><span class="pl-kos">.</span><span class="pl-en">join</span><span class="pl-kos">(</span><span class="pl-s1">__dirname</span><span class="pl-kos">,</span> <span class="pl-s">\'cache\'</span><span class="pl-kos">)</span><span class="pl-kos">;</span>\n    <span class="pl-k">return</span> <span class="pl-s1">config</span>\n  <span class="pl-kos">}</span><span class="pl-kos">,</span>\n<span class="pl-kos">}</span><span class="pl-kos">)</span><span class="pl-kos">)</span><span class="pl-kos">)</span><span class="pl-kos">)</span><span class="pl-kos">)</span><span class="pl-kos">;</span></pre></div>',
                                },
                            },
                            {
                                node: {
                                    author: {
                                        login: 'Arlen22',
                                    },
                                    createdAt: '2020-01-15T20:34:28Z',
                                    databaseId: 574844364,
                                    bodyHTML:
                                        "<p>The code is so well written that it really looks like it should be a well-understood problem. It's obviously a sanity check, though, because most things seem to still work. At first I thought it was breaking my Javascript, but I was able to figure out that it is just a regular warning, not an exception.</p>",
                                },
                            },
                            {
                                node: {
                                    author: {
                                        login: 'Arlen22',
                                    },
                                    createdAt: '2020-01-15T22:33:07Z',
                                    databaseId: 574888494,
                                    bodyHTML:
                                        '<p>This is my render tree. The problem randomly appears and disappears, and even deleting the <code>.next</code> and <code>.expo</code> folders does nothing.</p>\n<p>This is my render tree.</p>\n<div class="highlight highlight-source-ts position-relative overflow-auto" data-snippet-clipboard-copy-content="import Drawer from &quot;react-native-drawer-layout&quot;\n\n  return renderContextChain([\n    ContextTuple(Editor.isEditMode, false),\n    ContextTuple(LanguageContext, &quot;en-en&quot;),\n    ContextTuple(FontContext, fontStyle)\n  ], [\n    ce(View, { key: &quot;root-container&quot;, style: WrapperStyles.container },\n      ce(Drawer, drawer.props(),\n        ce(TopBar, topbar),\n        ce(ScrollView, {\n          style: {},\n          contentContainerStyle: { minHeight: 200 }\n        } as ScrollViewProps,\n          screens[index].sections.map(({ items, title, showTitle, layout, id, aspectRatio }) =&gt;\n            ce(SectionScroller, {\n              key: id, id, title, items, layout, aspectRatio,\n              refreshing: false, showTitle, onSelect\n            })\n          )\n        )\n      )\n    )\n  ])\n"><pre><span class="pl-k">import</span> <span class="pl-smi">Drawer</span> <span class="pl-k">from</span> <span class="pl-s">"react-native-drawer-layout"</span>\n\n  <span class="pl-k">return</span> <span class="pl-en">renderContextChain</span><span class="pl-kos">(</span><span class="pl-kos">[</span>\n    <span class="pl-smi">ContextTuple</span><span class="pl-kos">(</span><span class="pl-smi">Editor</span><span class="pl-kos">.</span><span class="pl-c1">isEditMode</span><span class="pl-kos">,</span> <span class="pl-c1">false</span><span class="pl-kos">)</span><span class="pl-kos">,</span>\n    <span class="pl-smi">ContextTuple</span><span class="pl-kos">(</span><span class="pl-smi">LanguageContext</span><span class="pl-kos">,</span> <span class="pl-s">"en-en"</span><span class="pl-kos">)</span><span class="pl-kos">,</span>\n    <span class="pl-smi">ContextTuple</span><span class="pl-kos">(</span><span class="pl-smi">FontContext</span><span class="pl-kos">,</span> <span class="pl-s1">fontStyle</span><span class="pl-kos">)</span>\n  <span class="pl-kos">]</span><span class="pl-kos">,</span> <span class="pl-kos">[</span>\n    <span class="pl-en">ce</span><span class="pl-kos">(</span><span class="pl-smi">View</span><span class="pl-kos">,</span> <span class="pl-kos">{</span> <span class="pl-c1">key</span>: <span class="pl-s">"root-container"</span><span class="pl-kos">,</span> <span class="pl-c1">style</span>: <span class="pl-smi">WrapperStyles</span><span class="pl-kos">.</span><span class="pl-c1">container</span> <span class="pl-kos">}</span><span class="pl-kos">,</span>\n      <span class="pl-en">ce</span><span class="pl-kos">(</span><span class="pl-smi">Drawer</span><span class="pl-kos">,</span> <span class="pl-s1">drawer</span><span class="pl-kos">.</span><span class="pl-en">props</span><span class="pl-kos">(</span><span class="pl-kos">)</span><span class="pl-kos">,</span>\n        <span class="pl-en">ce</span><span class="pl-kos">(</span><span class="pl-smi">TopBar</span><span class="pl-kos">,</span> <span class="pl-s1">topbar</span><span class="pl-kos">)</span><span class="pl-kos">,</span>\n        <span class="pl-en">ce</span><span class="pl-kos">(</span><span class="pl-smi">ScrollView</span><span class="pl-kos">,</span> <span class="pl-kos">{</span>\n          <span class="pl-c1">style</span>: <span class="pl-kos">{</span><span class="pl-kos">}</span><span class="pl-kos">,</span>\n          <span class="pl-c1">contentContainerStyle</span>: <span class="pl-kos">{</span> <span class="pl-c1">minHeight</span>: <span class="pl-c1">200</span> <span class="pl-kos">}</span>\n        <span class="pl-kos">}</span> <span class="pl-k">as</span> <span class="pl-smi">ScrollViewProps</span><span class="pl-kos">,</span>\n          <span class="pl-s1">screens</span><span class="pl-kos">[</span><span class="pl-s1">index</span><span class="pl-kos">]</span><span class="pl-kos">.</span><span class="pl-c1">sections</span><span class="pl-kos">.</span><span class="pl-en">map</span><span class="pl-kos">(</span><span class="pl-kos">(</span><span class="pl-kos">{</span> items<span class="pl-kos">,</span> title<span class="pl-kos">,</span> showTitle<span class="pl-kos">,</span> layout<span class="pl-kos">,</span> id<span class="pl-kos">,</span> aspectRatio <span class="pl-kos">}</span><span class="pl-kos">)</span> <span class="pl-c1">=&gt;</span>\n            <span class="pl-en">ce</span><span class="pl-kos">(</span><span class="pl-smi">SectionScroller</span><span class="pl-kos">,</span> <span class="pl-kos">{</span>\n              <span class="pl-c1">key</span>: <span class="pl-s1">id</span><span class="pl-kos">,</span> id<span class="pl-kos">,</span> title<span class="pl-kos">,</span> items<span class="pl-kos">,</span> layout<span class="pl-kos">,</span> aspectRatio<span class="pl-kos">,</span>\n              <span class="pl-c1">refreshing</span>: <span class="pl-c1">false</span><span class="pl-kos">,</span> showTitle<span class="pl-kos">,</span> onSelect\n            <span class="pl-kos">}</span><span class="pl-kos">)</span>\n          <span class="pl-kos">)</span>\n        <span class="pl-kos">)</span>\n      <span class="pl-kos">)</span>\n    <span class="pl-kos">)</span>\n  <span class="pl-kos">]</span><span class="pl-kos">)</span></pre></div>\n<p>createContextChain just uses a recursive function to set the Providers in the first array and then sets the second array as the children of the last one.</p>',
                                },
                            },
                            {
                                node: {
                                    author: {
                                        login: 'bvaughn',
                                    },
                                    createdAt: '2020-01-15T23:54:17Z',
                                    databaseId: 574912694,
                                    bodyHTML:
                                        '<p>This looks related to the following other issues:</p>\n<ul>\n<li><a class="issue-link js-issue-link" data-error-text="Failed to load title" data-id="410083829" data-permission-text="Title is private" data-url="https://github.com/facebook/react/issues/14843" data-hovercard-type="issue" data-hovercard-url="/facebook/react/issues/14843/hovercard" href="https://github.com/facebook/react/issues/14843">#14843</a> - no repro case; cause unclear.</li>\n<li><a class="issue-link js-issue-link" data-error-text="Failed to load title" data-id="261028024" data-permission-text="Title is private" data-url="https://github.com/facebook/react/issues/10879" data-hovercard-type="issue" data-hovercard-url="/facebook/react/issues/10879/hovercard" href="https://github.com/facebook/react/issues/10879">#10879</a> - caused by HTML pretty formatting and differing whitespace.</li>\n</ul>\n<p>As Dan said, I don\'t think we have the bandwidth to look into this at the moment without at least a repro case. (Then it would be a matter of prioritizing.)</p>',
                                },
                            },
                            {
                                node: {
                                    author: {
                                        login: 'Arlen22',
                                    },
                                    createdAt: '2020-01-16T15:45:25Z',
                                    databaseId: 575212411,
                                    bodyHTML:
                                        "<blockquote>\n<p>As Dan said, I don't think we have the bandwidth to look into this at the moment without at least a repro case. (Then it would be a matter of prioritizing.)</p>\n</blockquote>\n<p>I don't even know where the documentation is and this time I am refusing to read the source code to figure out the problem (because I don't have time). The code is so well written that it should have a documentation page with the known reasons this can happen. Am I missing something?</p>",
                                },
                            },
                            {
                                node: {
                                    author: {
                                        login: 'bvaughn',
                                    },
                                    createdAt: '2020-01-16T16:49:20Z',
                                    databaseId: 575242340,
                                    bodyHTML:
                                        '<p><a class="user-mention" data-hovercard-type="user" data-hovercard-url="/users/Arlen22/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="https://github.com/Arlen22">@Arlen22</a> No one has asked you to read source code or diagnose the cause of this issue. We have asked for you to share some code that reproduces the problem with us, so that one of us can take a look. Without being able to reproduce the problem, we can\'t really help.</p>\n<p>I\'m going to flag this issue as needing more info (a repro case). If you find time to create one for us, great! If not, the issue will be closed after a few days since it\'s not actionable.</p>',
                                },
                            },
                            {
                                node: {
                                    author: {
                                        login: 'Arlen22',
                                    },
                                    createdAt: '2020-01-16T16:59:22Z',
                                    databaseId: 575246795,
                                    bodyHTML:
                                        '<blockquote>\n<p><a class="user-mention" data-hovercard-type="user" data-hovercard-url="/users/Arlen22/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="https://github.com/Arlen22">@Arlen22</a> No one has asked you to read source code or diagnose the cause of this issue. We have asked for you to share some code that reproduces the problem with us, so that one of us can take a look. Without being able to reproduce the problem, we can\'t really help.</p>\n</blockquote>\n<p>I\'m sorry. I didn\'t mean to be rude. I don\'t know how to reproduce it because I don\'t know what is causing the problem and I can\'t find any documentation on hydration errors.</p>',
                                },
                            },
                            {
                                node: {
                                    author: {
                                        login: 'bvaughn',
                                    },
                                    createdAt: '2020-01-16T17:08:29Z',
                                    databaseId: 575250701,
                                    bodyHTML:
                                        '<p>It\'s okay. <g-emoji class="g-emoji" alias="smile" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f604.png">😄</g-emoji></p>\n<p>The fact that the code is well written doesn\'t actually mean that we understand all potential sources of errors. (We definitely don\'t!) So we rely on folks to help us by letting us know <em>how</em> they\'re running into errors. In many cases, while putting together a repro, someone might realize that the cause of a bug is in application code, or another library (not React). So repros are a really important part of keeping React maintainable! <g-emoji class="g-emoji" alias="smile" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f604.png">😄</g-emoji></p>\n<p>There isn\'t a lot of documentation (at the moment) for hydration. The main entry is <a href="https://reactjs.org/docs/react-dom.html#hydrate" rel="nofollow">here</a> which mentions:</p>\n<blockquote>\n<p>React expects that the rendered content is identical between the server and the client.</p>\n</blockquote>\n<p>The error  you\'re reporting seems to suggest that there is a mismatch between the exact server-rendered content and what the client expected to be rendered during hydration. We <em>warn</em> about this case in DEV mode for performance reasons:</p>\n<blockquote>\n<p>React warns about mismatches during hydration. There are no guarantees that attribute differences will be patched up in case of mismatches. This is important for performance reasons because in most apps, mismatches are rare, and so validating all markup would be prohibitively expensive.</p>\n</blockquote>\n<p>As for how to reproduce this issue, that might be trickier. When I\'m trying to create a repro from a large project, I usually start by ripping out big chunks of the code and seeing if the issue still reproduces. If it does, I know the thing I removed wasn\'t an essential part of the bug. If it doesn\'t, I re-add it and try ripping out a smaller piece (or something else). This can be tricky with issues that don\'t reproduce reliably <g-emoji class="g-emoji" alias="frowning_face" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/2639.png">☹️</g-emoji> I\'m sympathetic there.</p>',
                                },
                            },
                            {
                                node: {
                                    author: {
                                        login: 'Arlen22',
                                    },
                                    createdAt: '2020-01-17T01:44:07Z',
                                    databaseId: 575427276,
                                    bodyHTML:
                                        "<p>There were some data downloads during page loads that could have been causing issues if they resolved quicker on the server than the client or something like that. Is there a way to reliably wait to start processing hydration and SSR until certain data is available? On the server it would help to have it available and on the client nothing needs to hydrate until that data becomes available anyway. The first render basically requires it, but it's not a getInitialProps situation where it might change based on the URL. It's always the same but it's always async.</p>",
                                },
                            },
                            {
                                node: {
                                    author: {
                                        login: 'bvaughn',
                                    },
                                    createdAt: '2020-01-17T16:35:17Z',
                                    databaseId: 575699954,
                                    bodyHTML:
                                        '<p>Sounds like a use case that the API we call "Suspense" could help with once it\'s finished.</p>\n<p>It\'s a little hard to answer a generic question like this, but it seems to me like you Would want to just wait to call <code>hydrate</code> until the data has loaded?</p>',
                                },
                            },
                            {
                                node: {
                                    author: {
                                        login: 'Arlen22',
                                    },
                                    createdAt: '2020-01-17T20:47:12Z',
                                    databaseId: 575789104,
                                    bodyHTML:
                                        "<blockquote>\n<p>It's a little hard to answer a generic question like this, but it seems to me like you Would want to just wait to call hydrate until the data has loaded?</p>\n</blockquote>\n<p>I'm using Next.js, but if it's that simple I'm sure there's a way. I'll ask that separately.</p>",
                                },
                            },
                            {
                                node: {
                                    author: {
                                        login: 'bvaughn',
                                    },
                                    createdAt: '2020-01-22T16:49:14Z',
                                    databaseId: 577278860,
                                    bodyHTML:
                                        "<p>Just following up on this issue. Were you able to find out anything from Next.js? I'm wondering if we should close this issue (since it's not really actionable) and just continue to chat here if there are follow up questions.</p>",
                                },
                            },
                            {
                                node: {
                                    author: {
                                        login: 'stale',
                                    },
                                    createdAt: '2020-04-21T17:28:05Z',
                                    databaseId: 617303457,
                                    bodyHTML:
                                        '<p>This issue has been automatically marked as stale. <strong>If this issue is still affecting you, please leave any comment</strong> (for example, "bump"), and we\'ll keep it open. We are sorry that we haven\'t been able to prioritize it yet. If you have any new additional information, please include it with your comment!</p>',
                                },
                            },
                            {
                                node: {
                                    author: {
                                        login: 'Arlen22',
                                    },
                                    createdAt: '2020-04-22T13:42:10Z',
                                    databaseId: 617786763,
                                    bodyHTML:
                                        "<p>I'm not sure if stale bot will lock this thread. But I wanted to say that what I ended up doing was just not loading the data on the server side, which I detected using <code>typeof window</code>. So in the end I just didn't use this feature, but it seems really strange that it's like this. After some more research, I do think Suspense might answer this question, especially if ReactDOM Server waits for these suspenses to resolve before declaring the page rendered and the client-side hydrate detects that these suspenses are already resolved. Is this how it works in practice?</p>",
                                },
                            },
                        ],
                    },
                },
            },
        },
    },
}
