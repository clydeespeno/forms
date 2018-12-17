import path from 'path'

const appDirectory = process.cwd()
const src = path.resolve(appDirectory, 'src')
const srcOf = (relative) => path.resolve(src, relative)

export default {
  components: srcOf('components'),
  modules: srcOf('modules'),
  root: src,
  styles: srcOf('components/styles')
}
