const shell = require("shelljs");

shell.find("-R", "src/modules/**/*.graphql").map(file => {
    const parsedFile = file.split("/");

    return shell.cp(
        "-R",
        file,
        `lib/modules/${parsedFile[2]}/${parsedFile[3]}`,
    );
});
