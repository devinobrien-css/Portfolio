# Portfolio

Hi there! Welcome to my portfolio website.

Feel free to plug and play this website with your own metadata! Most sections can be personalized by adjusting the JSON files in `src/data/`

## Prerequisites and Dependencies

- [Node](https://nodejs.org/en/download)
- [Vite](https://vitejs.dev/)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)

## Getting Started

To run the web application locally, follow these simple steps:

1. **Clone the repository:** Start by cloning this repository to your local machine using the following command:

```bash
git clone https://github.com/devinobrien/portfolio.git
```

2. **Install dependencies:** Navigate to the project directory and install the required dependencies using npm:

```bash
cd portfolio
npm i
```

3. **Install GitHooks:** An abstraction of this has been provided for convenience:

```bash
npm run prepare
```

4. **Run the application:** Once the dependencies are installed, start the development server with:

```bash
npm start
```

The application will now be accessible at `http://localhost:5173`.

## Helpful Tips

### Precommit Checks

```bash
    npx husky init
```

Move the file `husky-sample/pre-commit` inside of the `.husky` directory.

By moving the pre-commit file inside the .husky directory, we have now configured your pre-commit hooks. This will prevent unlinted/untested code from being commited

### Auto Formatting Code

This application uses `prettier` and `eslint` to maintain the formatting and syntax of the codebase. In order to utilize these features without console commands, install `eslint`, `prettier`, and `eslint prettier` extensions on VSCode.

Alternatively, run:

```bash
npm run lint && npm run prettier
```

### Auditing Packages

This application uses `depcheck` to audit unused packages:

```bash
npx depcheck
```

The configuration for this audit is managed through the `.depcheckrc` file in the root of the application.

### Auditing Components

This application uses `ts-prune` to locate and remove unused components within the application.

```bash
npm run prune
```

The configuration for this file is managed through `.unimportedrc.json`

## License

This app is open-source and available under the [MIT License](LICENSE).

## Contact

For any inquiries or feedback regarding the application, please reach out to us at my [email](mailto:devinobrien@icloud.com). Thank you for your interest in my Portfolio.
