import * as path from 'path';
import { runTests } from 'vscode-test';

async function main() {
  try {
    const extensionDevelopmentPath = path.resolve(__dirname, '../../');

    const extensionTestsPath = path.resolve(__dirname, './index');

    const testWorkspacePath = path.resolve(__dirname, "../../templates");

    // Download VS Code, unzip it and run the integration test
    await runTests({
      extensionDevelopmentPath,
      extensionTestsPath,
      launchArgs: [testWorkspacePath]
    });
  } catch (err) {
    console.error('Failed to run tests');
    process.exit(1);
  }
}

main();