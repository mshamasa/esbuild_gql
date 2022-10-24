// require('esbuild').buildSync({
//     entryPoints: ['src/server.ts'],
//     bundle: true,
//     platform: 'node',
//     target: ['node16'],
//     external: ['./node_modules/*', '@graphql-tools/merge'],
//     outfile: 'build/index.js',
//   });

(async () => {
    let esbuild = require('esbuild')

  let result = await esbuild.build({
    entryPoints: ['src/server.ts'],
    bundle: true,
    metafile: true,
    platform: 'node',
    target: ['node16'],
    external: ['./node_modules/*', '@graphql-tools/merge'],
    outfile: 'build/index.js',
  })

  let text = await esbuild.analyzeMetafile(result.metafile, {
    verbose: true,
  })
  console.log(text)
})();