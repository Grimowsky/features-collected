import { execSync } from 'child_process';
import {
  addProjectConfiguration,
  formatFiles,
  installPackagesTask,
  Tree
} from '@nx/devkit';
import { BackendGeneratorSchema} from './schema';


const PROJECT_TEMPLATE = 'https://github.com/Grimowsky/nestJS-api-nx-template.git'

export async function frontendGenerator(
  tree: Tree,
  options: BackendGeneratorSchema
) {
  const projectRoot = `apps/${options.name}`;

  execSync(`git clone ${PROJECT_TEMPLATE} ${projectRoot}`, { stdio: 'inherit'});

  addProjectConfiguration(tree, options.name, {
    root: projectRoot,
    projectType: 'application',
    sourceRoot: `${projectRoot}/src`,
    targets: {},
  });


  const gitFolderPath = `${projectRoot}/.git`;
  const githubFolderPath = `${projectRoot}/.github`;


  await formatFiles(tree);

  tree.delete(githubFolderPath)
  tree.delete(gitFolderPath)

  return async () => {
    installPackagesTask(tree);
  };
}

export default frontendGenerator;
