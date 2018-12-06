# todolist

This project aims at demonstrating how to modify an existing Vue.js project to use TypeScript. You can comprehend the steps by looking at the commit diffs.

## Prequisites

To reproduce the following steps, you need to have the Vue-CLI and TypeScript installed.

```
npm install --global @vue/cli typescript
```

You should also install [Vetur](https://github.com/vuejs/vetur) in VS Code.

## Create Vue.js project
(Commits 59ed74a78748c7edb75412fe0bb27aa20d3141f0 and 88db3cab2f2f0c02d2a7d66dd4d62e6ffd2165e3)

This step only serves to create a Vue.js project without TypeScript only to be able to introduce TS later. Of course, you don't need to repeat this step if you have an existing Vue.js codebase you want to use TypeScript with. I will nevertheless explain how I created the initial project without TS:
* Create project with `vue create todolist` using the default presets
* Install dependencies: `npm install --save bootstrap bootstrap-vue` and import them in `main.js`
* Edit `App.vue` and create `CreateTodoInput.vue` and `ToDoItem.vue` for simple Todo app

Normally, if you create a new project where you intend to use TypeScript, you would integrate TypeScript from the start:
* Create project with `vue create todolist`
* Instead of using the default options, configure them manually, choosing the TypeScript option
* Et voilà

## Add basic TypeScript configuration
(Commit 379a346f452a77c58b00004e579120e9d16575db)

To configure TypeScript, we need to
* Install the necessary dependencies – the easiest way is by using the Vue CLI: `vue add @vue/typescript`. This does the following
  * It creates the `tsconfig.json` TypeScript config file
  * It installs the dev-dependencies `@vue/cli-plugin-typescript`, `@vue/eslint-config-typescript` and `typescript` itself
  * It updates the ESLint config
  * It renames `main.js` to `main.ts`
  * It generates `shims-tsx.d.ts` and `shims-vue.d.ts`, which are necessary so that TypeScript can load Vue files correctly
  * It generates `src/components/HelloWorld.vue` and overwrites `src/App.vue`. We didn't want that...
* Fix unnecessary changes made by `vue add @vue/typescript`
  * Remove the HelloWorld component: `rm src/components/HelloWorld.vue`
  * Reset `App.vue` to its original state: `git checkout -- src/App.vue`
* Fix imports
  * When importing `.vue` files, we need to specify the complete file name (e.g. `import App from './App.vue'` instead of `import App from './App'`)
* Use TypeScript in the component files
  * Replace the opening `<script>` tag by `<script lang="ts">`
  * Change `export default { ... }` to `export default Vue.extend({ ... });` so that TypeScript infers our component correctly (if not done already, you need to `import Vue from 'vue'` to acheive this)

Alternative approach without the Vue CLI:
* Initialize TypeScript with `tsc --init`. This generates the `tsconfig.json` file
* Install TypeScript and the necessary plugins for Vue and ESLint as dev-dependencies: `npm install --save-dev typescript @vue/cli-plugin-typescript @vue/eslint-config-typescript`
* Configure ESLint correctly
* Rename all `file.js` files to `file.ts` (In my case, that's only `main.js`)
* Change the `<script>` tags in all file.vue files to `<script lang="ts">`
* Add the necessary shimming files manually
* Use TypeScript in the component files (see above)

Now we have TypeSript configured. Maybe the TypeScript compiler has already marked some errors for you. In my case, I needed to declare the type of the `event` argument in the `addTodo` function.

## Resources

I used the following guides and tutorials for this demo

* https://alexjover.com/blog/integrate-typescript-in-your-vue-project/
* https://vuejs.org/v2/guide/typescript.html