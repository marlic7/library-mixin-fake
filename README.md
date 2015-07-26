#  Test case for node library mixins fake with the solution (solution is in branch repaired)

## Test case description

<pre>
    <b>library-mixin-fake</b> (use underscorek@1.0.0)
    ├─┬ <b>library-abc</b> (use extended underscorek@1.0.0 by underscorek-extend@3.0.0)
    │ └── underscorek-extend@3.0.0 (return extended underscorek@1.0.0)
    ├─┬ <b>library-xyz</b> (use extended underscorek@1.0.0 by underscorek-extend@2.0.0)
    │ └── underscorek-extend@2.0.0
    ├── <b>library-zzz</b> (use underscorek@1.0.0)
    ├── <b>underscorek@1.0.0</b>
</pre>

We expect to have in each scope proper version of underscorek lib. <br>
Because of node cache for require modules and trivial implementation (in master branch) we failed. <br>
The proper working solution is in repaired branch.

For test it in your environment do this:

```
# clone my repo
git clone https://github.com/marlic7/library-mixin-fake.git
cd library-mixin-fake/

# to see fake results
node index.js

# to see repaired results
git checkout repaired
node index.js

# to see difference in implementation
git diff master repaired
```

