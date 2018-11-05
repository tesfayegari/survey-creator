import { editorLocalization, defaultStrings } from "../editorLocalization";

export var danishStrings = {
  //survey templates
  survey: {
    edit: "Rediger",
    dropQuestion: "Træk et spørgsmål hertil fra paletten til venstre.",
    copy: "Kopier",
    addToToolbox: "Tilføj til paletten",
    deletePanel: "Slet panel",
    deleteQuestion: "Slet spørgsmål",
    convertTo: "Konverter til",
    drag: "Træk element"
  },
  //questionTypes
  qt: {
    default: "Standard",
    checkbox: "Afkrydsningsfelt",
    comment: "Kommentar",
    imagepicker: "Billedvælger",
    dropdown: "Dropdown",
    file: "Fil",
    html: "Html",
    matrix: "Matrice (ét valg)",
    matrixdropdown: "Matrice (flere valg)",
    matrixdynamic: "Matrice (dynamiske rækker)",
    multipletext: "Flere tekstfelter",
    panel: "Panel",
    paneldynamic: "Panel (dynamiske paneler)",
    radiogroup: "Alternativknap",
    rating: "Vurdering",
    text: "Tekstfelt",
    boolean: "Sandt/falsk",
    expression: "Udtryk"
  },
  //Strings in Editor
  ed: {
    defaultLocale: "Standard ({0})",
    survey: "Undersøgelse",
    settings: "Indstillinger for undersøgelse",
    editSurvey: "Rediger undersøgelse",
    addNewPage: "Tilføj ny side",
    moveRight: "Gå til højre",
    moveLeft: "Gå til venstre",
    deletePage: "Slet side",
    editPage: "Rediger side",
    edit: "Rediger",
    newPageName: "side",
    newQuestionName: "spørgsmål",
    newPanelName: "panel",
    testSurvey: "Afprøv undersøgelse",
    testSurveyAgain: "Afprøv undersøgelse igen",
    testSurveyWidth: "Bredde af undersøgelse: ",
    embedSurvey: "Indlejr undersøgelse",
    translation: "Oversættelse",
    saveSurvey: "Gem undersøgelse",
    designer: "Undersøgelsesdesigner",
    jsonEditor: "JSON Editor",
    undo: "Fortryd",
    redo: "Annuller fortryd",
    options: "Indstillinger",
    generateValidJSON: "Generer gylding JSON",
    generateReadableJSON: "Generer læsbar JSON",
    toolbox: "Værktøjskasse",
    toolboxGeneralCategory: "Generelt",
    delSelObject: "Slet valgt objekt",
    editSelObject: "Rediger valgt objekt",
    correctJSON: "Ret venligst JSON.",
    surveyResults: "Undersøgelsesresultat: ",
    modified: "Ændret",
    saving: "Gemmer",
    saved: "Gemt",
    saveError: "Fejl! Undersøgelsen er ikke blevet gemt.",
    translationAddLanguage: "Vælg et sprog at oversætte",
    translationShowAllStrings: "Vis alle tekststrenge",
    translationShowAllPages: "Vis alle sider",
    translationNoStrings: "Ingen tekststrenge at oversætte. Ret filteret.",
    translationExportToSCVButton: "Eksporter til CSV",
    translationImportFromSCVButton: "Importer fra CSV",
    translationMergeLocaleWithDefault: "Flet {0} med standardsprog"
  },
  //Property names in table headers
  pel: {
    isRequired: "Påkrævet?"
  },
  //Property Editors
  pe: {
    apply: "Anvend",
    ok: "OK",
    cancel: "Annuller",
    reset: "Nulstil",
    close: "Luk",
    delete: "Slet",
    addNew: "Tilføj ny",
    addItem: "Klik for at tilføje...",
    removeAll: "Fjern alle",
    edit: "Rediger",
    itemValueEdit: "Synlig hvis",
    editChoices: "Rediger valgmuligheder",
    move: "Flyt",
    empty: "<tom>",
    notEmpty: "<redigér værdi>",
    fastEntry: "Fast Entry",
    formEntry: "Form Entry",
    testService: "Test the service",
    conditionSelectQuestion: "Vælg spørgsmål...",
    conditionValueQuestionTitle: "Indtast/vælg værdi",
    conditionButtonAdd: "Tilføj",
    conditionButtonReplace: "Erstat",
    conditionHelp:
      "Indtast et boolsk udtryk. Det skal returnere true for at holde spørgsmålet/siden synlig. For eksempel: {question1} = 'value1' or ({question2} * {question4}  > 20 and {question3} < 5)",
    expressionHelp:
      "Indtast et udtryk. Du kan bruge krølle-parenteser for at få adgang til svarene: '{question1} + {question2}', '({price}*{quantity}) * (100 - {discount})'",
    aceEditorHelp: "Tast ctrl+space for hjælp til at afslutte udtrykket",
    aceEditorRowTitle: "Aktuel række",
    aceEditorPanelTitle: "Aktuelt panel",
    showMore: "Se dokumentationen for flere informationer",
    conditionShowMoreUrl:
      "https://surveyjs.io/Documentation/LibraryParameter?id=Question&parameter=visibleIf",
    assistantTitle: "Tilgængelige spørgsmål:",
    cellsEmptyRowsColumns: "Der skal være mindst én kolonne eller række",

    propertyIsEmpty: "Indtast en værdi",
    value: "Værdi",
    text: "Tekst",
    rowid: "Række ID",
    imageLink: "Billedlink",
    columnEdit: "Rediger kolonne: {0}",
    itemEdit: "Redigér: {0}",

    url: "URL",
    path: "Sti",
    valueName: "Værdiens navn",
    titleName: "Titelnavn",

    hasOther: "Har andet element",
    otherText: "Andet element tekst",
    name: "Navn",
    title: "Titel",
    cellType: "Celletype",
    colCount: "Antal kolonner",
    choicesOrder: "Vælg rækkefølge på valg",
    visible: "Er synlig?",
    isRequired: "Er påkrævet?",
    startWithNewLine: "Skal starte med ny linie?",
    rows: "Antal rækker",
    placeHolder: "Hint-tekst",
    showPreview: "Vises forhåndsvisning af billeder?",
    storeDataAsText: "Gem filindhold i JSON-resultat som tekst",
    maxSize: "Maksimal filstørrelse i bytes",
    imageHeight: "Billedhøjde",
    imageWidth: "Billedbredde",
    rowCount: "Antal rækker",
    columnLayout: "Kolonnelayout",
    addRowLocation: "Tilføj række knapplacering",
    addRowText: "Tilføj række knaptekst",
    removeRowText: "Fjern række knaptekst",
    minRateDescription: "Beskriv laveste vurdering",
    maxRateDescription: "Beskriv højeste vurdering",
    inputType: "Inputtype",
    optionsCaption: "Muligheder tekst",
    defaultValue: "Standardværdi",
    cellsDefaultRow: "Standard celletekst",

    surveyEditorTitle: "Rediger undersøgelsesindstillinger",
    qEditorTitle: "Redigér: {0}",

    maxLength: "Maximal længde",

    //survey
    showTitle: "Vis/skjul titel",
    locale: "Standardsprog",
    mode: "Mode (rediger/skrivebeskyttet)",
    clearInvisibleValues: "Fjern usynlige værdier",
    cookieName: "Cookienavn (for at undgå at afvikle undersøgelsen to gange lokalt)",
    sendResultOnPageNext: "Send undersøgelsesresultatet ved næste side",
    storeOthersAsComment: "Gem 'others' værdien i et seperat felt",
    showPageTitles: "Vis sidetitler",
    showPageNumbers: "Vis sidenumre",
    pagePrevText: "Forrige side knaptekst",
    pageNextText: "Næste side knaptekst",
    completeText: "Færdig knaptekst",
    startSurveyText: "Start knaptekst",
    showNavigationButtons: "Vis navigationsknapper (standard navigation)",
    showPrevButton: "Vis forrige knap (brugeren må gå tilbage til forrige side)",
    firstPageIsStarted: "Den første side in undersøgelsen er starten på undersøgelsen.",
    showCompletedPage: "Vis afslutningssiden til slut (completedHtml)",
    goNextPageAutomatic:
      "Gå til næste side automatisk når alle spørgsmål er besvaret",
    showProgressBar: "Vis fremdriftslinje",
    questionTitleLocation: "Spørgsmålstitel placering",
    requiredText: "Påkrævet spørgsmålssymbol(er)",
    questionStartIndex: "Spørgsmål startindex (1, 2 eller 'A', 'a')",
    showQuestionNumbers: "Vis spørgsmålsnumre",
    questionTitleTemplate:
      "Spørgsmålstitel template, standard er: '{no}. {require} {title}'",
    questionErrorLocation: "Spørgsmålsfejl placering",
    focusFirstQuestionAutomatic: "Fokusér første spørgsmål ved sideskift",
    questionsOrder: "Rækkefølge af spørgsmål på siden",
    maxTimeToFinish: "Maximal tid til at gennemføre undersøgelsen",
    maxTimeToFinishPage: "Maximal tid til at gennemføre en side i undersøgelsen",
    showTimerPanel: "Vis tidspanel",
    showTimerPanelMode: "Vis tidspanel tilstand",
    renderMode: "Renderingstilstand",
    allowAddPanel: "Tillad at tilføje et panel",
    allowRemovePanel: "Tillad at fjerne et panel",
    panelAddText: "Tilføj panel tekst",
    panelRemoveText: "Fjern panel tekst",
    isSinglePage: "Vis alle elementer på én side",

    tabs: {
      general: "Generelt",
      fileOptions: "Indstillinger",
      html: "Html-editor",
      columns: "Kolonner",
      rows: "Rækker",
      choices: "Valgmuligheder",
      items: "Elementer",
      visibleIf: "Synlig hvis",
      enableIf: "Aktiv hvis",
      rateValues: "Bedøm-værdier",
      choicesByUrl: "Valgmuligheder fra Web",
      matrixChoices: "Standard valgmuligheder",
      multipleTextItems: "Tekst inputmuligheder",
      validators: "Valideringer",
      navigation: "Navigation",
      question: "Spørgsmål",
      completedHtml: "Færdig Html",
      loadingHtml: "Indlæser Html",
      timer: "Tid/Quiz",
      triggers: "Triggere",
      templateTitle: "Skabelon titel"
    },
    editProperty: "Rediger egenskab '{0}'",
    items: "[ Element: {0} ]",

    enterNewValue: "Indtast værdien.",
    noquestions: "Der er ingen spørgsmål i undersøgelsen.",
    createtrigger: "Opret en trigger",
    triggerOn: "På ",
    triggerMakePagesVisible: "Gør sider synlige:",
    triggerMakeQuestionsVisible: "Gør spørgsmål synlige:",
    triggerCompleteText: "Aflslut spørgeskema ved at fortsætte.",
    triggerNotSet: "Triggerer er ikke sat",
    triggerRunIf: "Afvikl hvis",
    triggerSetToName: "Ændr værdien af: ",
    triggerFromName: "Kopier værdi fra: ",
    triggerRunExpression: "Afvikl dette udtryk:",
    triggerSetValue: "til: ",
    triggerIsVariable: "Gem ikke variablen i undersøgelsesresultatet."
  },
  //Property values
  pv: {
    true: "true",
    false: "false",
    inherit: "inherit",
    show: "show",
    hide: "hide",
    default: "default",
    initial: "initial",
    random: "random",
    collapsed: "collapsed",
    expanded: "expanded",
    none: "none",
    asc: "ascending",
    desc: "descending",
    indeterminate: "indeterminate",
    decimal: "decimal",
    currency: "currency",
    percent: "percent",
    firstExpanded: "firstExpanded",
    off: "off",
    onPanel: "onPanel",
    onSurvey: "onSurvey",
    list: "list",
    progressTop: "progressTop",
    progressBottom: "progressBottom",
    progressTopBottom: "progressTopBottom",
    horizontal: "horizontal",
    vertical: "vertical",
    top: "top",
    bottom: "bottom",
    topBottom: "top and bottom",
    left: "left",
    color: "color",
    date: "date",
    datetime: "datetime",
    "datetime-local": "datetime-local",
    email: "email",
    month: "month",
    number: "number",
    password: "password",
    range: "range",
    tel: "tel",
    text: "text",
    time: "time",
    url: "url",
    week: "week",
    hidden: "hidden",
    on: "on",
    onPage: "onPage",
    edit: "edit",
    display: "display",
    onComplete: "onComplete",
    onHidden: "onHidden",
    all: "all",
    page: "page",
    survey: "survey",
    onNextPage: "onNextPage",
    onValueChanged: "onValueChanged"
  },
  //Operators
  op: {
    empty: "is empty",
    notempty: "is not empty",
    equal: "equals",
    notequal: "not equals",
    contains: "contains",
    notcontains: "not contains",
    greater: "greater",
    less: "less",
    greaterorequal: "greater or equals",
    lessorequal: "less or equals"
  },
  //Embed window
  ew: {
    angular: "Benyt Angular version",
    jquery: "Benyt jQuery version",
    knockout: "Benyt Knockout version",
    react: "Benyt React version",
    vue: "Benyt Vue version",
    bootstrap: "For bootstrap framework",
    standard: "Ingen bootstrap",
    showOnPage: "Vis undersøgelsen på en side",
    showInWindow: "Vis undersøgelsen i et vindue",
    loadFromServer: "Hent undersøgelsen som JSON fra serveren",
    titleScript: "Scripts og styles",
    titleHtml: "HTML",
    titleJavaScript: "JavaScript"
  },
  //Test Survey
  ts: {
    selectPage: "Vælg siden for at teste den:"
  },
  validators: {
    answercountvalidator: "answer count",
    emailvalidator: "e-mail",
    expressionvalidator: "expression",
    numericvalidator: "numeric",
    regexvalidator: "regex",
    textvalidator: "text"
  },
  triggers: {
    completetrigger: "undersøgelse gennemført",
    setvaluetrigger: "sæt værdi",
    copyvaluetrigger: "kopiér værdi",
    runexpressiontrigger: "afvikl udtry",
    visibletrigger: "skift synlighed"
  },
  //Properties
  p: {
    name: "navn",
    title: {
      name: "titel",
      title: "Lad den være tom hvis det er det samme som 'Navn'"
    },

    navigationButtonsVisibility: "navigationButtonsVisibility",
    questionsOrder: "questionsOrder",
    maxTimeToFinish: "maxTimeToFinish",

    visible: "visible",
    visibleIf: "visibleIf",
    questionTitleLocation: "questionTitleLocation",
    description: "description",
    state: "state",
    isRequired: "isRequired",
    indent: "indent",
    requiredErrorText: "requiredErrorText",
    startWithNewLine: "startWithNewLine",
    innerIndent: "innerIndent",
    page: "page",

    width: "width",

    commentText: "commentText",
    valueName: "valueName",
    enableIf: "enableIf",
    defaultValue: "defaultValue",
    correctAnswer: "correctAnswer",
    readOnly: "readOnly",
    validators: "validators",
    titleLocation: "titleLocation",

    hasComment: "hasComment",
    hasOther: "hasOther",
    choices: "choices",
    choicesOrder: "choicesOrder",
    choicesByUrl: "choicesByUrl",
    otherText: "otherText",
    otherErrorText: "otherErrorText",
    storeOthersAsComment: "storeOthersAsComment",

    label: "label",
    showTitle: "showTitle",
    valueTrue: "valueTrue",
    valueFalse: "valueFalse",

    cols: "cols",
    rows: "rows",
    placeHolder: "placeHolder",

    optionsCaption: "optionsCaption",

    expression: "expression",
    format: "format",
    displayStyle: "displayStyle",
    currency: "currency",
    useGrouping: "useGrouping",

    showPreview: "showPreview",
    allowMultiple: "allowMultiple",
    imageHeight: "imageHeight",
    imageWidth: "imageWidth",
    storeDataAsText: "storeDataAsText",
    maxSize: "maxSize",

    html: "html",

    columns: "columns",
    cells: "cells",
    isAllRowRequired: "isAllRowRequired",

    horizontalScroll: "horizontalScroll",
    cellType: "cellType",
    columnsLayout: "columnsLayout",
    columnColCount: "columnColCount",
    columnMinWidth: "columnMinWidth",

    rowCount: "rowCount",
    minRowCount: "minRowCount",
    maxRowCount: "maxRowCount",
    keyName: "keyName",
    keyDuplicationError: "keyDuplicationError",
    confirmDelete: "confirmDelete",
    confirmDeleteText: "confirmDeleteText",
    addRowLocation: "addRowLocation",
    addRowText: "addRowText",
    removeRowText: "removeRowText",

    items: "items",
    itemSize: "itemSize",
    colCount: "colCount",

    templateTitle: "templateTitle",
    templateDescription: "templateDescription",
    allowAddPanel: "allowAddPanel",
    allowRemovePanel: "allowRemovePanel",
    panelCount: "panelCount",
    minPanelCount: "minPanelCount",
    maxPanelCount: "maxPanelCount",
    panelsState: "panelsState",
    panelAddText: "panelAddText",
    panelRemoveText: "panelRemoveText",
    panelPrevText: "panelPrevText",
    panelNextText: "panelNextText",
    showQuestionNumbers: "showQuestionNumbers",
    showRangeInProgress: "showRangeInProgress",
    renderMode: "renderMode",
    templateTitleLocation: "templateTitleLocation",

    rateValues: "rateValues",
    rateMin: "rateMin",
    rateMax: "rateMax",
    rateStep: "rateStep",
    minRateDescription: "minRateDescription",
    maxRateDescription: "maxRateDescription",

    inputType: "inputType",
    size: "size",

    locale: "locale",
    focusFirstQuestionAutomatic: "focusFirstQuestionAutomatic",
    completedHtml: "completedHtml",
    completedBeforeHtml: "completedBeforeHtml",
    loadingHtml: "loadingHtml",
    triggers: "triggers",
    cookieName: "cookieName",
    sendResultOnPageNext: "sendResultOnPageNext",
    showNavigationButtons: "showNavigationButtons",
    showPrevButton: "showPrevButton",
    showPageTitles: "showPageTitles",
    showCompletedPage: "showCompletedPage",
    showPageNumbers: "showPageNumbers",
    questionErrorLocation: "questionErrorLocation",
    showProgressBar: "showProgressBar",
    mode: "mode",
    goNextPageAutomatic: "goNextPageAutomatic",
    checkErrorsMode: "checkErrorsMode",
    clearInvisibleValues: "clearInvisibleValues",
    startSurveyText: "startSurveyText",
    pagePrevText: "pagePrevText",
    pageNextText: "pageNextText",
    completeText: "completeText",
    requiredText: "requiredText",
    questionStartIndex: "questionStartIndex",
    questionTitleTemplate: "questionTitleTemplate",
    firstPageIsStarted: "firstPageIsStarted",
    isSinglePage: "isSinglePage",
    maxTimeToFinishPage: "maxTimeToFinishPage",
    showTimerPanel: "showTimerPanel",
    showTimerPanelMode: "showTimerPanelMode",

    defaultPanelValue: "defaultPanelValue",
    defaultRowValue: "defaultRowValue",
    hasNone: "hasNone",
    noneText: "noneText",

    text: "text",
    minValue: "minimum value",
    maxValue: "maximum value",
    minLength: "minumum length",
    maxLength: "maximum length",
    allowDigits: "allow digits",
    minCount: "minumum count",
    maxCount: "maximum count",
    regex: "regular expression"
  }
};

editorLocalization.locales["da"] = danishStrings;
