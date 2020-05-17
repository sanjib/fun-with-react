## Stand-alone React, Babel & your script import

<pre>
&lt;script src="https://unpkg.com/react@16/umd/react.development.js" crossorigin&gt;&lt;/script&gt;
&lt;script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js" crossorigin&gt;&lt;/script&gt;
&lt;script src="https://unpkg.com/babel-standalone@6/babel.min.js"&gt;&lt;/script&gt;
&lt;script src="script.js"&gt;&lt;/script&gt;
</pre>

## Install & run Babel CLI

<pre>
npm i babel-cli@6 babel-preset-react-app@3
npx babel -w src -d . --presets react-app/prod
</pre>

## Quotes

- The best way to pick a key is to use a __string__ that uniquely identifies a list item among its siblings. Most often you would use IDs from your data as keys.
<pre>
&lt;li key={number.toString()}&gt;
</pre>

- Keys only make sense in the context of the surrounding array.
- A good rule of thumb is that elements inside the map() call need keys.
Keys used within arrays should be unique among their siblings. However they don’t need to be globally unique.
<pre>
const sidebar = (
&lt;ul&gt;
  {props.posts.map((post) =&gt;
    &lt;li key={post.id}&gt;
      {post.title}
    &lt;/li&gt;
  )}
&lt;/ul&gt;
);
const content = props.posts.map((post) =&gt;
&lt;div key={post.id}&gt;
  &lt;h3&gt;{post.title}&lt;/h3&gt;
  &lt;p&gt;{post.content}&lt;/p&gt;
&lt;/div&gt;
);
</pre>
- Keys serve as a hint to React but they don’t get passed to your components.  
- Like in JavaScript, it is up to you to decide whether it is worth extracting a variable for readability. Keep in mind that if the map() body is too nested, it might be a good time to extract a component.

