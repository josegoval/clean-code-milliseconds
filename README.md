# Typescript NPM Package Template

Create and publish TS/JS NPM packages seamlessly.

**Interested in supporting this free template?**

<a href="https://www.buymeacoffee.com/josegoval" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style="height: 60px !important;width: 217px !important;" ></a>

## Steps

1. Clone, download or fork this project.
2. Replace in the [package.json](package.json) the next values with your own ones:
    - name
    - description
    - keywords
    - repository
    - author
3. Add `Read and write permissions` and `Allow GitHub Actions to create and approve pull requests` in `https://github.com/<username>/<project-name>/settings/actions`
4. Create a NPM secret and add it to the project secrets:
    - Generate Token in `https://www.npmjs.com/settings/<your-profile>/tokens`
    - Create a `New repository secret` named `NPM_TOKEN` and copy its value (`https://github.com/<username>/<project-name>/settings/secrets/actions`)
5. (Optional) Add codecov flow:
    - Go to [codecov](https://about.codecov.io/), login, find your project and add the given `CODECOV_TOKEN` to your project secrets (`https://github.com/<username>/<project-name>/settings/secrets/actions`).

## How to skip the `npm publish` step

As you can check in [.releaserc](.releaserc) and [release.yml workflow](.github/workflows/release.yml), and read in depth in the [semantic-release documentation](https://semantic-release.gitbook.io/semantic-release/usage/configuration), the project is configured to trigger a new versioned commit and publish to NPM under `master`, `next`, `next-major`, `beta` and `alpha`.

To skip a CI include `[skip ci]` in the commit title or cancel the Github action.

## How to trigger new versions

This follows the conventional commits, so to trigger:
- patch: Add a `fix` commit to a relevant branch .
- minor: Add a `feat` commit to a relevant branch .
- major: Add a `BREAKING CHANGE: description` footer commit to a relevant branch like:

```
feat: New core processing

BREAKING CHANGE: core functions are broken and not backward compatible.
```

**IMPORTANT**: Commits with `!` will not trigger a new version nor will be recorded in the changelog (example: `feat!: breaking stuffs`).
