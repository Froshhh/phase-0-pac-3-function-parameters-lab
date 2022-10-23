function introduction(Samip) {
    return `Hi, my name is ${Samip}.`;
}

function introductionWithLanguage(Samip, React) {
    return `Hi, my name is ${Samip} and I am learning to program in ${React}.`;
}

function introductionWithLanguageOptional(Samip, language = "JavaScript") {
    return `Hi, my name is ${Samip} and I am learning to program in ${language}.`;
}
