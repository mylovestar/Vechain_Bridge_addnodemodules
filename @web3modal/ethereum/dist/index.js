import*as a from"@wagmi/core";import{chain as I,InjectedConnector as j,configureChains as E,createClient as B}from"@wagmi/core";import{AccountCtrl as p,CoreHelpers as A}from"@web3modal/core";import{publicProvider as P}from"@wagmi/core/providers/public";import{Buffer as $}from"buffer";import{CoinbaseWalletConnector as M}from"@wagmi/core/connectors/coinbaseWallet";import{MetaMaskConnector as N}from"@wagmi/core/connectors/metaMask";import{WalletConnectConnector as x}from"@wagmi/core/connectors/walletConnect";import{alchemyProvider as D}from"@wagmi/core/providers/alchemy";import{infuraProvider as F}from"@wagmi/core/providers/infura";import{jsonRpcProvider as O}from"@wagmi/core/providers/jsonRpc";var U=Object.defineProperty,W=Object.defineProperties,R=Object.getOwnPropertyDescriptors,w=Object.getOwnPropertySymbols,q=Object.prototype.hasOwnProperty,L=Object.prototype.propertyIsEnumerable,y=(e,n,t)=>n in e?U(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,V=(e,n)=>{for(var t in n||(n={}))q.call(n,t)&&y(e,t,n[t]);if(w)for(var t of w(n))L.call(n,t)&&y(e,t,n[t]);return e},X=(e,n)=>W(e,R(n));const v="eip155";function h(e){if(typeof e=="string"&&e.includes(":"))return Number(e.split(":")[1]);throw new Error("Invalid chainId, should be formated as namespace:id")}function o(e){return X(V({},e),{chainId:h(e.chainId)})}const z={id:43114,name:"Avalanche C-Chain",network:"avalanche",nativeCurrency:{decimals:18,name:"Avalanche",symbol:"AVAX"},rpcUrls:{default:"https://api.avax.network/ext/bc/C/rpc"},blockExplorers:{default:{name:"SnowTrace",url:"https://snowtrace.io"}},testnet:!1},H={id:43113,name:"Avalanche FUJI C-Chain",network:"avalancheFuji",nativeCurrency:{decimals:18,name:"Avalanche",symbol:"AVAX"},rpcUrls:{default:"https://api.avax-test.network/ext/bc/C/rpc"},blockExplorers:{default:{name:"SnowTrace Testnet",url:"https://testnet.snowtrace.io"}},testnet:!0},J={id:56,name:"Binance Smart Chain",network:"binanceSmartChain",nativeCurrency:{decimals:18,name:"Binance",symbol:"BNB"},rpcUrls:{default:"https://bsc-dataseed.binance.org"},blockExplorers:{default:{name:"BSC Scan",url:"https://bscscan.com"}},testnet:!1},G={id:97,name:"Binance Smart Chain Testnet",network:"binanceSmartChainTestnet",nativeCurrency:{decimals:18,name:"Binance",symbol:"BNB"},rpcUrls:{default:"https://data-seed-prebsc-1-s1.binance.org:8545"},blockExplorers:{default:{name:"BSC Scan testnet",url:"https://testnet.bscscan.com"}},testnet:!0},K={id:250,name:"Fantom Opera",network:"fantomOpera",nativeCurrency:{decimals:18,name:"Fantom",symbol:"FTM"},rpcUrls:{default:"https://rpc.ankr.com/fantom"},blockExplorers:{default:{name:"FTM Scan",url:"https://ftmscan.com"}},testnet:!1},Q={id:4002,name:"Fantom Testnet",network:"fantomTestnet",nativeCurrency:{decimals:18,name:"Fantom",symbol:"FTM"},rpcUrls:{default:"https://rpc.testnet.fantom.network"},blockExplorers:{default:{name:"FTM Scan Testnet",url:"https://testnet.ftmscan.com"}},testnet:!0};var Y=Object.defineProperty,Z=Object.defineProperties,_=Object.getOwnPropertyDescriptors,C=Object.getOwnPropertySymbols,ee=Object.prototype.hasOwnProperty,ne=Object.prototype.propertyIsEnumerable,b=(e,n,t)=>n in e?Y(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,te=(e,n)=>{for(var t in n||(n={}))ee.call(n,t)&&b(e,t,n[t]);if(C)for(var t of C(n))ne.call(n,t)&&b(e,t,n[t]);return e},ae=(e,n)=>Z(e,_(n));function re({projectId:e}){return O({rpc:n=>({http:`https://rpc.walletconnect.com/v1/?chainId=${v}:${n.id}&projectId=${e}`})})}const Te={alchemyProvider:D,infuraProvider:F,jsonRpcProvider:O,publicProvider:P,walletConnectProvider:re},ke=ae(te({},I),{avalanche:z,fantom:K,binanceSmartChain:J,avalancheFuji:H,fantomTestnet:Q,binanceSmartChainTestnet:G});function oe({appName:e,chains:n}){return[new x({chains:n,options:{qrcode:!1}}),new j({chains:n,options:{shimDisconnect:!0}}),new M({chains:n,options:{appName:e,headlessMode:!0}}),new N({chains:n})]}typeof window<"u"&&!window.Buffer&&(window.Buffer=$);let S;function u(){return S}function ce(e){e.account&&p.setAddress(e.account),e.chain&&p.setChain(`${v}:${e.chain.id}`,!e.chain.unsupported)}function ie(e){console.log(e)}function se(e){console.log(e)}function le(){var e,n,t,r,c,s;const l=(n=(e=u())==null?void 0:e.data)==null?void 0:n.account,i=(r=(t=u())==null?void 0:t.data)==null?void 0:r.chain,d=(c=u())==null?void 0:c.connector,f=(s=u())==null?void 0:s.provider;l&&i&&d&&f&&(d.on("change",ce),d.on("message",ie),d.on("error",se),p.setAccount({address:l,chainId:`${v}:${i.id}`,chainSupported:!i.unsupported,connector:d.id}))}function de(){var e,n;(n=(e=u())==null?void 0:e.connector)==null||n.removeAllListeners(),p.resetAccount()}function ue(e,n){if(e.status!==n.status){const{status:t}=e;t==="connected"&&le(),t==="disconnected"&&de()}}function pe(e){var n,t,r,c;const s=(n=e.chains)!=null?n:[I.mainnet],l=(t=e.providers)!=null?t:[P()],i=(r=e.autoConnect)!=null?r:!0,{chains:d,provider:f}=E(s,l);S=B({autoConnect:i,connectors:oe({chains:d,appName:e.appName}),provider:f}),(c=u())==null||c.subscribe(ue)}var me=Object.defineProperty,m=Object.getOwnPropertySymbols,T=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable,g=(e,n,t)=>n in e?me(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,fe=(e,n)=>{for(var t in n||(n={}))T.call(n,t)&&g(e,t,n[t]);if(m)for(var t of m(n))k.call(n,t)&&g(e,t,n[t]);return e},he=(e,n)=>{var t={};for(var r in e)T.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&m)for(var r of m(e))n.indexOf(r)<0&&k.call(e,r)&&(t[r]=e[r]);return t};const je={createClient(e){return pe(e),this},getDefaultConnectorChainId(e){return e.chains[0].id},getConnectorById(e){var n;const t=(n=u())==null?void 0:n.connectors.find(r=>r.id===e);if(!t)throw new Error(`Missing ${e} connector`);return t},async disconnect(){await a.disconnect(),A.removeWalletConnectDeepLink()},async connectWalletConnect(e){const n=this.getConnectorById("walletConnect"),t=this.getDefaultConnectorChainId(n);async function r(){return new Promise(s=>{n.once("message",async({type:l})=>{if(l==="connecting"){const i=await n.getProvider();e(i.connector.uri),s()}})})}const[c]=await Promise.all([a.connect({connector:n,chainId:t}),r()]);return c},async connectLinking(e){const n=this.getConnectorById("walletConnect"),t=this.getDefaultConnectorChainId(n);async function r(){return new Promise(s=>{n.once("message",async({type:l})=>{if(l==="connecting"){const i=(await n.getProvider()).connector.uri;e(encodeURIComponent(i)),s()}})})}const[c]=await Promise.all([a.connect({connector:n,chainId:t}),r()]);return c},async connectCoinbaseMobile(e){const n=this.getConnectorById("coinbaseWallet"),t=this.getDefaultConnectorChainId(n);async function r(){return new Promise(s=>{n.once("message",async({type:l})=>{if(l==="connecting"){const i=await n.getProvider();e?.(i.qrUrl),s()}})})}const[c]=await Promise.all([a.connect({connector:n,chainId:t}),r()]);return c},async connectCoinbaseExtension(){const e=this.getConnectorById("coinbaseWallet"),n=this.getDefaultConnectorChainId(e);return await a.connect({connector:e,chainId:n})},async connectMetaMask(){const e=this.getConnectorById("metaMask"),n=this.getDefaultConnectorChainId(e);return await a.connect({connector:e,chainId:n})},async connectInjected(){const e=this.getConnectorById("injected"),n=this.getDefaultConnectorChainId(e);return await a.connect({connector:e,chainId:n})},async switchChain(e){return`eip155:${(await a.switchNetwork({chainId:h(e)})).id}`},async signTypedData({value:e,domain:n,types:t}){return await a.signTypedData({value:e,domain:n,types:t})},async signMessage(e){return await a.signMessage({message:e})},async fetchBalance(e){return(await a.fetchBalance(o(e))).formatted},async fetchSigner(){return await a.fetchSigner()},getNetwork(){return a.getNetwork()},getContract({addressOrName:e,contractInterface:n,signerOrProvider:t}){return a.getContract({addressOrName:e,contractInterface:n,signerOrProvider:t})},async getToken({address:e,chainId:n,formatUnits:t}){return await a.fetchToken({address:e,chainId:h(n),formatUnits:t})},async readContract(e){return await a.readContract(o(e))},async writeContract(e){return await a.writeContract(o(fe({mode:"prepared"},e)))},async prepareWriteContract(e){return await a.prepareWriteContract(o(e))},watchReadContract(e){const n=e,{callback:t}=n,r=he(n,["callback"]);a.watchReadContract(o(r),t)},async fetchEnsAddress(e){const n=await a.fetchEnsAddress(o(e));return n?.toString()},async fetchEnsAvatar(e){const n=await a.fetchEnsAvatar(o(e));return n?.toString()},async fetchEnsName(e){const n=await a.fetchEnsName(o(e));return n?.toString()},async fetchEnsResolver(e){return await a.fetchEnsResolver(o(e))},async fetchTransaction(e){return await a.fetchTransaction(o(e))},async prepareSendTransaction(e){return await a.prepareSendTransaction(o(e))},async sendTransaction(e){const n=await a.prepareSendTransaction(o(e));return await a.sendTransaction({mode:"prepared",request:n.request})},async waitForTransaction(e){return await a.waitForTransaction(o(e))}};export{je as Web3ModalEthereum,ke as chains,Te as providers};
//# sourceMappingURL=index.js.map