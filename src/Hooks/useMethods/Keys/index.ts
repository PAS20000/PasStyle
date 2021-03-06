const Alphabet = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F', 
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z'
]
const emojis = [
    "(* ^ ω ^)\t(´ ∀ ` *)\t٩(◕‿◕｡)۶\t☆*:.｡.o(≧▽≦)o.｡.:*☆",
    "(o^▽^o)\t(⌒▽⌒)☆\t<(￣︶￣)>\t。.:☆*:･'(*⌒―⌒*)))",
    "ヽ(・∀・)ﾉ\t(´｡• ω •｡`)\t(￣ω￣)\t｀;:゛;｀;･(°ε° )",
    "(o･ω･o)\t(＠＾◡＾)\tヽ(*・ω・)ﾉ\t(o_ _)ﾉ彡☆",
    "(^人^)\t(o´▽`o)\t(*´▽`*)\t｡ﾟ( ﾟ^∀^ﾟ)ﾟ｡",
    "( ´ ω ` )\t(((o(*°▽°*)o)))\t(≧◡≦)\t(o´∀`o)",
    "(´• ω •`)\t(＾▽＾)\t(⌒ω⌒)\t∑d(°∀°d)",
    "╰(▔∀▔)╯\t(─‿‿─)\t(*^‿^*)\tヽ(o^ ^o)ﾉ",
    "(✯◡✯)\t(◕‿◕)\t(*≧ω≦*)\t(☆▽☆)",
    "(⌒‿⌒)\t＼(≧▽≦)／\tヽ(o＾▽＾o)ノ\t☆ ～('▽^人)",
    "(*°▽°*)\t٩(｡•́‿•̀｡)۶\t(✧ω✧)\tヽ(*⌒▽⌒*)ﾉ",
    "(´｡• ᵕ •｡`)\t( ´ ▽ ` )\t(￣▽￣)\t╰(*´︶`*)╯",
    "ヽ(>∀<☆)ノ\to(≧▽≦)o\t(☆ω☆)\t(っ˘ω˘ς )",
    "＼(￣▽￣)／\t(*¯︶¯*)\t＼(＾▽＾)／\t٩(◕‿◕)۶",
    "(o˘◡˘o)\t\\(★ω★)/\t\\(^ヮ^)/\t(〃＾▽＾〃)",
    "(╯✧▽✧)╯\to(>ω<)o\to( ❛ᴗ❛ )o\t｡ﾟ(TヮT)ﾟ｡",
    "( ‾́ ◡ ‾́ )\t(ﾉ´ヮ`)ﾉ*: ･ﾟ\t(b ᵔ▽ᵔ)b\t(๑˃ᴗ˂)ﻭ",
    "(๑˘︶˘๑)\t( ˙꒳​˙ )\t(*꒦ິ꒳꒦ີ)\t°˖✧◝(⁰▿⁰)◜✧˖°",
    "(´･ᴗ･ ` )\t(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧\t(„• ֊ •„)\t(.❛ ᴗ ❛.)",
    "(⁀ᗢ⁀)\t(￢‿￢ )\t(¬‿¬ )\t(*￣▽￣)b",
    "( ˙▿˙ )\t(¯▿¯)\t( ◕▿◕ )\t＼(٥⁀▽⁀ )／",
    "(„• ᴗ •„)\t(ᵔ◡ᵔ)\t( ´ ▿ ` )\t",
    "(ﾉ´ з `)ノ\t(♡μ_μ)\t(*^^*)♡\t☆⌒ヽ(*'､^*)chu",
    "(♡-_-♡)\t(￣ε￣＠)\tヽ(♡‿♡)ノ\t( ´ ∀ `)ノ～ ♡",
    "(─‿‿─)♡\t(´｡• ᵕ •｡`) ♡\t(*♡∀♡)\t(｡・//ε//・｡)",
    "(´ ω `♡)\t♡( ◡‿◡ )\t(◕‿◕)♡\t(/▽＼*)｡o○♡",
    "(ღ˘⌣˘ღ)\t(♡°▽°♡)\t♡(｡- ω -)\t♡ ～('▽^人)",
    "(´• ω •`) ♡\t(´ ε ` )♡\t(´｡• ω •｡`) ♡\t( ´ ▽ ` ).｡ｏ♡",
    "╰(*´︶`*)╯♡\t(*˘︶˘*).｡.:*♡\t(♡˙︶˙♡)\t♡＼(￣▽￣)／♡",
    "(≧◡≦) ♡\t(⌒▽⌒)♡\t(*¯ ³¯*)♡\t(っ˘з(˘⌣˘ ) ♡",
    "♡ (˘▽˘>ԅ( ˘⌣˘)\t( ˘⌣˘)♡(˘⌣˘ )\t(/^-^(^ ^*)/ ♡\t٩(♡ε♡)۶",
    "σ(≧ε≦σ) ♡\t♡ (⇀ 3 ↼)\t♡ (￣З￣)\t(❤ω❤)",
    "(˘∀˘)/(μ‿μ) ❤\t❤ (ɔˆз(ˆ⌣ˆc)\t(´♡‿♡`)\t(°◡°♡)",
    "Σ>―(〃°ω°〃)♡→\t(´,,•ω•,,)♡\t(´꒳`)♡\t♡(>ᴗ•)",
    "(⌒_⌒;)\t(o^ ^o)\t(*/ω＼)\t(*/。＼)",
    "(*/_＼)\t(*ﾉωﾉ)\t(o-_-o)\t(*μ_μ)",
    "( ◡‿◡ *)\t(ᵔ.ᵔ)\t(*ﾉ∀`*)\t(//▽//)",
    "(//ω//)\t(ノ*°▽°*)\t(*^.^*)\t(*ﾉ▽ﾉ)",
    "(￣▽￣*)ゞ\t(⁄ ⁄•⁄ω⁄•⁄ ⁄)\t(*/▽＼*)\t(⁄ ⁄>⁄ ▽ ⁄<⁄ ⁄)",
    "(„ಡωಡ„)\t(ง ื▿ ื)ว\t( 〃▽〃)\t(/▿＼ )",
    "(///￣ ￣///)\t\t\t",
    "(ノ_<。)ヾ(´ ▽ ` )\t｡･ﾟ･(ﾉД`)ヽ(￣ω￣ )\tρ(- ω -、)ヾ(￣ω￣; )",
    "ヽ(￣ω￣(。。 )ゝ\t(*´ I `)ﾉﾟ(ﾉД｀ﾟ)ﾟ｡\tヽ(~_~(・_・ )ゝ",
    "(ﾉ_；)ヾ(´ ∀ ` )\t(; ω ; )ヾ(´∀`* )\t(*´ー)ﾉ(ノд`)",
    "(´-ω-`( _ _ )\t(っ´ω`)ﾉ(╥ω╥)\t(ｏ・_・)ノ”(ノ_<、)",
    "(＃＞＜)\t(；⌣̀_⌣́)\t☆ｏ(＞＜；)○\t(￣ ￣|||)",
    "(；￣Д￣)\t(￣□￣」)\t(＃￣0￣)\t(＃￣ω￣)",
    "(￢_￢;)\t(＞ｍ＜)\t(」°ロ°)」\t(〃＞＿＜;〃)",
    "(＾＾＃)\t(︶︹︺)\t(￣ヘ￣)\t<(￣ ﹌ ￣)>",
    "(￣︿￣)\t(＞﹏＜)\t(--_--)\t凸(￣ヘ￣)",
    "ヾ( ￣O￣)ツ\t(⇀‸↼‶)\to(>< )o\t(」＞＜)」",
    "(ᗒᗣᗕ)՞\t(눈_눈)\t\t",
    "(＃`Д´)\t(`皿´＃)\t( ` ω ´ )\tヽ( `д´*)ノ",
    "(・`ω´・)\t(`ー´)\tヽ(`⌒´メ)ノ\t凸(`△´＃)",
    "( `ε´ )\tψ( ` ∇ ´ )ψ\tヾ(`ヘ´)ﾉﾞ\tヽ(‵﹏´)ノ",
    "(ﾒ` ﾛ ´)\t(╬`益´)\t┌∩┐(◣_◢)┌∩┐\t凸( ` ﾛ ´ )凸",
    "Σ(▼□▼メ)\t(°ㅂ°╬)\tψ(▼へ▼メ)～→\t(ノ°益°)ノ",
    "(҂ `з´ )\t(‡▼益▼)\t(҂` ﾛ ´)凸\t((╬◣﹏◢))",
    "٩(╬ʘ益ʘ╬)۶\t(╬ Ò﹏Ó)\t＼＼٩(๑`^´๑)۶／／\t(凸ಠ益ಠ)凸",
    "↑_(ΦwΦ)Ψ\t←~(Ψ▼ｰ▼)∈\t୧((#Φ益Φ#))୨\t٩(ఠ益ఠ)۶",
    "(ﾉಥ益ಥ)ﾉ\t(≖､≖╬)\t\t",
    "(ノ_<。)\t(-_-)\t(´-ω-`)\t.･ﾟﾟ･(／ω＼)･ﾟﾟ･.",
    "(μ_μ)\t(ﾉД`)\t(-ω-、)\t。゜゜(´Ｏ`) ゜゜。",
    "o(TヘTo)\t( ; ω ; )\t(｡╯︵╰｡)\t｡･ﾟﾟ*(>д<)*ﾟﾟ･｡",
    "( ﾟ，_ゝ｀)\t(个_个)\t(╯︵╰,)\t｡･ﾟ(ﾟ><ﾟ)ﾟ･｡",
    "( ╥ω╥ )\t(╯_╰)\t(╥_╥)\t.｡･ﾟﾟ･(＞_＜)･ﾟﾟ･｡.",
    "(／ˍ・、)\t(ノ_<、)\t(╥﹏╥)\t｡ﾟ(｡ﾉωヽ｡)ﾟ｡",
    "(つω`｡)\t(｡T ω T｡)\t(ﾉω･､)\t･ﾟ･(｡>ω<｡)･ﾟ･",
    "(T_T)\t(>_<)\t(っ˘̩╭╮˘̩)っ\t｡ﾟ･ (>﹏<) ･ﾟ｡",
    "o(〒﹏〒)o\t(｡•́︿•̀｡)\t(ಥ﹏ಥ)\t(ಡ‸ಡ)",
    "~(>_<~)\t☆⌒(> _ <)\t☆⌒(>。<)\t(☆_@)",
    "(×_×)\t(x_x)\t(×_×)⌒☆\t(x_x)⌒☆",
    "(×﹏×)\t☆(＃××)\t(＋_＋)\t[ ± _ ± ]",
    "٩(× ×)۶\t_:(´ཀ`」 ∠):_\t(ﾒ﹏ﾒ)\t",
    "(ノωヽ)\t(／。＼)\t(ﾉ_ヽ)\t..・ヾ(。＞＜)シ",
    "(″ロ゛)\t(;;;*_*)\t(・人・)\t＼(〇_ｏ)／",
    "(/ω＼)\t(/_＼)\t〜(＞＜)〜\tΣ(°△°|||)︴",
    "(((＞＜)))\t{{ (>_<) }}\t＼(º □ º l|l)/\t〣( ºΔº )〣",
    "▓▒░(°◡°)░▒▓\t\t\t",
    "ヽ(ー_ー )ノ\tヽ(´ー` )┌\t┐(‘～` )┌\tヽ(　￣д￣)ノ",
    "┐(￣ヘ￣)┌\tヽ(￣～￣　)ノ\t╮(￣_￣)╭\tヽ(ˇヘˇ)ノ",
    "┐(￣～￣)┌\t┐(︶▽︶)┌\t╮(￣～￣)╭\t¯\\_(ツ)_/¯",
    "┐( ´ д ` )┌\t╮(︶︿︶)╭\t┐(￣∀￣)┌\t┐( ˘ ､ ˘ )┌",
    "╮(︶▽︶)╭\t╮( ˘ ､ ˘ )╭\t┐( ˘_˘ )┌\t╮( ˘_˘ )╭",
    "┐(￣ヮ￣)┌\tᕕ( ᐛ )ᕗ\t┐(シ)┌\t",
    "(￣ω￣;)\tσ(￣、￣〃)\t(￣～￣;)\t(-_-;)・・・",
    "┐('～`;)┌\t(・_・ヾ\t(〃￣ω￣〃ゞ\t┐(￣ヘ￣;)┌",
    "(・_・;)\t(￣_￣)・・・\t╮(￣ω￣;)╭\t(¯ . ¯;)",
    "(＠_＠)\t(・・;)ゞ\tΣ(￣。￣ﾉ)\t(・・ ) ?",
    "(•ิ_•ิ)?\t(◎ ◎)ゞ\t(ーー;)\tლ(ಠ_ಠ ლ)",
    "ლ(¯ロ¯\"ლ)\t(¯ . ¯٥)\t(¯ ¯٥)\t",
    "(￢_￢)\t(→_→)\t(￢ ￢)\t(￢‿￢ )",
    "(¬_¬ )\t(←_←)\t(¬ ¬ )\t(¬‿¬ )",
    "(↼_↼)\t(⇀_⇀)\t(ᓀ ᓀ)\t",
    "w(°ｏ°)w\tヽ(°〇°)ﾉ\tΣ(O_O)\tΣ(°ロ°)",
    "(⊙_⊙)\t(o_O)\t(O_O;)\t(O.O)",
    "(°ロ°) !\t(o_O) !\t(□_□)\tΣ(□_□)",
    "∑(O_O;)\t( : ౦ ‸ ౦ : )\t\t",
    "(*・ω・)ﾉ\t(￣▽￣)ノ\t(°▽°)/\t( ´ ∀ ` )ﾉ",
    "(^-^*)/\t(＠´ー`)ﾉﾞ\t(´• ω •`)ﾉ\t( ° ∀ ° )ﾉﾞ",
    "ヾ(*'▽'*)\t＼(⌒▽⌒)\tヾ(☆▽☆)\t( ´ ▽ ` )ﾉ",
    "(^０^)ノ\t~ヾ(・ω・)\t(・∀・)ノ\tヾ(・ω・*)",
    "(*°ｰ°)ﾉ\t(・_・)ノ\t(o´ω`o)ﾉ\t( ´ ▽ ` )/",
    "(￣ω￣)/\t( ´ ω ` )ノﾞ\t(⌒ω⌒)ﾉ\t(o^ ^o)/",
    "(≧▽≦)/\t(✧∀✧)/\t(o´▽`o)ﾉ\t(￣▽￣)/",
    "(づ￣ ³￣)づ\t(つ≧▽≦)つ\t(つ✧ω✧)つ\t(づ ◕‿◕ )づ",
    "(⊃｡•́‿•̀｡)⊃\t(つ . •́ _ʖ •̀ .)つ\t(っಠ‿ಠ)っ\t(づ◡﹏◡)づ",
    "⊂(´• ω •`⊂)\t⊂(･ω･*⊂)\t⊂(￣▽￣)⊃\t⊂( ´ ▽ ` )⊃",
    "( ~*-*)~\t(｡•̀ᴗ-)✧\t\t",
    "(^_~)\t( ﾟｏ⌒)\t(^_-)≡☆\t(^ω~)",
    "(>ω^)\t(~人^)\t(^_-)\t( -_・)",
    "(^_<)〜☆\t(^人<)〜☆\t☆⌒(≧▽​° )\t☆⌒(ゝ。∂)",
    "(^_<)\t(^_−)☆\t(･ω<)☆\t(^.~)☆",
    "(^.~)\t(>ᴗ•)\t\t",
    "m(_ _)m\t(シ_ _)シ\tm(. .)m\t<(_ _)>",
    "人(_ _*)\t(*_ _)人\tm(_ _;m)\t(m;_ _)m",
    "(シ. .)シ\t\t\t",
    "(*￣ii￣)\t(￣ﾊ￣*)\t\\(￣ﾊ￣)\t(＾་།＾)",
    "(＾〃＾)\t(￣ ¨ヽ￣)\t(￣ ;￣)\t(￣ ;;￣)",
    "|･ω･)\tﾍ(･_|\t|ω･)ﾉ\tヾ(･|",
    "|д･)\t|_￣))\t|▽//)\t┬┴┬┴┤(･_├┬┴┬┴",
    "┬┴┬┴┤･ω･)ﾉ\t┬┴┬┴┤( ͡° ͜ʖ├┬┴┬┴\t┬┴┬┴┤(･_├┬┴┬┴\t|_・)",
    "|･д･)ﾉ\t|ʘ‿ʘ)╯\t\t",
    "__φ(．．)\t( ￣ー￣)φ__\t__φ(。。)\t__φ(．．;)",
    "ヾ( `ー´)シφ__\t__〆(￣ー￣ )\t....φ(・∀・*)\t___〆(・∀・)",
    "( ^▽^)ψ__\t....φ(︶▽︶)φ....\t( . .)φ__\t__φ(◎◎ヘ)",
    "☆ﾐ(o*･ω･)ﾉ\tC= C= C= C= C=┌(;・ω・)┘\t─=≡Σ((( つ＞＜)つ",
    "ε=ε=ε=ε=┌(;￣▽￣)┘\tε=ε=┌( >_<)┘\tC= C= C= C=┌( `ー´)┘",
    "ε===(っ≧ω≦)っ\tヽ(￣д￣;)ノ=3=3=3\t。。。ミヽ(。＞＜)ノ",
    "[(－－)]..zzZ\t(－_－) zzZ\t(∪｡∪)｡｡｡zzZ\t(－ω－) zzZ",
    "(￣o￣) zzZZzzZZ\t(( _ _ ))..zzzZZ\t(￣ρ￣)..zzZZ\t(－.－)...zzz",
    "(＿ ＿*) Z z z\t(x . x) ~~zzZ\t\t",
    "(=^･ω･^=)\t(=^･ｪ･^=)\t(=①ω①=)\t( =ω=)..nyaa",
    "(= ; ｪ ; =)\t(=`ω´=)\t(=^‥^=)\t( =ノωヽ=)",
    "(=⌒‿‿⌒=)\t(=^ ◡ ^=)\t(=^-ω-^=)\tヾ(=`ω´=)ノ”",
    "(＾• ω •＾)\t(/ =ω=)/\tฅ(•ㅅ•❀)ฅ\tฅ(• ɪ •)ฅ",
    "ଲ(ⓛ ω ⓛ)ଲ\t(^=◕ᴥ◕=^)\t( =ω= )\t",
    "ଲ(ⓛ ω ⓛ)ଲ\t(^=◕ᴥ◕=^)\t( =ω= )\t(^˵◕ω◕˵^)",
    "(^◔ᴥ◔^)\t(^◕ᴥ◕^)\tต(=ω=)ต\t( Φ ω Φ )",
    "ฅ(^◕ᴥ◕^)ฅ\t\t\t",
    "( ´(ｴ)ˋ )\t(*￣(ｴ)￣*)\tヽ(￣(ｴ)￣)ﾉ\t(／￣(ｴ)￣)／",
    "(￣(ｴ)￣)\tヽ( ˋ(ｴ)´ )ﾉ\t⊂(￣(ｴ)￣)⊃\t(／(ｴ)＼)",
    "⊂(´(ェ)ˋ)⊃\t(/-(ｴ)-＼)\t(/°(ｴ)°)/\tʕ ᵔᴥᵔ ʔ",
    "ʕ •ᴥ• ʔ\tʕ •̀ ω •́ ʔ\tʕ •̀ o •́ ʔ\tʕಠᴥಠʔ",
    "∪＾ェ＾∪\t∪･ω･∪\t∪￣-￣∪\t∪･ｪ･∪",
    "Ｕ^皿^Ｕ\tＵＴｪＴＵ\tU^ｪ^U\tV●ᴥ●V",
    "U・ᴥ・U\t\t\t",
    "／(≧ x ≦)＼\t／(･ × ･)＼\t／(=´x`=)＼\t／(^ x ^)＼",
    "／(=･ x ･=)＼\t／(^ × ^)＼\t／(＞×＜)＼\t／(˃ᆺ˂)＼",
    "( ´(00)ˋ )\t(￣(ω)￣)\tヽ( ˋ(00)´ )ノ\t( ´(oo)ˋ )",
    "＼(￣(oo)￣)／\t｡ﾟ(ﾟ´(00)`ﾟ)ﾟ｡\t(￣(00)￣)\t(ˆ(oo)ˆ)",
    "(￣Θ￣)\t(`･Θ･´)\t( ˋ Θ ´ )\t(◉Θ◉)",
    "＼( ˋ Θ ´ )／\t(･θ･)\t(・Θ・)\tヾ(￣◇￣)ノ〃",
    "(･Θ･)\t\t\t",
    "(°)#))<<\t<・ )))><<\tζ°)))彡\t>°))))彡",
    "(°))<<\t>^)))<～～\t≧( ° ° )≦\t",
    "/╲/\\╭(ఠఠ益ఠఠ)╮/\\╱\\\t/╲/\\╭(ರರ⌓ರರ)╮/\\╱\\\t/╲/\\╭༼ ººل͟ºº ༽╮/\\╱\\\t/╲/\\╭( ͡°͡° ͜ʖ ͡°͡°)╮/\\╱\\",
    "/╲/\\╭[ ᴼᴼ ౪ ᴼᴼ]╮/\\╱\\\t/╲/\\( •̀ ω •́ )/\\╱\\\t/╲/\\╭[☉﹏☉]╮/\\╱\\\t",
    "ヾ(・ω・)メ(・ω・)ノ\tヽ(∀° )人( °∀)ノ\tヽ( ⌒o⌒)人(⌒-⌒ )ﾉ",
    "(*^ω^)八(⌒▽⌒)八(-‿‿- )ヽ\t＼(＾∀＾)メ(＾∀＾)ノ\tヾ(￣ー￣(≧ω≦*)ゝ",
    "ヽ( ⌒ω⌒)人(=^‥^= )ﾉ\tヽ(≧◡≦)八(o^ ^o)ノ\t(*・∀・)爻(・∀・*)",
    "｡*:☆(・ω・人・ω・)｡:゜☆｡\to(^^o)(o^^o)(o^^o)(o^^)o\t(((￣(￣(￣▽￣)￣)￣)))",
    "(°(°ω(°ω°(☆ω☆)°ω°)ω°)°)\tヾ(・ω・`)ノヾ(´・ω・)ノ゛\tΨ( `∀)(∀´ )Ψ",
    "(っ˘▽˘)(˘▽˘)˘▽˘ς)\t(((*°▽°*)八(*°▽°*)))\t☆ヾ(*´・∀・)ﾉヾ(・∀・`*)ﾉ☆",
    "(*＾ω＾)人(＾ω＾*)\t٩(๑･ิᴗ･ิ)۶٩(･ิᴗ･ิ๑)۶\t(☞°ヮ°)☞ ☜(°ヮ°☜)",
    "＼(▽￣ \\ (￣▽￣) / ￣▽)／\t\\( ˙▿˙ )/\\( ˙▿˙ )/\t",
    "ヽ( ･∀･)ﾉ_θ彡☆Σ(ノ `Д´)ノ\t(*´∇`)┌θ☆(ﾉ>_<)ﾉ\t( ￣ω￣)ノﾞ⌒☆ﾐ(o _ _)o",
    "(*`0´)θ☆(メ°皿°)ﾉ\t(o¬‿¬o )...☆ﾐ(*x_x)\t(╬￣皿￣)=○＃(￣#)３￣)",
    "(; -_-)――――――C<―_-)\t＜( ￣︿￣)︵θ︵θ︵☆(＞口＜－)\t(￣ε(#￣)☆╰╮o(￣▽￣///)",
    "ヽ(>_<ヽ) ―⊂|=0ヘ(^‿^ )\tヘ(>_<ヘ) ￢o(￣‿￣ﾒ)\t,,((( ￣□)_／ ＼_(○￣ ))),,",
    "(҂` ﾛ ´)︻デ═一 ＼(º □ º l|l)/\t(╯°Д°)╯︵ /(.□ . ＼)\t(¬_¬'')ԅ(￣ε￣ԅ)",
    "/( .□.)＼ ︵╰(°益°)╯︵ /(.□. /)\t(ﾉ-.-)ﾉ….((((((((((((●~* ( >_<)\t!!(ﾒ￣ ￣)_θ☆°0°)/",
    "(`⌒*)O-(`⌒´Q)\t(((ง’ω’)و三 ง’ω’)ڡ≡　☆⌒ﾐ((x_x)\t(งಠ_ಠ)ง　σ( •̀ ω •́ σ)",
    "(っ•﹏•)っ ✴==≡눈٩(`皿´҂)ง\t(｢• ω •)｢ (⌒ω⌒`)\t( °ᴗ°)~ð (/❛o❛\\)",
    "( ・∀・)・・・--------☆\t(/-_・)/D・・・・・------ →\t(^ω^)ノﾞ(((((((((●～*",
    "( -ω-)／占~~~~~\t(/・・)ノ　　 (( く ((へ\t―⊂|=0ヘ(^^ )",
    "○∞∞∞∞ヽ(^ー^ )\t(; ・_・)――――C\t(ಠ o ಠ)¤=[]:::::>",
    "(*＾＾)/~~~~~~~~~~◎\t￢o(￣-￣ﾒ)\t―(T_T)→",
    "((( ￣□)_／\t(ﾒ` ﾛ ´)︻デ═一\t( ´-ω･)︻┻┳══━一",
    "(ﾒ￣▽￣)︻┳═一\t✴==≡눈٩(`皿´҂)ง\tQ(`⌒´Q)",
    "(ノ ˘_˘)ノ　ζ|||ζ　ζ|||ζ　ζ|||ζ\t(ﾉ≧∀≦)ﾉ ‥…━━━★\t(ﾉ>ω<)ﾉ :｡･:*:･ﾟ’★,｡･:*:･ﾟ’☆",
    "(ノ°∀°)ノ⌒･*:.｡. .｡.:*･゜ﾟ･*☆\t╰( ͡° ͜ʖ ͡° )つ──☆*:・ﾟ\t(＃￣□￣)o━∈・・━━━━☆",
    "(⊃｡•́‿•̀｡)⊃━✿✿✿✿✿✿\t(∩ᄑ_ᄑ)⊃━☆ﾟ*･｡*･:≡( ε:)\t(/￣ー￣)/~~☆’.･.･:★’.･.･:☆",
    "(∩` ﾛ ´)⊃━炎炎炎炎炎\t\t",
    "(っ˘ڡ˘ς)\t( o˘◡˘o) ┌iii┐\t(　’ω’)旦~~",
    "( ˘▽˘)っ♨\t♨o(>_<)o♨\t( ・ω・)o-{{[〃]}}",
    "(　・ω・)⊃-[二二]\t( ・・)つ―{}@{}@{}-\t( ・・)つ-●●●",
    "(*´ー`)旦 旦(￣ω￣*)\t(*´з`)口ﾟ｡ﾟ口(・∀・ )\t( o^ ^o)且 且(´ω`*)",
    "( ￣▽￣)[] [](≧▽≦ )\t( *^^)o∀*∀o(^^* )\t( ^^)_旦~~　 ~~U_(^^ )",
    "(*￣▽￣)旦 且(´∀`*)\t-●●●-ｃ(・・ )\t( ・・)つ―●○◎-",
    "ヾ(´〇`)ﾉ♪♪♪\tヘ(￣ω￣ヘ)\t(〜￣▽￣)〜\t〜(￣▽￣〜)",
    "ヽ(o´∀`)ﾉ♪♬\t(ﾉ≧∀≦)ﾉ\t♪ヽ(^^ヽ)♪\t♪(/_ _ )/♪",
    "♪♬((d⌒ω⌒b))♬♪\t└(￣-￣└))\t((┘￣ω￣)┘\t√(￣‥￣√)",
    "└(＾＾)┐\t┌(＾＾)┘\t＼(￣▽￣)＼\t／(￣▽￣)／",
    "(￣▽￣)/♫•*¨*•.¸¸♪\t(^_^♪)\t(~˘▽˘)~\t~(˘▽˘~)",
    "ヾ(⌐■_■)ノ♪\t(〜￣△￣)〜\t(~‾▽‾)~\t~(˘▽˘)~",
    "乁( • ω •乁)\t(｢• ω •)｢\t⁽⁽◝( • ω • )◜⁾⁾\t✺◟( • ω • )◞✺",
    "♬♫♪◖(● o ●)◗♪♫♬\t( ˘ ɜ˘) ♬♪♫\t♪♪♪ ヽ(ˇ∀ˇ )ゞ\t(ˇ▽ˇ)ノ♪♬♫",
    "( ^^)p_____|_o____q(^^ )\t(／o^)/ °⊥ ＼(^o＼)\t!(;ﾟoﾟ)o/￣￣￣￣￣￣￣~ >ﾟ))))彡",
    "ヽ(^o^)ρ┳┻┳°σ(^o^)ノ\t(／_^)／　　●　＼(^_＼)\t\"( (≡|≡))_／ ＼_((≡|≡) )\"",
    "( ノ-_-)ノﾞ_□ VS □_ヾ(^-^ヽ)\tヽ(；^ ^)ノﾞ ．．．...___〇\t(=O*_*)=O Q(*_*Q)",
    "Ю　○三　＼(￣^￣＼)\t(˙ω˙)🎮(˙∀˙)🎮\t",
    "( ͡° ͜ʖ ͡°)\t( ͡° ʖ̯ ͡°)\t( ͠° ͟ʖ ͡°)\t( ͡ᵔ ͜ʖ ͡ᵔ)",
    "( . •́ _ʖ •̀ .)\t( ఠ ͟ʖ ఠ)\t( ͡ಠ ʖ̯ ͡ಠ)\t( ಠ ʖ̯ ಠ)",
    "( ಠ ͜ʖ ಠ)\t( ಥ ʖ̯ ಥ)\t( ͡• ͜ʖ ͡• )\t( ･ิ ͜ʖ ･ิ)",
    "( ͡  ͜ʖ ͡ )\t(≖ ͜ʖ≖)\t(ʘ ʖ̯ ʘ)\t(ʘ ͟ʖ ʘ)",
] // 207 items

export default {
    emojis,
    Alphabet
}