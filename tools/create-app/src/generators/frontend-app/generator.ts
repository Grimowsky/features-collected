import {
  addProjectConfiguration,
  formatFiles,
   installPackagesTask,
  Tree,
} from '@nx/devkit';
import { FrontendAppGeneratorSchema } from './schema';
import { promisify } from 'util';
import {rimraf} from 'rimraf';
import {execSync} from "child_process";
import {TEMPLATE_URL} from "./files/src/template.url";

const rimrafAsync = promisify(rimraf)

export async function frontendAppGenerator(
  tree: Tree,
  options: FrontendAppGeneratorSchema
) {
  const projectRoot = `apps/${options.name}`;

  execSync(`git clone ${TEMPLATE_URL} ${projectRoot}`, { stdio: 'inherit'});

  addProjectConfiguration(tree, options.name, {
    root: projectRoot,
    projectType: 'application',
    sourceRoot: `${projectRoot}/src`,
    targets: {},
  });


  const gitFolderPath = `${projectRoot}/.git`;
  const githubFolderPath = `${projectRoot}/.github`;


  await formatFiles(tree);

  return async () => {
    await rimrafAsync([gitFolderPath, githubFolderPath], {})

    installPackagesTask(tree);
  };

}

export default frontendAppGenerator;
