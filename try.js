console.log('Hello world!');
const gitWorkFlow = process.argv[2];    //название рабочей области, к примеру nodejs
const gitRunId = process.argv[3];    //айди запущенного ранера в git actions, к примеру 60895784
const gitRunNumber = process.argv[4];    //Сколько раз запускался ранер, к примеру 1
const gitAction = process.argv[5];    //Уникальный идентификатор action github
const gitActor = process.argv[6];    //ник того, кто запустил action, к примеру Antamansid
const gitRepository = process.argv[7];    //репозиторий того, кто запустил action, к примеру Antamansid/brusco
const gitEventName = process.argv[8];    //событие, которое было запущено, к примеру pull_request
const gitEventPath = process.argv[9];    //путь к событию, которое было запущено
const gitWorkspace = process.argv[10];   //workspace action-а github
const gitSha = process.argv[11];   //sha-код комита или пулреквеста или т.д.
const gitRef = process.argv[12];   //путь к пулреквесту или комиту или т.д., к примеру refs/pull/1/merge
const gitHeadRef = process.argv[13];   //название ветки при пулреквесте, к примеру scarlet3
const gitHeadBase = process.argv[14];   //название ветки куда все мержится при пулреквесте, к примеру master

console.log('gitWorkFlow');
console.log(gitWorkFlow);
console.log('gitRunId');
console.log(gitRunId);
console.log('gitRunNumber');
console.log(gitRunNumber);
console.log('gitAction');
console.log(gitAction);
console.log('gitActor');
console.log(gitActor);
console.log('gitRepository');
console.log(gitRepository);
console.log('gitEventName');
console.log(gitEventName);
console.log('gitEventPath');
console.log(gitEventPath);
console.log('gitWorkspace');
console.log(gitWorkspace);
console.log('gitSha');
console.log(gitSha);
console.log('gitRef');
console.log(gitRef);
console.log('gitHeadRef');
console.log(gitHeadRef);
console.log('gitHeadBase');
console.log(gitHeadBase);
