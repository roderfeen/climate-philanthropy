flowchart TD
GrandMaMom("👵 Wàipó\n外婆\nMother's mother")

GrandPaMom("👴 Wàigōng\n外公\nMother's father")

GrandMaDad("👵 Nǎinai\n奶奶\nFather's mother")

GrandPaDad("👴 Yéye\n爷爷\nFather's father")

MomSideUncleWife("👩‍🦰 Jiùmā\n舅妈\nUncle's wife")

MomSideUncle("👨‍🦰 Jiùjiu\n舅舅\nUncle - Mother's\n(elder/younger)\nbrother")

MomSideAunt("👩 Yímā\n姨妈\nAunt - Mother's\n(elder/Younger) sister")

MomSideAuntHusband("👨‍🦱 Yífu\n姨父\nAunt's husband")

%% -- parents --

Mom("🙎🏻‍♀️ Māma\n妈妈\nMother")

Dad("👨‍🎨 Bàba\n爸爸\nFather")

DadSideUncleElderBroWife("👩🏻‍🦱 Bómǔ\n伯母\nUncle's wife\n(father's elder brother)")

DadSideUncleElderBro("🧔🏻‍♂️ Bóbo\n伯伯\nUncle\nFather's elder brother")

DadSideUncleYoungerWife("👩🏼‍🦳 Shěnshen\n婶婶\nUncle's wife\n(father's younger brother)")

DadSideUncleYoungerBro("👨‍🦰 Shūshu\n叔叔\nUncle\nFather's younger brother")

DadSideAuntSister("👩‍⚕️ Gūgu\n姑姑\nAnunt\nFather's (elder/younger) sister")

DadSideAuntHusband("👲 Gūfu\n姑父\nAunt's husband")

%% -- Children --

MomSideCousinYoungerSister("👧 Biǎomèi\n表妹\nCousin\n⬆️\nmom's younger sister")

MomSideCousinYoungerBro("👲 ⭐️Biǎodì\n表弟\nCousin\n⬆️\nmom's younger brother")

MomSideCousinElderSister("👧 Biǎojiě\n表姐\nCousin\n⬆️\nmom's elder sister")

MomSideCousinElderBro("👲 ⭐️Biǎogē\n表哥\nCousin\n⬆️\nmom's elder brother")

BrotherYounger("👲 Dìdi\n弟弟\nYounger brother")

SisterYounger("👧 Mèimei\n妹妹\nYounger sister")

Me("⭐️ Wǒ\n我\nMe")

SisterElder("👩‍⚕️ Jiějie\n姐姐\nElder sister")

BroElder("👨‍🚀 Gegē\n哥哥\nElder brother")

DadSideCousinYoungerSister("👧 Tangmèi\n堂妹\nCousin\n⬆️\ndad's younger sister")

DadSideCousinYoungerBro("👲 Tangdì\n堂弟\nCousin\n⬆️\ndad's younger brother")

DadSideCousinElderSister("👧 Tangjiě\n堂姐\nCousin\n⬆️\ndad's elder sister")

DadSideCousinElderBro("👲 Tanggē\n堂哥\nCousin\n⬆️\ndad's elder brother")

%% --- Children --
 
SonsWife("👧 Xífù\n媳妇\nSon's wife")

Son("👦🏻 érzi\n儿子\nSon")

Daughter("👧 nǚér\n女儿\nDaughter")

DaughterHusband("👲 Nǚxu\n女婿\nDaughter's husband")

%% -- Grandchildren --

GrandsonWife("👩🏻‍🦱 Sūnxífù\n孙媳妇\nGrandson's wife")

Grandson("👦🏻 Sūnzi\n孙子\nGrandson")

Granddaughter("👧 Sūnnu\n孙女\nGranddaughter")

GranddaughtersHusband("👲 Sūnnǚxu\n孙女婿\nGranddaughter's husband")

%% -- Relationships --

subgraph MomSideUnclesFamily["👨‍👩‍👦 Mom's uncle's family"]
    direction LR
    MomSideUncle
    MomSideUncleWife
end

subgraph DadSideUncleElderBrotherFamily["👨‍👩‍👦 Dad's elder brother's (uncle) family"]
    direction LR
    DadSideUncleElderBro
    DadSideUncleElderBroWife
end

subgraph MomSideAuntsFamily["👨‍👩‍👦 Mom's syster's (aunt) family"]
    direction LR
    MomSideAunt
    MomSideAuntHusband
end

subgraph MomsParents["👨‍👩‍👧‍👧 Mom's Parents"]
    direction RL
    GrandMaMom === GrandPaMom
end

subgraph DadsParents["👨‍👩‍👦‍👦 Dad's Parents"]
    direction RL
    GrandMaDad === GrandPaDad
end

subgraph SiblingsDad["👨‍👩‍👧‍👦 Dad's Siblings"]
    direction RL
    DadSideUncleElderBrotherFamily
    DadSideAuntsFamily
    DadSideUncleYoungerBrotherFamily
end

subgraph SiblingsMom["👨‍👩‍👧‍👦 Mom's Siblings"]
    direction RL
    MomSideUnclesFamily
    MomSideAuntsFamily
end

subgraph Parents
    direction LR
    Mom
    Dad
end

subgraph MySiblings["👨‍👩‍👧‍👦 My Siblings"]
    direction RL
    Me
    BrotherYounger
    BroElder
    SisterElder
    SisterYounger
end

subgraph DadSideAuntsFamily["👨‍👩‍👧‍👦 Dad's sister (aunt's) family"]
    direction LR
    DadSideAuntSister
    DadSideAuntHusband
end

subgraph DadSideUncleYoungerBrotherFamily["👨‍👩‍👧‍👦 Dad's younger brother's (uncle's) family"]
    direction LR
    DadSideUncleYoungerBro
    DadSideUncleYoungerWife
end

subgraph SonsFamily["👩‍❤️‍👨 Son's family"]
    direction RL
    SonsWife
    Son
end

subgraph GrandsonsFamily["👩‍❤️‍👨 Grandson's family"]
    direction RL
    Grandson
    GrandsonWife
end

subgraph GranddaughtersFamily["👩‍❤️‍👨 Granddaughter's family"]
    direction RL
    Granddaughter
    GranddaughtersHusband
end

subgraph DaughtersFamily["👩‍❤️‍👨 Daughter's Family"]
    direction RL
    Daughter
    DaughterHusband
end

SiblingsDad --> DadSideCousinElderSister & DadSideCousinElderBro & DadSideCousinYoungerBro & DadSideCousinYoungerSister

Parents --> Me & SisterElder & SisterYounger & BroElder & BrotherYounger

MomsParents --> MomSideUncle & MomSideAunt & Mom

DadsParents --> DadSideUncleElderBro & DadSideUncleYoungerBro & DadSideAuntSister & Dad

SiblingsMom --> MomSideCousinElderBro & MomSideCousinElderSister & MomSideCousinYoungerBro & MomSideCousinYoungerSister

Me --> Son & Daughter

SonsFamily --> Grandson & Granddaughter