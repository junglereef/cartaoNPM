import boxen from 'boxen';
import chalk from 'chalk';
import inquirer from 'inquirer';
import clear from 'clear';
import open from 'open';

clear();

const prompt = inquirer.createPromptModule();

// Perguntas
const questions = [
    {
        type: "listar",
        name: "ação",
        message: "O que você quer fazer?",
        choices: [
            {
                name: `Entrar em contato por ${chalk.green.bold("email")}?`,
                value: () => {
                    open("mailto:risinganalog@gmail.com");
                    console.log("\nFeito, até breve.\n");
                }
            },
            {
                name: "Encerrar.",
                value: () => {
                    console.log("Até a proxima!\n");
                }
            }
        ]
    }
];

// Informações
const data = {
    name: chalk.bold.green("        Átila Iglesias"),
    work: `${chalk.white("Desenvolvedor ")} ${chalk
        .hex("#2b82b2")
        .bold("Front-End")}`,
    blog: chalk.gray("https://") + chalk.whiteBright("iglesias.group/"),
    twitter: chalk.gray("https://twitter.com/") + chalk.cyan("AtilaIglesias"),
    github: chalk.gray("https://github.com/") + chalk.green("junglereef"),
    linkedin: chalk.gray("https://linkedin.com/in/") + chalk.blue("atila-iglesias"),
    web: chalk.cyan("https://atila.gq/"),
    npx: chalk.red("npx") + " " + chalk.white("junglereef"),

    labelWork: chalk.white.bold("      Trabalho:"),
    labelBlog: chalk.white.bold("      Projetos:"),
    labelTwitter: chalk.white.bold("    Twitter:"),
    labelGitHub: chalk.white.bold("     GitHub:"),
    labelLinkedIn: chalk.white.bold("   LinkedIn:"),
    labelWeb: chalk.white.bold("        Web:"),
    labelCard: chalk.white.bold("       Cartão:")
};

// Dados
const me = boxen(
    [
        `${data.name}`,
        ``,
        `${data.labelWork}  ${data.work}`,
        `${data.labelBlog}  ${data.blog}`,
        `${data.labelTwitter}  ${data.twitter}`,
        `${data.labelGitHub}  ${data.github}`,
        `${data.labelLinkedIn}  ${data.linkedin}`,
        `${data.labelWeb}  ${data.web}`,
        ``,
        `${data.labelCard}  ${data.npx}`,
        ``,
        `${chalk.italic(
            "Sou curioso e perseverante, em busca de inspiração "
        )}`,
        `${chalk.italic("Gosto de aprender e testar novos códigos")}`,
        `${chalk.italic("O desafio e ficar parado, a vida é movimento.")}`
    ].join("\n"),
    {
        margin: 1,
        float: 'center',
        padding: 1,
        borderStyle: "single",
        borderColor: "green"
    }
);

// Criar Carta
console.log(me);

// Dica
const tip = [
    `Dica: Clique ${chalk.cyanBright.bold(
        "cmd/ctrl + click"
    )} para acessar os links acima`,
    '',
].join("\n");

// Show the tip 
console.log(tip);

