#  Test case for node library mixins fake with the solution (solution is in branch repaired)

## Test case description


**library-mixin-fake** (use underscorek@1.0.0)
├─┬ **library-abc** (use extended underscorek@1.0.0 by underscorek-extend@3.0.0)
│ └── underscorek-extend@3.0.0 (return extended underscorek@1.0.0)
├─┬ **library-xyz** (use extended underscorek@1.0.0 by underscorek-extend@2.0.0)
│ └── underscorek-extend@2.0.0
├── **library-zzz** (use underscorek@1.0.0)
├── underscorek@1.0.0


We expect to have in each scope proper version of underscorek lib.
Because of node cache for require modules and trivial implementation (in master branch) we failed.
The proper working solution is in repaired branch.

For test this in your environment do this:
```
git clone https://github.com/marlic7/library-mixin-fake.git
cd library-mixin-fake/

# to see fake results
node index.js

# to see good results
git checkout repaired
node index.js

# to see difference in implementation
git diff master repaired
```

