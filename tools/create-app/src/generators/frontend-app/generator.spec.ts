import { createTreeWithEmptyWorkspace } from '@nx/devkit/testing';
import { Tree, readProjectConfiguration } from '@nx/devkit';

import { frontendAppGenerator } from './generator';
import { FrontendAppGeneratorSchema } from './schema';

describe('frontend-app generator', () => {
  let tree: Tree;
  const options: FrontendAppGeneratorSchema = { name: 'test' };

  beforeEach(() => {
    tree = createTreeWithEmptyWorkspace();
  });

  it('should run successfully', async () => {
    await frontendAppGenerator(tree, options);
    const config = readProjectConfiguration(tree, 'test');
    expect(config).toBeDefined();
  });
});
