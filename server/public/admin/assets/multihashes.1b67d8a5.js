import{b as s}from"./buffer.b4004db0.js";import{s as r}from"./multibase.e14dc0d0.js";import{v as t}from"./varint.b509688f.js";var o={},l={};l.names=Object.freeze({identity:0,sha1:17,"sha2-256":18,"sha2-512":19,"dbl-sha2-256":86,"sha3-224":23,"sha3-256":22,"sha3-384":21,"sha3-512":20,"shake-128":24,"shake-256":25,"keccak-224":26,"keccak-256":27,"keccak-384":28,"keccak-512":29,"murmur3-128":34,"murmur3-32":35,md4:212,md5:213,"blake2b-8":45569,"blake2b-16":45570,"blake2b-24":45571,"blake2b-32":45572,"blake2b-40":45573,"blake2b-48":45574,"blake2b-56":45575,"blake2b-64":45576,"blake2b-72":45577,"blake2b-80":45578,"blake2b-88":45579,"blake2b-96":45580,"blake2b-104":45581,"blake2b-112":45582,"blake2b-120":45583,"blake2b-128":45584,"blake2b-136":45585,"blake2b-144":45586,"blake2b-152":45587,"blake2b-160":45588,"blake2b-168":45589,"blake2b-176":45590,"blake2b-184":45591,"blake2b-192":45592,"blake2b-200":45593,"blake2b-208":45594,"blake2b-216":45595,"blake2b-224":45596,"blake2b-232":45597,"blake2b-240":45598,"blake2b-248":45599,"blake2b-256":45600,"blake2b-264":45601,"blake2b-272":45602,"blake2b-280":45603,"blake2b-288":45604,"blake2b-296":45605,"blake2b-304":45606,"blake2b-312":45607,"blake2b-320":45608,"blake2b-328":45609,"blake2b-336":45610,"blake2b-344":45611,"blake2b-352":45612,"blake2b-360":45613,"blake2b-368":45614,"blake2b-376":45615,"blake2b-384":45616,"blake2b-392":45617,"blake2b-400":45618,"blake2b-408":45619,"blake2b-416":45620,"blake2b-424":45621,"blake2b-432":45622,"blake2b-440":45623,"blake2b-448":45624,"blake2b-456":45625,"blake2b-464":45626,"blake2b-472":45627,"blake2b-480":45628,"blake2b-488":45629,"blake2b-496":45630,"blake2b-504":45631,"blake2b-512":45632,"blake2s-8":45633,"blake2s-16":45634,"blake2s-24":45635,"blake2s-32":45636,"blake2s-40":45637,"blake2s-48":45638,"blake2s-56":45639,"blake2s-64":45640,"blake2s-72":45641,"blake2s-80":45642,"blake2s-88":45643,"blake2s-96":45644,"blake2s-104":45645,"blake2s-112":45646,"blake2s-120":45647,"blake2s-128":45648,"blake2s-136":45649,"blake2s-144":45650,"blake2s-152":45651,"blake2s-160":45652,"blake2s-168":45653,"blake2s-176":45654,"blake2s-184":45655,"blake2s-192":45656,"blake2s-200":45657,"blake2s-208":45658,"blake2s-216":45659,"blake2s-224":45660,"blake2s-232":45661,"blake2s-240":45662,"blake2s-248":45663,"blake2s-256":45664,"Skein256-8":45825,"Skein256-16":45826,"Skein256-24":45827,"Skein256-32":45828,"Skein256-40":45829,"Skein256-48":45830,"Skein256-56":45831,"Skein256-64":45832,"Skein256-72":45833,"Skein256-80":45834,"Skein256-88":45835,"Skein256-96":45836,"Skein256-104":45837,"Skein256-112":45838,"Skein256-120":45839,"Skein256-128":45840,"Skein256-136":45841,"Skein256-144":45842,"Skein256-152":45843,"Skein256-160":45844,"Skein256-168":45845,"Skein256-176":45846,"Skein256-184":45847,"Skein256-192":45848,"Skein256-200":45849,"Skein256-208":45850,"Skein256-216":45851,"Skein256-224":45852,"Skein256-232":45853,"Skein256-240":45854,"Skein256-248":45855,"Skein256-256":45856,"Skein512-8":45857,"Skein512-16":45858,"Skein512-24":45859,"Skein512-32":45860,"Skein512-40":45861,"Skein512-48":45862,"Skein512-56":45863,"Skein512-64":45864,"Skein512-72":45865,"Skein512-80":45866,"Skein512-88":45867,"Skein512-96":45868,"Skein512-104":45869,"Skein512-112":45870,"Skein512-120":45871,"Skein512-128":45872,"Skein512-136":45873,"Skein512-144":45874,"Skein512-152":45875,"Skein512-160":45876,"Skein512-168":45877,"Skein512-176":45878,"Skein512-184":45879,"Skein512-192":45880,"Skein512-200":45881,"Skein512-208":45882,"Skein512-216":45883,"Skein512-224":45884,"Skein512-232":45885,"Skein512-240":45886,"Skein512-248":45887,"Skein512-256":45888,"Skein512-264":45889,"Skein512-272":45890,"Skein512-280":45891,"Skein512-288":45892,"Skein512-296":45893,"Skein512-304":45894,"Skein512-312":45895,"Skein512-320":45896,"Skein512-328":45897,"Skein512-336":45898,"Skein512-344":45899,"Skein512-352":45900,"Skein512-360":45901,"Skein512-368":45902,"Skein512-376":45903,"Skein512-384":45904,"Skein512-392":45905,"Skein512-400":45906,"Skein512-408":45907,"Skein512-416":45908,"Skein512-424":45909,"Skein512-432":45910,"Skein512-440":45911,"Skein512-448":45912,"Skein512-456":45913,"Skein512-464":45914,"Skein512-472":45915,"Skein512-480":45916,"Skein512-488":45917,"Skein512-496":45918,"Skein512-504":45919,"Skein512-512":45920,"Skein1024-8":45921,"Skein1024-16":45922,"Skein1024-24":45923,"Skein1024-32":45924,"Skein1024-40":45925,"Skein1024-48":45926,"Skein1024-56":45927,"Skein1024-64":45928,"Skein1024-72":45929,"Skein1024-80":45930,"Skein1024-88":45931,"Skein1024-96":45932,"Skein1024-104":45933,"Skein1024-112":45934,"Skein1024-120":45935,"Skein1024-128":45936,"Skein1024-136":45937,"Skein1024-144":45938,"Skein1024-152":45939,"Skein1024-160":45940,"Skein1024-168":45941,"Skein1024-176":45942,"Skein1024-184":45943,"Skein1024-192":45944,"Skein1024-200":45945,"Skein1024-208":45946,"Skein1024-216":45947,"Skein1024-224":45948,"Skein1024-232":45949,"Skein1024-240":45950,"Skein1024-248":45951,"Skein1024-256":45952,"Skein1024-264":45953,"Skein1024-272":45954,"Skein1024-280":45955,"Skein1024-288":45956,"Skein1024-296":45957,"Skein1024-304":45958,"Skein1024-312":45959,"Skein1024-320":45960,"Skein1024-328":45961,"Skein1024-336":45962,"Skein1024-344":45963,"Skein1024-352":45964,"Skein1024-360":45965,"Skein1024-368":45966,"Skein1024-376":45967,"Skein1024-384":45968,"Skein1024-392":45969,"Skein1024-400":45970,"Skein1024-408":45971,"Skein1024-416":45972,"Skein1024-424":45973,"Skein1024-432":45974,"Skein1024-440":45975,"Skein1024-448":45976,"Skein1024-456":45977,"Skein1024-464":45978,"Skein1024-472":45979,"Skein1024-480":45980,"Skein1024-488":45981,"Skein1024-496":45982,"Skein1024-504":45983,"Skein1024-512":45984,"Skein1024-520":45985,"Skein1024-528":45986,"Skein1024-536":45987,"Skein1024-544":45988,"Skein1024-552":45989,"Skein1024-560":45990,"Skein1024-568":45991,"Skein1024-576":45992,"Skein1024-584":45993,"Skein1024-592":45994,"Skein1024-600":45995,"Skein1024-608":45996,"Skein1024-616":45997,"Skein1024-624":45998,"Skein1024-632":45999,"Skein1024-640":46e3,"Skein1024-648":46001,"Skein1024-656":46002,"Skein1024-664":46003,"Skein1024-672":46004,"Skein1024-680":46005,"Skein1024-688":46006,"Skein1024-696":46007,"Skein1024-704":46008,"Skein1024-712":46009,"Skein1024-720":46010,"Skein1024-728":46011,"Skein1024-736":46012,"Skein1024-744":46013,"Skein1024-752":46014,"Skein1024-760":46015,"Skein1024-768":46016,"Skein1024-776":46017,"Skein1024-784":46018,"Skein1024-792":46019,"Skein1024-800":46020,"Skein1024-808":46021,"Skein1024-816":46022,"Skein1024-824":46023,"Skein1024-832":46024,"Skein1024-840":46025,"Skein1024-848":46026,"Skein1024-856":46027,"Skein1024-864":46028,"Skein1024-872":46029,"Skein1024-880":46030,"Skein1024-888":46031,"Skein1024-896":46032,"Skein1024-904":46033,"Skein1024-912":46034,"Skein1024-920":46035,"Skein1024-928":46036,"Skein1024-936":46037,"Skein1024-944":46038,"Skein1024-952":46039,"Skein1024-960":46040,"Skein1024-968":46041,"Skein1024-976":46042,"Skein1024-984":46043,"Skein1024-992":46044,"Skein1024-1000":46045,"Skein1024-1008":46046,"Skein1024-1016":46047,"Skein1024-1024":46048});l.codes=Object.freeze({0:"identity",17:"sha1",18:"sha2-256",19:"sha2-512",86:"dbl-sha2-256",23:"sha3-224",22:"sha3-256",21:"sha3-384",20:"sha3-512",24:"shake-128",25:"shake-256",26:"keccak-224",27:"keccak-256",28:"keccak-384",29:"keccak-512",34:"murmur3-128",35:"murmur3-32",212:"md4",213:"md5",45569:"blake2b-8",45570:"blake2b-16",45571:"blake2b-24",45572:"blake2b-32",45573:"blake2b-40",45574:"blake2b-48",45575:"blake2b-56",45576:"blake2b-64",45577:"blake2b-72",45578:"blake2b-80",45579:"blake2b-88",45580:"blake2b-96",45581:"blake2b-104",45582:"blake2b-112",45583:"blake2b-120",45584:"blake2b-128",45585:"blake2b-136",45586:"blake2b-144",45587:"blake2b-152",45588:"blake2b-160",45589:"blake2b-168",45590:"blake2b-176",45591:"blake2b-184",45592:"blake2b-192",45593:"blake2b-200",45594:"blake2b-208",45595:"blake2b-216",45596:"blake2b-224",45597:"blake2b-232",45598:"blake2b-240",45599:"blake2b-248",45600:"blake2b-256",45601:"blake2b-264",45602:"blake2b-272",45603:"blake2b-280",45604:"blake2b-288",45605:"blake2b-296",45606:"blake2b-304",45607:"blake2b-312",45608:"blake2b-320",45609:"blake2b-328",45610:"blake2b-336",45611:"blake2b-344",45612:"blake2b-352",45613:"blake2b-360",45614:"blake2b-368",45615:"blake2b-376",45616:"blake2b-384",45617:"blake2b-392",45618:"blake2b-400",45619:"blake2b-408",45620:"blake2b-416",45621:"blake2b-424",45622:"blake2b-432",45623:"blake2b-440",45624:"blake2b-448",45625:"blake2b-456",45626:"blake2b-464",45627:"blake2b-472",45628:"blake2b-480",45629:"blake2b-488",45630:"blake2b-496",45631:"blake2b-504",45632:"blake2b-512",45633:"blake2s-8",45634:"blake2s-16",45635:"blake2s-24",45636:"blake2s-32",45637:"blake2s-40",45638:"blake2s-48",45639:"blake2s-56",45640:"blake2s-64",45641:"blake2s-72",45642:"blake2s-80",45643:"blake2s-88",45644:"blake2s-96",45645:"blake2s-104",45646:"blake2s-112",45647:"blake2s-120",45648:"blake2s-128",45649:"blake2s-136",45650:"blake2s-144",45651:"blake2s-152",45652:"blake2s-160",45653:"blake2s-168",45654:"blake2s-176",45655:"blake2s-184",45656:"blake2s-192",45657:"blake2s-200",45658:"blake2s-208",45659:"blake2s-216",45660:"blake2s-224",45661:"blake2s-232",45662:"blake2s-240",45663:"blake2s-248",45664:"blake2s-256",45825:"Skein256-8",45826:"Skein256-16",45827:"Skein256-24",45828:"Skein256-32",45829:"Skein256-40",45830:"Skein256-48",45831:"Skein256-56",45832:"Skein256-64",45833:"Skein256-72",45834:"Skein256-80",45835:"Skein256-88",45836:"Skein256-96",45837:"Skein256-104",45838:"Skein256-112",45839:"Skein256-120",45840:"Skein256-128",45841:"Skein256-136",45842:"Skein256-144",45843:"Skein256-152",45844:"Skein256-160",45845:"Skein256-168",45846:"Skein256-176",45847:"Skein256-184",45848:"Skein256-192",45849:"Skein256-200",45850:"Skein256-208",45851:"Skein256-216",45852:"Skein256-224",45853:"Skein256-232",45854:"Skein256-240",45855:"Skein256-248",45856:"Skein256-256",45857:"Skein512-8",45858:"Skein512-16",45859:"Skein512-24",45860:"Skein512-32",45861:"Skein512-40",45862:"Skein512-48",45863:"Skein512-56",45864:"Skein512-64",45865:"Skein512-72",45866:"Skein512-80",45867:"Skein512-88",45868:"Skein512-96",45869:"Skein512-104",45870:"Skein512-112",45871:"Skein512-120",45872:"Skein512-128",45873:"Skein512-136",45874:"Skein512-144",45875:"Skein512-152",45876:"Skein512-160",45877:"Skein512-168",45878:"Skein512-176",45879:"Skein512-184",45880:"Skein512-192",45881:"Skein512-200",45882:"Skein512-208",45883:"Skein512-216",45884:"Skein512-224",45885:"Skein512-232",45886:"Skein512-240",45887:"Skein512-248",45888:"Skein512-256",45889:"Skein512-264",45890:"Skein512-272",45891:"Skein512-280",45892:"Skein512-288",45893:"Skein512-296",45894:"Skein512-304",45895:"Skein512-312",45896:"Skein512-320",45897:"Skein512-328",45898:"Skein512-336",45899:"Skein512-344",45900:"Skein512-352",45901:"Skein512-360",45902:"Skein512-368",45903:"Skein512-376",45904:"Skein512-384",45905:"Skein512-392",45906:"Skein512-400",45907:"Skein512-408",45908:"Skein512-416",45909:"Skein512-424",45910:"Skein512-432",45911:"Skein512-440",45912:"Skein512-448",45913:"Skein512-456",45914:"Skein512-464",45915:"Skein512-472",45916:"Skein512-480",45917:"Skein512-488",45918:"Skein512-496",45919:"Skein512-504",45920:"Skein512-512",45921:"Skein1024-8",45922:"Skein1024-16",45923:"Skein1024-24",45924:"Skein1024-32",45925:"Skein1024-40",45926:"Skein1024-48",45927:"Skein1024-56",45928:"Skein1024-64",45929:"Skein1024-72",45930:"Skein1024-80",45931:"Skein1024-88",45932:"Skein1024-96",45933:"Skein1024-104",45934:"Skein1024-112",45935:"Skein1024-120",45936:"Skein1024-128",45937:"Skein1024-136",45938:"Skein1024-144",45939:"Skein1024-152",45940:"Skein1024-160",45941:"Skein1024-168",45942:"Skein1024-176",45943:"Skein1024-184",45944:"Skein1024-192",45945:"Skein1024-200",45946:"Skein1024-208",45947:"Skein1024-216",45948:"Skein1024-224",45949:"Skein1024-232",45950:"Skein1024-240",45951:"Skein1024-248",45952:"Skein1024-256",45953:"Skein1024-264",45954:"Skein1024-272",45955:"Skein1024-280",45956:"Skein1024-288",45957:"Skein1024-296",45958:"Skein1024-304",45959:"Skein1024-312",45960:"Skein1024-320",45961:"Skein1024-328",45962:"Skein1024-336",45963:"Skein1024-344",45964:"Skein1024-352",45965:"Skein1024-360",45966:"Skein1024-368",45967:"Skein1024-376",45968:"Skein1024-384",45969:"Skein1024-392",45970:"Skein1024-400",45971:"Skein1024-408",45972:"Skein1024-416",45973:"Skein1024-424",45974:"Skein1024-432",45975:"Skein1024-440",45976:"Skein1024-448",45977:"Skein1024-456",45978:"Skein1024-464",45979:"Skein1024-472",45980:"Skein1024-480",45981:"Skein1024-488",45982:"Skein1024-496",45983:"Skein1024-504",45984:"Skein1024-512",45985:"Skein1024-520",45986:"Skein1024-528",45987:"Skein1024-536",45988:"Skein1024-544",45989:"Skein1024-552",45990:"Skein1024-560",45991:"Skein1024-568",45992:"Skein1024-576",45993:"Skein1024-584",45994:"Skein1024-592",45995:"Skein1024-600",45996:"Skein1024-608",45997:"Skein1024-616",45998:"Skein1024-624",45999:"Skein1024-632",46e3:"Skein1024-640",46001:"Skein1024-648",46002:"Skein1024-656",46003:"Skein1024-664",46004:"Skein1024-672",46005:"Skein1024-680",46006:"Skein1024-688",46007:"Skein1024-696",46008:"Skein1024-704",46009:"Skein1024-712",46010:"Skein1024-720",46011:"Skein1024-728",46012:"Skein1024-736",46013:"Skein1024-744",46014:"Skein1024-752",46015:"Skein1024-760",46016:"Skein1024-768",46017:"Skein1024-776",46018:"Skein1024-784",46019:"Skein1024-792",46020:"Skein1024-800",46021:"Skein1024-808",46022:"Skein1024-816",46023:"Skein1024-824",46024:"Skein1024-832",46025:"Skein1024-840",46026:"Skein1024-848",46027:"Skein1024-856",46028:"Skein1024-864",46029:"Skein1024-872",46030:"Skein1024-880",46031:"Skein1024-888",46032:"Skein1024-896",46033:"Skein1024-904",46034:"Skein1024-912",46035:"Skein1024-920",46036:"Skein1024-928",46037:"Skein1024-936",46038:"Skein1024-944",46039:"Skein1024-952",46040:"Skein1024-960",46041:"Skein1024-968",46042:"Skein1024-976",46043:"Skein1024-984",46044:"Skein1024-992",46045:"Skein1024-1000",46046:"Skein1024-1008",46047:"Skein1024-1016",46048:"Skein1024-1024"});l.defaultLengths=Object.freeze({17:20,18:32,19:64,86:32,23:28,22:32,21:48,20:64,24:32,25:64,26:28,27:32,28:48,29:64,34:32,45569:1,45570:2,45571:3,45572:4,45573:5,45574:6,45575:7,45576:8,45577:9,45578:10,45579:11,45580:12,45581:13,45582:14,45583:15,45584:16,45585:17,45586:18,45587:19,45588:20,45589:21,45590:22,45591:23,45592:24,45593:25,45594:26,45595:27,45596:28,45597:29,45598:30,45599:31,45600:32,45601:33,45602:34,45603:35,45604:36,45605:37,45606:38,45607:39,45608:40,45609:41,45610:42,45611:43,45612:44,45613:45,45614:46,45615:47,45616:48,45617:49,45618:50,45619:51,45620:52,45621:53,45622:54,45623:55,45624:56,45625:57,45626:58,45627:59,45628:60,45629:61,45630:62,45631:63,45632:64,45633:1,45634:2,45635:3,45636:4,45637:5,45638:6,45639:7,45640:8,45641:9,45642:10,45643:11,45644:12,45645:13,45646:14,45647:15,45648:16,45649:17,45650:18,45651:19,45652:20,45653:21,45654:22,45655:23,45656:24,45657:25,45658:26,45659:27,45660:28,45661:29,45662:30,45663:31,45664:32,45825:1,45826:2,45827:3,45828:4,45829:5,45830:6,45831:7,45832:8,45833:9,45834:10,45835:11,45836:12,45837:13,45838:14,45839:15,45840:16,45841:17,45842:18,45843:19,45844:20,45845:21,45846:22,45847:23,45848:24,45849:25,45850:26,45851:27,45852:28,45853:29,45854:30,45855:31,45856:32,45857:1,45858:2,45859:3,45860:4,45861:5,45862:6,45863:7,45864:8,45865:9,45866:10,45867:11,45868:12,45869:13,45870:14,45871:15,45872:16,45873:17,45874:18,45875:19,45876:20,45877:21,45878:22,45879:23,45880:24,45881:25,45882:26,45883:27,45884:28,45885:29,45886:30,45887:31,45888:32,45889:33,45890:34,45891:35,45892:36,45893:37,45894:38,45895:39,45896:40,45897:41,45898:42,45899:43,45900:44,45901:45,45902:46,45903:47,45904:48,45905:49,45906:50,45907:51,45908:52,45909:53,45910:54,45911:55,45912:56,45913:57,45914:58,45915:59,45916:60,45917:61,45918:62,45919:63,45920:64,45921:1,45922:2,45923:3,45924:4,45925:5,45926:6,45927:7,45928:8,45929:9,45930:10,45931:11,45932:12,45933:13,45934:14,45935:15,45936:16,45937:17,45938:18,45939:19,45940:20,45941:21,45942:22,45943:23,45944:24,45945:25,45946:26,45947:27,45948:28,45949:29,45950:30,45951:31,45952:32,45953:33,45954:34,45955:35,45956:36,45957:37,45958:38,45959:39,45960:40,45961:41,45962:42,45963:43,45964:44,45965:45,45966:46,45967:47,45968:48,45969:49,45970:50,45971:51,45972:52,45973:53,45974:54,45975:55,45976:56,45977:57,45978:58,45979:59,45980:60,45981:61,45982:62,45983:63,45984:64,45985:65,45986:66,45987:67,45988:68,45989:69,45990:70,45991:71,45992:72,45993:73,45994:74,45995:75,45996:76,45997:77,45998:78,45999:79,46e3:80,46001:81,46002:82,46003:83,46004:84,46005:85,46006:86,46007:87,46008:88,46009:89,46010:90,46011:91,46012:92,46013:93,46014:94,46015:95,46016:96,46017:97,46018:98,46019:99,46020:100,46021:101,46022:102,46023:103,46024:104,46025:105,46026:106,46027:107,46028:108,46029:109,46030:110,46031:111,46032:112,46033:113,46034:114,46035:115,46036:116,46037:117,46038:118,46039:119,46040:120,46041:121,46042:122,46043:123,46044:124,46045:125,46046:126,46047:127,46048:128});(function(x){const{Buffer:i}=s,c=r.exports,a=t,S=l;x.names=S.names,x.codes=S.codes,x.defaultLengths=S.defaultLengths,x.toHexString=function(b){if(!i.isBuffer(b))throw new Error("must be passed a buffer");return b.toString("hex")},x.fromHexString=function(b){return i.from(b,"hex")},x.toB58String=function(b){if(!i.isBuffer(b))throw new Error("must be passed a buffer");return c.encode("base58btc",b).toString().slice(1)},x.fromB58String=function(b){let e=b;return i.isBuffer(b)&&(e=b.toString()),c.decode("z"+e)},x.decode=function(b){if(!i.isBuffer(b))throw new Error("multihash must be a Buffer");if(b.length<2)throw new Error("multihash too short. must be > 2 bytes.");const e=a.decode(b);if(!x.isValidCode(e))throw new Error(`multihash unknown function code: 0x${e.toString(16)}`);b=b.slice(a.decode.bytes);const n=a.decode(b);if(n<0)throw new Error(`multihash invalid length: ${n}`);if(b=b.slice(a.decode.bytes),b.length!==n)throw new Error(`multihash length inconsistent: 0x${b.toString("hex")}`);return{code:e,name:S.codes[e],length:n,digest:b}},x.encode=function(b,e,n){if(!b||e===void 0)throw new Error("multihash encode requires at least two args: digest, code");const f=x.coerceCode(e);if(!i.isBuffer(b))throw new Error("digest should be a Buffer");if(n==null&&(n=b.length),n&&b.length!==n)throw new Error("digest length should be equal to specified length.");return i.concat([i.from(a.encode(f)),i.from(a.encode(n)),b])},x.coerceCode=function(b){let e=b;if(typeof b=="string"){if(S.names[b]===void 0)throw new Error(`Unrecognized hash function named: ${b}`);e=S.names[b]}if(typeof e!="number")throw new Error(`Hash function code should be a number. Got: ${e}`);if(S.codes[e]===void 0&&!x.isAppCode(e))throw new Error(`Unrecognized function code: ${e}`);return e},x.isAppCode=function(b){return b>0&&b<16},x.isValidCode=function(b){return!!(x.isAppCode(b)||S.codes[b])};function d(k){x.decode(k)}x.validate=d,x.prefix=function(b){return d(b),b.slice(0,2)}})(o);export{o as s};
