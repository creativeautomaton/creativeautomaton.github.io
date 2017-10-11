var h='												\
// Copyright 2011 Google Inc.									\
//												\
// This code is licensed under the same terms as WebM:						\
//  Software License Agreement:  http://www.webmproject.org/license/software/			\
//  Additional IP Rights Grant:  http://www.webmproject.org/license/additional/			\
// -----------------------------------------------------------------------------		\
//												\
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND 		\
// ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED 		\
// WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. 		\
// IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, 		\
// INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, 		\
// BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, 		\
// DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY 		\
// OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING 			\
// NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, 		\
// EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.						\
//												\
// -----------------------------------------------------------------------------		\
//												\
// Copyright 2011 Dominik Homberger								\
// WebPJS 0.0.2 & Libwebp JavaScript   / libwebpjs - the libwebp implementation in JavaScript	\
// WebPJS 0.0.2 & Libwebp ActionScript / libwebpas - the libwebp implementation in ActionScript	\
// with alpha channel support (WEBP_EXPERIMENTAL_FEATURES)					\
//												\
// Author: Dominik Homberger (dominik.homberger@googlemail.com)					\
//												\
// Libwebp Decoder Library libwebpjs-0.1.3-smaller.min.js					\
// WebPJS CORE 0.0.2';
eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('1b 7A=0,9k=0,1j=0,9l=0,7B=0;1b 5Y=7A;1b 1o=7A;1b 7C=9k;1b 5b=9k;1b 9m=1j;1b 2i=1j;1b 9n=9l;1b c8=9l;1b ha=0;1b 5Z=0;1b hb=0;1b hc=c8;1f 2z(a){}1f 1w(a){1g 9o.5c(9o.hd(a))}1f c9(a){1b b=1c 1d;1b c=a.1p;1h(i=0;i<c;++i)b.1t(a.6a(i));1g b}1f he(a,b){1b c=1c 1d;1b i;1h(i=0;i<b;++i)c[i]="0";d0=a.d1(2)+""+c.9p("");1g 4v(d0,2)}1f hf(a,b,c){1b i;1h(i=3;i>=0;--i)a[b+(3-i)]=c>>8*i&1a}1f hg(a,b){1g a[b+0]<<24|a[b+1]<<16|a[b+2]<<8|a[b+3]}1f hh(a){1b i,9q="";1h(i=3;i>=0;--i)9q+=" "+(a>>8*i&1a);2z(9q)}1f 7D(a){1g"hi"+a.d1(16)}1f 1G(a,b,c,d,e){if(5d a!="d2")1h(i=0;i<e;++i)a[b+i]=c[d+i];1l{if(b>0)2z("d2 hj is hk 0");a=c.6b(d,e);1g a}}1f hl(a,b,c,d,e){}1f hm(b,c,d,e,f){1h(i=0;i<f;++i){1b g=b[c+i].1p;1h(1b a=0;a<g;++a)b[c+i][a]=d[e+i][a]}}1f 6c(a){1b b=1c 1d;1b c=a.1p;1h(i=0;i<c;++i)b.1t(a[i]);1g b}1f 9r(a,b){1b c=1c 1d;c.1t(1w(a));1h(i=0;i<b;++i)c.1t(1w(a));c.1t(0);1g c}1f 4w(a,b){1b c=1c 1d;1h(i=0;i<b;++i)c.1t(a);c.1t(0);1g c}1f hn(a,b){1b c=1c 1d;c.1t(1w(a));1h(i=0;i<b;++i)c.1t(1w(a));c.1t(0);1g c}1f ho(a,b){1b c=1c 1d;1h(i=0;i<b;++i)c.1t(a);c.1t(0);1g c}1f 5e(a,b,c,d){1h(i=0;i<d;++i)a[b+i]=c}1f 9s(a,b){1b c=1c 1d;1h(i=0;i<a;++i)c.1t(b);c.1t(0);1g c}1f hp(a,b){1b c=1c 1d;1h(i=0;i<a;++i)c.1t(" ");1g c.9p("")}1f 1S(a){1g 1}1f 6d(a,b,s,c){1b w="";1h(i=0;i<c;++i)w+=6e.6f(a[b+i]);if(s==w)1g 0;1l 1g 1}1f 1v(a,b){1b c=1c 1d;1h(i=0;i<a;++i)c.1t(b);1g c}1f 9t(a,b){1b c=1c 1d;1h(i=0;i<a;++i)c.1t(1w(b));1g c}1f 9u(b,c){1b d,hq=1c 1d;1h(a=b.1p-1;a>=0;--a)c=1w(1v(b[a],c));1g c}1f 1K(a){if(!a)9v 1c hr("1K :P");}1f 9w(){1b ba=1f ba(){1b bb=1f(){1b D=4x;1b E=0;1b F=1;1b G=2;1b H=9;1b I=6;1b J=4x;1b K=64;1b L;1b M;1b N=1k;1b O;1b P,hs;1b Q;1b R;1b S;1b T;1b U;1b V;1b W,7E;1b X,3H;1b Y;1b Z;1b bc=1c 1d(0,1,3,7,15,31,63,1H,1a,ht,hu,hv,hw,hx,6g,hy,d3);1b bd=1c 1d(3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,3I,3J,3b,3c,3K,hz,0,0);1b be=1c 1d(0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,99,99);1b bf=1c 1d(1,2,3,4,5,7,9,13,17,25,33,49,65,97,2I,3L,6h,hA,hB,hC,hD,hE,hF,hG,hH,hI,hJ,hK,hL,hM);1b bg=1c 1d(0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13);1b bh=1c 1d(16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15);1b bi=1f(){1n.9x=1k;1n.6i=1k};1b bj=1f(){1n.e=0;1n.b=0;1n.n=0;1n.t=1k};1b bk=1f(b,n,s,d,e,l){1n.3M=16;1n.d4=7F;1n.1F=0;1n.3d=1k;1n.m=0;1b a;1b c=1c 1d(1n.3M+1);1b m;1b f;1b g;1b h;1b i;1b j;1b k;1b t=1c 1d(1n.3M+1);1b p;1b A;1b q;1b r=1c bj;1b u=1c 1d(1n.3M);1b v=1c 1d(1n.d4);1b w;1b x=1c 1d(1n.3M+1);1b B;1b y;1b z;1b o;1b C;C=1n.3d=1k;1h(i=0;i<c.1p;i++)c[i]=0;1h(i=0;i<t.1p;i++)t[i]=0;1h(i=0;i<u.1p;i++)u[i]=1k;1h(i=0;i<v.1p;i++)v[i]=0;1h(i=0;i<x.1p;i++)x[i]=0;m=n>1T?b[1T]:1n.3M;p=b;A=0;i=n;do{c[p[A]]++;A++}1y(--i>0);if(c[0]==n){1n.3d=1k;1n.m=0;1n.1F=0;1g}1h(j=1;j<=1n.3M;j++)if(c[j]!=0)2p;k=j;if(l<j)l=j;1h(i=1n.3M;i!=0;i--)if(c[i]!=0)2p;g=i;if(l>i)l=i;1h(y=1<<j;j<i;j++,y<<=1)if((y-=c[j])<0){1n.1F=2;1n.m=l;1g}if((y-=c[i])<0){1n.1F=2;1n.m=l;1g}c[i]+=y;x[1]=j=0;p=c;A=1;B=2;1y(--i>0)x[B++]=j+=p[A++];p=b;A=0;i=0;do if((j=p[A++])!=0)v[x[j]++]=i;1y(++i<n);n=x[g];x[0]=i=0;p=v;A=0;h=-1;w=t[0]=0;q=1k;z=0;1h(;k<=g;k++){a=c[k];1y(a-->0){1y(k>w+t[1+h]){w+=t[1+h];h++;z=(z=g-w)>l?l:z;if((f=1<<(j=k-w))>a+1){f-=a+1;B=k;1y(++j<z){if((f<<=1)<=c[++B])2p;f-=c[B]}}if(w+j>m&&w<m)j=m-w;z=1<<j;t[1+h]=j;q=1c 1d(z);1h(o=0;o<z;o++)q[o]=1c bj;if(C==1k)C=1n.3d=1c bi;1l C=C.9x=1c bi;C.9x=1k;C.6i=q;u[h]=q;if(h>0){x[h]=i;r.b=t[h];r.e=16+j;r.t=q;j=(i&(1<<w)-1)>>w-t[h];u[h-1][j].e=r.e;u[h-1][j].b=r.b;u[h-1][j].n=r.n;u[h-1][j].t=r.t}}r.b=k-w;if(A>=n)r.e=99;1l if(p[A]<s){r.e=p[A]<1T?16:15;r.n=p[A++]}1l{r.e=e[p[A]-s];r.n=d[p[A++]-s]}f=1<<k-w;1h(j=i>>w;j<z;j+=f){q[j].e=r.e;q[j].b=r.b;q[j].n=r.n;q[j].t=r.t}1h(j=1<<k-1;(i&j)!=0;j>>=1)i^=j;i^=j;1y((i&(1<<w)-1)!=x[h]){w-=t[h];h--}}}1n.m=t[1];1n.1F=y!=0&&g!=1?1:0};1b bl=1f(){if(Y.1p==Z)1g-1;1g Y[Z++]};1b bm=1f(n){1y(R<n){Q|=bl()<<R;R+=8}};1b bn=1f(n){1g Q&bc[n]};1b bo=1f(n){Q>>=n;R-=n};1b bp=1f(a,b,c){1b e;1b t;1b n;if(c==0)1g 0;n=0;1h(;;){bm(X);t=W.6i[bn(X)];e=t.e;1y(e>16){if(e==99)1g-1;bo(t.b);e-=16;bm(e);t=t.t[bn(e)];e=t.e}bo(t.b);if(e==16){M&=D-1;a[b+n++]=L[M++]=t.n;if(n==c)1g c;d5}if(e==15)2p;bm(e);U=t.n+bn(e);bo(e);bm(3H);t=7E.6i[bn(3H)];e=t.e;1y(e>16){if(e==99)1g-1;bo(t.b);e-=16;bm(e);t=t.t[bn(e)];e=t.e}bo(t.b);bm(e);V=M-t.n-bn(e);bo(e);1y(U>0&&n<c){U--;V&=D-1;M&=D-1;a[b+n++]=L[M++]=L[V++]}if(n==c)1g c}S=-1;1g n};1b bq=1f(a,b,c){1b n;n=R&7;bo(n);bm(16);n=bn(16);bo(16);bm(16);if(n!=(~Q&d3))1g-1;bo(16);U=n;n=0;1y(U>0&&n<c){U--;M&=D-1;bm(8);a[b+n++]=L[M++]=bn(8);bo(8)}if(U==0)S=-1;1g n};1b br=1f(a,b,c){if(N==1k){1b i;1b l=1c 1d(7F);1b h;1h(i=0;i<7G;i++)l[i]=8;1h(;i<1T;i++)l[i]=9;1h(;i<hN;i++)l[i]=7;1h(;i<7F;i++)l[i]=8;P=7;h=1c bk(l,7F,6h,bd,be,P);if(h.1F!=0){2z("d6 6j: "+h.1F);1g-1}N=h.3d;P=h.m;1h(i=0;i<30;i++)l[i]=5;1b d=5;h=1c bk(l,30,0,bf,bg,d);if(h.1F>1){N=1k;2z("d6 6j: "+h.1F);1g-1}O=h.3d;d=h.m}W=N;7E=O;X=P;3H=d;1g bp(a,b,c)};1b bs=1f(a,b,c){1b i;1b j;1b l;1b n;1b t;1b d;1b e;1b f;1b g=1c 1d(d7+30);1b h;1h(i=0;i<g.1p;i++)g[i]=0;bm(5);e=6h+bn(5);bo(5);bm(5);f=1+bn(5);bo(5);bm(4);d=4+bn(4);bo(4);if(e>d7||f>30)1g-1;1h(j=0;j<d;j++){bm(3);g[bh[j]]=bn(3);bo(3)}1h(;j<19;j++)g[bh[j]]=0;X=7;h=1c bk(g,19,19,1k,1k,X);if(h.1F!=0)1g-1;W=h.3d;X=h.m;n=e+f;i=l=0;1y(i<n){bm(X);t=W.6i[bn(X)];j=t.b;bo(j);j=t.n;if(j<16)g[i++]=l=j;1l if(j==16){bm(2);j=3+bn(2);bo(2);if(i+j>n)1g-1;1y(j-->0)g[i++]=l}1l if(j==17){bm(3);j=3+bn(3);bo(3);if(i+j>n)1g-1;1y(j-->0)g[i++]=0;l=0}1l{bm(7);j=11+bn(7);bo(7);if(i+j>n)1g-1;1y(j-->0)g[i++]=0;l=0}}X=H;h=1c bk(g,e,6h,bd,be,X);if(X==0)h.1F=1;if(h.1F!=0){if(h.1F==1);1g-1}W=h.3d;X=h.m;1h(i=0;i<f;i++)g[i]=g[i+e];3H=I;h=1c bk(g,f,0,bf,bg,3H);7E=h.3d;3H=h.m;if(3H==0&&e>6h)1g-1;if(h.1F==1);if(h.1F!=0)1g-1;1g bp(a,b,c)};1b bt=1f(){1b i;if(L==1k)L=1c 1d(2*D);M=0;Q=0;R=0;S=-1;T=4y;U=V=0;W=1k};1b bu=1f(a,b,c){1b n,i;n=0;1y(n<c){if(T&&S==-1)1g n;if(U>0){if(S!=E)1y(U>0&&n<c){U--;V&=D-1;M&=D-1;a[b+n++]=L[M++]=L[V++]}1l{1y(U>0&&n<c){U--;M&=D-1;bm(8);a[b+n++]=L[M++]=bn(8);bo(8)}if(U==0)S=-1}if(n==c)1g n}if(S==-1){if(T)2p;bm(1);if(bn(1)!=0)T=5f;bo(1);bm(2);S=bn(2);bo(2);W=1k;U=0}9y(S){4z 0:i=bq(a,b+n,c-n);2p;4z 1:if(W!=1k)i=bp(a,b+n,c-n);1l i=br(a,b+n,c-n);2p;4z 2:if(W!=1k)i=bp(a,b+n,c-n);1l i=bs(a,b+n,c-n);2p;hO:i=-1;2p}if(i==-1){if(T)1g 0;1g-1}n+=i}1g n};1b bv=1f(a){1b i,j;bt();Y=a;Z=0;1b b=[0];1b c=[];1y((i=bu(b,0,b.1p))>0)c.1t(b[0]);Y=1k;1g c};1g bv}();1b bw=1f(c){1b a=1,b=0;1b i;1b d=c.1p;1b e=9z;1h(i=0;i<d;i+=1){a=(a+c[i])%e;b=(b+a)%e}1g b<<16|a};1b bx=1f(a,b){1b i;1b c=bw(a);1b d=hP(a,b);a=d;a.hQ(6k,1);1h(i=0;i<4;++i)a.1t(c>>(3-i)*8&1a);1g a};1b by=1f(a){if(a.1p<6)9v"d8: 9A d9 6l";1b b=bb(a.6b(2,a.1p-4));if(a.1p>6&&b.1p===0)9v"d8: hR 9B dx hS 2A";1g b};1g{"dx":bb,"dy":by}}();1b bz=2;1b bA=0,9C=1,dz=2,9D=3,3e=4,6m=5,dA=6,4A=7,7H=8,7I=9;1n.9E={hT:0,9C:1,dz:2,9D:3,3e:4,6m:5,dA:6,4A:7,7H:8,7I:9};1b bB={3N:1o,5g:0,1Z:1j,5h:1j};1b bC={y:1o,u:1o,v:1o,a:1o,3f:1o,3g:1o,3h:1o,3O:1o,3P:1j,hU:1j,hV:1j,7J:1j,hW:1j,hX:1j,hY:1j,7K:1j};1b bD={2q:"9E",1r:1j,1q:1j,7L:1j,u:{2r:bB,dB:bC},6n:1k,7M:1o};1f 7N(a){1g dC(a,bz)}1b bE=0,7O=1,2f=2,1L=3,7P=4,9F=5,7Q=6,3Q=7;1n.6o={5i:0,7O:1,2f:2,1L:3,7P:4,9F:5,7Q:6,3Q:7};1b bF={1r:{1i:1j},1q:{1i:1j},dD:{1i:1j},hZ:1j,i0:1j,i1:1j,dE:1j};1n.dF=1f(a,b,c){1g dG(a,b,c,bz)};1b bG={6p:1j,dH:1j,5j:1j,2B:1j,2C:1j,dI:1j,dJ:1j,5k:1j,dK:1j,dL:1j,i2:1j,i3:1j,i4:1j};1n.dM={6l:1w(bF),1P:1w(bD),dN:1w(bG)};1n.dO=1f(a){1g dP(a,bz)};1b bH={1r:1j,1q:1j,3i:1j,2D:1j,2J:1j,y:1o,u:1o,v:1o,3f:0,3g:0,3h:0,3P:1j,5l:1j,6q:7B,7R:0,6r:0,7S:0,7T:1j,9G:2i,2A:1o,7U:0,6p:1j,5j:1j,2B:1j,6s:1j,2C:1j,4B:1j,5k:1j,dK:1j,dL:1j,a:1o,3O:0};1f dQ(a){1g dR(a,bz)}1b bI={1P:1w(bD),5m:1o,5n:1o,6t:1o,6u:0,6v:0,7V:0,dS:1j,7W:1w(bG),3j:7B,6w:"(dT)",6x:"(dT)"};1b bJ={7X:1o,7Y:1k,9H:1o,4C:1j,2K:2i,5o:2i,5p:1j};1f 1A(a){1g 2L(a,1)}1f dU(a){1K(a);if(a.7Y<a.9H){1K(a.7X);1g a.7X[a.7Y++]}a.4C=1;1g 1a}1f 9I(a,b){1b c=2i;1b d=b+1<<8;if(a.5p>0){a.5o|=dU(a)<<a.5p;a.5p-=8}c=(a.5o>=d)+0;if(c){a.2K-=b+1;a.5o-=d}1l a.2K=b;1g c}1f 9J(a){1b b=bK[a.2K];a.2K=bL[a.2K];a.5o<<=b;a.5p+=b}1f 1x(a,b){1b c=a.2K*b>>8;1b d=9I(a,c);if(a.2K<1H)9J(a);1g d}1f dV(a,v){1b b=a.2K>>1;1b c=9I(a,b);9J(a);1g c?-v:v}1f 7Z(a,b,c,d){1K(a);1K(b);1K(d);a.2K=1a-1;a.7X=b;a.7Y=c;a.9H=d;a.5o=0;a.5p=8;a.4C=0}1b bK=1c 1d(7,6,6,5,5,5,5,4,4,4,4,4,4,4,4,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0);1b bL=1c 1d(1H,1H,2M,1H,3R,2M,2j,1H,3k,3R,2N,2M,5q,2j,2O,1H,4D,3k,5r,3R,4E,2N,1U,2M,4F,5q,5s,2j,4G,2O,2s,1H,3J,4D,8a,3k,9K,5r,2P,3R,3b,4E,1Q,2N,4H,1U,5t,2M,3c,4F,6y,5q,3l,5s,2g,2j,3K,4G,5u,2O,2t,2s,1C,1H,2I,3J,6z,4D,4I,8a,4J,3k,6A,9K,5v,5r,9L,2P,3m,3R,8b,3b,5w,4E,9M,1Q,6B,2N,6C,4H,6D,1U,6E,5t,6F,2M,3L,3c,5x,4F,3S,6y,1M,5q,2u,3l,2h,5s,6G,2g,2E,2j,3T,3K,9N,4G,dW,5u,dX,2O,2Q,2t,3n,2s,2k,1C,1u,1H);1f 2L(a,b){1b v=0;1y(b-->0)v|=1x(a,1e)<<b;1g v}1f 2R(a,b){1b c=2L(a,b);1g 1A(a)?-c:c}1b bM=0;1b bN=1;1b bO=2;1b bP=0,9O=1,9P=2,9Q=3,dY=4,dZ=5,e0=6,e1=7,e2=8,9R=9,e3=9R+1-bP,9S=bP,9T=9P,9U=9Q,9V=9O,i5=e3,e4=4,e5=5,e6=6,i6=7;1b bQ=3,3o=4,8c=4,e7=4,e8=8,9W=4,9X=8,8d=3,8e=11,i7=19;1b bR=32;1b bS=bR*17+bR*9;1b bT=bR*17;1b bU=bR*1+8;1b bV=bU+bR*16+bR;1b bW=bV+16;1b bX={5y:1o,9Y:1o,9Z:1o,3U:2i};1b bY={4K:5b,3V:5b,e9:1o,ea:1o,a0:1o,eb:1o};1b bZ={5z:1j,5A:1j,6H:1j,6I:1v(3o,5Y),6J:1v(3o,5Y)};1b ca={4L:1v(bQ,1o),2a:9u(1c 1d(9W,9X,8d,8e),1o)};1b cb={a1:1j,6K:1j,5B:1j,8f:1j,a2:1v(8c,1j),a3:1v(8c,1j)};1b cc={a4:1j,a5:1j,5C:1j};1b cd={2S:1j,3W:1j,6L:1j};1b ce={8g:1v(2,5b),5D:1v(2,5b),8h:1v(2,5b)};1b cf={3X:1j,1D:1j,4M:1j,4N:cc,i9:bH};1b cg={6M:"6o",3Y:1j,a6:7A,6N:1w(bJ),a7:1w(bX),2T:1w(bY),3p:1w(cb),3Z:1w(bZ),ia:"ib",4a:1j,8i:1j,8j:1j,4b:cf,4O:1j,5E:1j,8k:1j,8l:1j,6O:1j,5F:1j,8m:1j,8n:9t(e8,bJ),ec:2i,6P:9t(3o,ce),2F:1w(ca),8o:1j,a8:1o,8p:1o,8q:1v(4,1o),8r:1o,8s:1o,8t:1o,4P:1w(cd),4N:1w(cc),2U:1o,2a:7C,3q:1o,3r:1o,4c:1o,3s:1j,3t:1j,4d:1j,2v:1j,2b:1j,4Q:7B,6Q:1j,1N:1j,1D:1j,4e:1o,6R:1v(16,1o),ic:0,a9:1o,6S:1o,3u:2i,4R:2i,2l:1j,4M:1j,8u:1v(3o,1o),5G:1o,aa:0,8v:5Z,ab:1o,ie:0,ed:1j,ee:1o,ig:0,8w:5Z};1f ac(a,b,c){1b d=a.ab;1b e=a.2T.4K;if(b<0||b+c>a.2T.3V)1g 1k;if(b==0){1b f=a.5G;1b g=a.aa;1b h=a.8v;1b i=e*a.2T.3V;d=ba.dy(f.6b(g,g+h))}1g b==0?d:+b*e}1b ci=1c 1d(3,4,3,4,4,2,2,1,1);1f ef(a){1b b=1;1b c=a.2q;1b d=a.1r;1b e=a.1q;if(c>=4A);1l{1b f=a.u.2r;b&=f.1Z*e<=f.5h;b&=f.1Z>=d*ci[c]}1g b?bE:2f}1f eg(a){1b w=a.1r;1b h=a.1q;if(w<=0||h<=0)1g 2f;if(!a.7L&&a.6n==1k){1b b=1o;1b c=0;1b d=a.2q;1b e=1j;1b f=0,7J=0;1b g=0;1b i=9n,7K=0,6T=9n;e=w*ci[d];i=e*h;if(d>=4A){f=4v((w+1)/2);g=f*4v((h+1)/2);if(d==7H){7J=w;7K=7J*h}}6T=i+2*g+7K;if(6T!=6T)1g 2f;a.6n=b=9s(6T,5Z);a.7M=c=0;if(b==1k)1g 7O;if(d>=4A);1l{1b j=a.u.2r;j.3N=b;j.5g=c;j.1Z=e;j.5h=i}}1g ef(a)}1f eh(w,h,a,b){if(b==1k||w<=0||h<=0)1g 2f;b.1r=w;b.1q=h;1g eg(b)}1f dC(a,b){if(b!=bz)1g 0;if(!a)1g 0;5e(a,0,0,1S(a)*a.1p);1g 1}1n.ei=1f(a){if(a){if(!a.7L)a.6n="";a.7M=0;a.6n=a.7M=1k}};1f ad(a,b){2z("ej: ad")}1f ek(a,b){2z("ej: ek")}1f em(a){1K(a);1K(a.8w>0);1g 1}1b cj=1v(1a+1a+1,1o);1b ck=1v(1a+1a+1,1o);1b cl=1v(4f+4f+1,5Y);1b cm=1v(1V+1V+1,5Y);1b cn=1v(1a+ih+1,1o);1b co=0;1f en(a){if(!co){1b i;1h(i=-1a;i<=1a;++i){cj[1a+i]=i<0?-i:i;ck[1a+i]=cj[1a+i]>>1}1h(i=-4f;i<=4f;++i)cl[4f+i]=i<-1e?-1e:i>1H?1H:i;1h(i=-1V;i<=1V;++i)cm[1V+i]=i<-16?-16:i>15?15:i;1h(i=-1a;i<=1a+1a;++i)cn[1a+i]=i<0?0:i>1a?1a:i;co=1}}1f 4S(v){1g!(v&~1a)?v:v<0?0:1a}1f ij(x,y,v){ae[eo+x+y*bR]=4S(eo+ae[x+y*bR]+(v>>3))}1b cp=ik+(1<<16);1b cq=il;1f 3v(a,b){1g a*b>>16}1f af(e,f,g,h){1b C=1v(4*4,0),2m,1W;1W=0;1b i;2m=C;1h(i=0;i<4;++i){1b a=e[f+0]+e[f+8];1b b=e[f+0]-e[f+8];1b c=3v(e[f+4],cq)-3v(e[f+12],cp);1b d=3v(e[f+4],cp)+3v(e[f+12],cq);2m[1W+0]=a+d;2m[1W+1]=b+c;2m[1W+2]=b-c;2m[1W+3]=a-d;1W+=4;f++}1W=0;1h(i=0;i<4;++i){1b j=2m[1W+0]+4;1b a=j+2m[1W+8];1b b=j-2m[1W+8];1b c=3v(2m[1W+4],cq)-3v(2m[1W+12],cp);1b d=3v(2m[1W+4],cp)+3v(2m[1W+12],cq);g[h+0+0*bR]=4S(g[h+0+0*bR]+(a+d>>3));g[h+1+0*bR]=4S(g[h+1+0*bR]+(b+c>>3));g[h+2+0*bR]=4S(g[h+2+0*bR]+(b-c>>3));g[h+3+0*bR]=4S(g[h+3+0*bR]+(a-d>>3));1W++;h+=bR}}1f ep(a,b,c,d,e){af(a,b,c,d);if(e)af(a,b+16,c,d+4)}1f eq(a,b,c,d){cu(a,b+0*16,c,d+0,1);cu(a,b+2*16,c,d+4*bR,1)}1f 5H(a,b,c,d){1b e=a[b+0]+4;1b i,j;1h(j=0;j<4;++j)1h(i=0;i<4;++i){1b f=c[d+i+j*bR];c[d+i+j*bR]=4S(c[d+i+j*bR]+(e>>3))}}1f er(a,b,c,d){if(a[b+0*16])5H(a,b+0*16,c,d+0);if(a[b+1*16])5H(a,b+1*16,c,d+4);if(a[b+2*16])5H(a,b+2*16,c,d+4*bR);if(a[b+3*16])5H(a,b+3*16,c,d+4*bR+4)}1f es(a,b){1b c=1v(16,1j);1b i=1j;1h(i=0;i<4;++i){1b d=a[0+i]+a[12+i];1b e=a[4+i]+a[8+i];1b f=a[4+i]-a[8+i];1b g=a[0+i]-a[12+i];c[0+i]=d+e;c[8+i]=d-e;c[4+i]=g+f;c[12+i]=g-f}1h(i=0;i<4;++i){1b h=b[b.1p-1];1b j=c[0+i*4]+3;1b d=j+c[3+i*4];1b e=c[1+i*4]+c[2+i*4];1b f=c[1+i*4]-c[2+i*4];1b g=j-c[3+i*4];b[h+0]=d+e>>3;b[h+16]=g+f>>3;b[h+32]=d-e>>3;b[h+48]=g-f>>3;b[b.1p-1]+=64}}1f et(a,b){es(a,b)}1f io(x,y){ae[x+y*bR]}1f 8x(a,b,c){1b d=a;1b e=b-bR;1b f=cn;1b g=+1a-d[e-1];1b y;1h(y=0;y<c;++y){1b h=f;1b i=g+a[b-1];1b x;1h(x=0;x<c;++x)a[b+x]=h[i+d[e+x]];b+=bR}}1f eu(a,b){8x(a,b,4)}1f ev(a,b){8x(a,b,8)}1f ew(a,b){8x(a,b,16)}1f ex(a,b){1b j;1h(j=0;j<16;++j)1G(a,b+j*bR,a,b-bR,16)}1f ey(a,b){1b j;1h(j=16;j>0;--j){5e(a,b+0,a[b-1],16);b+=bR}}1f 6U(v,a,b){1b j;1h(j=0;j<16;++j)1h(i=0;i<16;++i)a[b+j*bR+i]=v}1f ez(a,b){1b c=16;1b j;1h(j=0;j<16;++j)c+=a[b-1+j*bR]+a[b+j-bR];6U(c>>5,a,b)}1f eA(a,b){1b c=8;1b j;1h(j=0;j<16;++j)c+=a[b-1+j*bR];6U(c>>4,a,b)}1f eB(a,b){1b c=8;1b i;1h(i=0;i<16;++i)c+=a[b+i-bR];6U(c>>4,a,b)}1f eC(a,b){6U(1e,a,b)}1f 1s(a,b,c){1g a+2*b+c+2>>2}1f 1X(a,b){1g a+b+1>>1}1f eD(a,b){1b c=a;1b d=b-bR;1b e=1c 1d;e.1t(1s(c[d-1],c[d+0],c[d+1]));e.1t(1s(c[d+0],c[d+1],c[d+2]));e.1t(1s(c[d+1],c[d+2],c[d+3]));e.1t(1s(c[d+2],c[d+3],c[d+4]));1b i;1h(i=0;i<4;++i)1G(a,b+i*bR,e,0,4*1S(e))}1f eE(a,b){1b A=a[b-1-bR];1b B=a[b-1];1b C=a[b-1+bR];1b D=a[b-1+2*bR];1b E=a[b-1+3*bR];a[b+0+0*bR]=a[b+1+0*bR]=a[b+2+0*bR]=a[b+3+0*bR]=1s(A,B,C);a[b+0+1*bR]=a[b+1+1*bR]=a[b+2+1*bR]=a[b+3+1*bR]=1s(B,C,D);a[b+0+2*bR]=a[b+1+2*bR]=a[b+2+2*bR]=a[b+3+2*bR]=1s(C,D,E);a[b+0+3*bR]=a[b+1+3*bR]=a[b+2+3*bR]=a[b+3+3*bR]=1s(D,E,E)}1f eF(a,b){1b c=4;1b i;1h(i=0;i<4;++i)c+=a[b+i-bR]+a[b-1+i*bR];c>>=3;1h(i=0;i<4;++i)5e(a,b+i*bR,c,4)}1f eG(a,b){1b I=a[b-1+0*bR];1b J=a[b-1+1*bR];1b K=a[b-1+2*bR];1b L=a[b-1+3*bR];1b X=a[b-1-bR];1b A=a[b+0-bR];1b B=a[b+1-bR];1b C=a[b+2-bR];1b D=a[b+3-bR];a[b+0+3*bR]=1s(J,K,L);a[b+0+2*bR]=a[b+1+3*bR]=1s(I,J,K);a[b+0+1*bR]=a[b+1+2*bR]=a[b+2+3*bR]=1s(X,I,J);a[b+0+0*bR]=a[b+1+1*bR]=a[b+2+2*bR]=a[b+3+3*bR]=1s(A,X,I);a[b+1+0*bR]=a[b+2+1*bR]=a[b+3+2*bR]=1s(B,A,X);a[b+2+0*bR]=a[b+3+1*bR]=1s(C,B,A);a[b+3+0*bR]=1s(D,C,B)}1f eH(a,b){1b A=a[b+0-bR];1b B=a[b+1-bR];1b C=a[b+2-bR];1b D=a[b+3-bR];1b E=a[b+4-bR];1b F=a[b+5-bR];1b G=a[b+6-bR];1b H=a[b+7-bR];a[b+0+0*bR]=1s(A,B,C);a[b+1+0*bR]=a[b+0+1*bR]=1s(B,C,D);a[b+2+0*bR]=a[b+1+1*bR]=a[b+0+2*bR]=1s(C,D,E);a[b+3+0*bR]=a[b+2+1*bR]=a[b+1+2*bR]=a[b+0+3*bR]=1s(D,E,F);a[b+3+1*bR]=a[b+2+2*bR]=a[b+1+3*bR]=1s(E,F,G);a[b+3+2*bR]=a[b+2+3*bR]=1s(F,G,H);a[b+3+3*bR]=1s(G,H,H)}1f eI(a,b){1b I=a[b-1+0*bR];1b J=a[b-1+1*bR];1b K=a[b-1+2*bR];1b X=a[b-1-bR];1b A=a[b+0-bR];1b B=a[b+1-bR];1b C=a[b+2-bR];1b D=a[b+3-bR];a[b+0+0*bR]=a[b+1+2*bR]=1X(X,A);a[b+1+0*bR]=a[b+2+2*bR]=1X(A,B);a[b+2+0*bR]=a[b+3+2*bR]=1X(B,C);a[b+3+0*bR]=1X(C,D);a[b+0+3*bR]=1s(K,J,I);a[b+0+2*bR]=1s(J,I,X);a[b+0+1*bR]=a[b+1+3*bR]=1s(I,X,A);a[b+1+1*bR]=a[b+2+3*bR]=1s(X,A,B);a[b+2+1*bR]=a[b+3+3*bR]=1s(A,B,C);a[b+3+1*bR]=1s(B,C,D)}1f eJ(a,b){1b A=a[b+0-bR];1b B=a[b+1-bR];1b C=a[b+2-bR];1b D=a[b+3-bR];1b E=a[b+4-bR];1b F=a[b+5-bR];1b G=a[b+6-bR];1b H=a[b+7-bR];a[b+0+0*bR]=1X(A,B);a[b+1+0*bR]=a[b+0+2*bR]=1X(B,C);a[b+2+0*bR]=a[b+1+2*bR]=1X(C,D);a[b+3+0*bR]=a[b+2+2*bR]=1X(D,E);a[b+0+1*bR]=1s(A,B,C);a[b+1+1*bR]=a[b+0+3*bR]=1s(B,C,D);a[b+2+1*bR]=a[b+1+3*bR]=1s(C,D,E);a[b+3+1*bR]=a[b+2+3*bR]=1s(D,E,F);a[b+3+2*bR]=1s(E,F,G);a[b+3+3*bR]=1s(F,G,H)}1f eK(a,b){1b I=a[b-1+0*bR];1b J=a[b-1+1*bR];1b K=a[b-1+2*bR];1b L=a[b-1+3*bR];a[b+0+0*bR]=1X(I,J);a[b+2+0*bR]=a[b+0+1*bR]=1X(J,K);a[b+2+1*bR]=a[b+0+2*bR]=1X(K,L);a[b+1+0*bR]=1s(I,J,K);a[b+3+0*bR]=a[b+1+1*bR]=1s(J,K,L);a[b+3+1*bR]=a[b+1+2*bR]=1s(K,L,L);a[b+3+2*bR]=a[b+2+2*bR]=a[b+0+3*bR]=a[b+1+3*bR]=a[b+2+3*bR]=a[b+3+3*bR]=L}1f eL(a,b){1b I=a[b-1+0*bR];1b J=a[b-1+1*bR];1b K=a[b-1+2*bR];1b L=a[b-1+3*bR];1b X=a[b-1-bR];1b A=a[b+0-bR];1b B=a[b+1-bR];1b C=a[b+2-bR];a[b+0+0*bR]=a[b+2+1*bR]=1X(I,X);a[b+0+1*bR]=a[b+2+2*bR]=1X(J,I);a[b+0+2*bR]=a[b+2+3*bR]=1X(K,J);a[b+0+3*bR]=1X(L,K);a[b+3+0*bR]=1s(A,B,C);a[b+2+0*bR]=1s(X,A,B);a[b+1+0*bR]=a[b+3+1*bR]=1s(I,X,A);a[b+1+1*bR]=a[b+3+2*bR]=1s(J,I,X);a[b+1+2*bR]=a[b+3+3*bR]=1s(K,J,I);a[b+1+3*bR]=1s(L,K,J)}1f eM(a,b){1b j;1h(j=0;j<8;++j)1G(a,b+j*bR,a,b-bR,8)}1f eN(a,b){1b j;1h(j=0;j<8;++j){5e(a,b+0,a[b-1],8);b+=bR}}1f 6V(v,a,b){1b j,k;1h(j=0;j<8;++j)1h(k=0;k<8;++k)a[b+k+j*bR]=v}1f eO(a,b){1b c=8;1b i;1h(i=0;i<8;++i)c+=a[b+i-bR]+a[b-1+i*bR];6V((c>>4)*1,a,b)}1f eP(a,b){1b c=4;1b i;1h(i=0;i<8;++i)c+=a[b+i-bR];6V((c>>3)*1,a,b)}1f eQ(a,b){1b c=4;1b i;1h(i=0;i<8;++i)c+=a[b-1+i*bR];6V((c>>3)*1,a,b)}1f eR(a,b){6V(1e,a,b)}1b cr=1c 1d(1f(v,o){eF(v,o)},1f(v,o){eu(v,o)},1f(v,o){eD(v,o)},1f(v,o){eE(v,o)},1f(v,o){eG(v,o)},1f(v,o){eI(v,o)},1f(v,o){eH(v,o)},1f(v,o){eJ(v,o)},1f(v,o){eL(v,o)},1f(v,o){eK(v,o)});1b cs=1c 1d(1f(v,o){ez(v,o)},1f(v,o){ew(v,o)},1f(v,o){ex(v,o)},1f(v,o){ey(v,o)},1f(v,o){eA(v,o)},1f(v,o){eB(v,o)},1f(v,o){eC(v,o)});1b ct=1c 1d(1f(v,o){eO(v,o)},1f(v,o){ev(v,o)},1f(v,o){eM(v,o)},1f(v,o){eN(v,o)},1f(v,o){eQ(v,o)},1f(v,o){eP(v,o)},1f(v,o){eR(v,o)});1f 6W(p,b,c){1b d=p[b-2*c],1Y=p[b-c],2V=p[b+0],2c=p[b+c];1b a=3*(2V-1Y)+cl[4f+d-2c];1b e=cm[1V+(a+4>>3)];1b f=cm[1V+(a+3>>3)];p[b-c]=cn[1a+1Y+f];p[b+0]=cn[1a+2V-e]}1f eS(p,b,c){1b d=p[b-2*c],1Y=p[b-c],2V=p[b+0],2c=p[b+c];1b a=3*(2V-1Y);1b e=cm[1V+(a+4>>3)];1b f=cm[1V+(a+3>>3)];1b g=e+1>>1;p[b-2*c]=cn[1a+d+g];p[b-c]=cn[1a+1Y+f];p[b+0]=cn[1a+2V-e];p[b+c]=cn[1a+2c-g]}1f eT(p,b,c){1b d=p[b-3*c],4T=p[b-2*c],1Y=p[b-c];1b e=p[b+0],2c=p[b+c],6X=p[b+2*c];1b a=cl[4f+3*(e-1Y)+cl[4f+4T-2c]];1b f=27*a+63>>7;1b g=18*a+63>>7;1b h=9*a+63>>7;p[b-3*c]=cn[1a+d+h];p[b-2*c]=cn[1a+4T+g];p[b-c]=cn[1a+1Y+f];p[b+0]=cn[1a+e-f];p[b+c]=cn[1a+2c-g];p[b+2*c]=cn[1a+6X-h]}1f ag(p,a,b,c){1b d=p[a-2*b],1Y=p[a-b],2V=p[a+0],2c=p[a+b];1g cj[1a+d-1Y]>c||cj[1a+2c-2V]>c}1f ah(p,a,b,c){1b d=p[a-2*b],1Y=p[a-b],2V=p[a+0],2c=p[a+b];1g 2*cj[1a+1Y-2V]+ck[1a+d-2c]<=c}1f ai(p,a,b,t,c){1b d=p[a-4*b],aj=p[a-3*b],4T=p[a-2*b],1Y=p[a-b];1b e=p[a+0],2c=p[a+b],6X=p[a+2*b],eU=p[a+3*b];if(2*cj[1a+1Y-e]+ck[1a+4T-2c]>t)1g 0;1g cj[1a+d-aj]<=c&&cj[1a+aj-4T]<=c&&cj[1a+4T-1Y]<=c&&cj[1a+eU-6X]<=c&&cj[1a+6X-2c]<=c&&cj[1a+2c-e]<=c}1f ak(p,a,b,c){1b i;1h(i=0;i<16;++i)if(ah(p,a+i,b,c))6W(p,a+i,b)}1f al(p,a,b,c){1b i;1h(i=0;i<16;++i)if(ah(p,a+i*b,1,c))6W(p,a+i*b,1)}1f eV(p,a,b,c){1b k;1h(k=3;k>0;--k){a+=4*b;ak(p,a+0,b,c)}}1f eW(p,a,b,c){1b k;1h(k=3;k>0;--k){a+=4;al(p,a+0,b,c)}}1f 4U(p,a,b,c,d,e,f,g){1y(d-->0){if(ai(p,a+0,b,e,f))if(ag(p,a+0,b,g))6W(p,a+0,b);1l eT(p,a+0,b);a+=c}}1f 4V(p,a,b,c,d,e,f,g){1y(d-->0){if(ai(p,a+0,b,e,f))if(ag(p,a+0,b,g))6W(p,a+0,b);1l eS(p,a+0,b);a+=c}}1f eX(p,a,b,c,d,e){4U(p,a+0,b,1,16,c,d,e)}1f eY(p,a,b,c,d,e){4U(p,a+0,1,b,16,c,d,e)}1f eZ(p,a,b,c,d,e){1b k;1h(k=3;k>0;--k){a+=4*b;4V(p,a+0,b,1,16,c,d,e)}}1f f0(p,a,b,c,d,e){1b k;1h(k=3;k>0;--k){a+=4;4V(p,a+0,1,b,16,c,d,e)}}1f f1(u,a,v,b,c,d,e,f){4U(u,a,c,1,8,d,e,f);4U(v,b,c,1,8,d,e,f)}1f f2(u,a,v,b,c,d,e,f){4U(u,a,1,c,8,d,e,f);4U(v,b,1,c,8,d,e,f)}1f f3(u,a,v,b,c,d,e,f){4V(u,a+4*c,c,1,8,d,e,f);4V(v,b+4*c,c,1,8,d,e,f)}1f f4(u,a,v,b,c,d,e,f){4V(u,a+4,1,c,8,d,e,f);4V(v,b+4,1,c,8,d,e,f)}1b cu;1b cv;1b cw;1b cx;1b cy;1b cz;1b cA;1b cB;1b cC;1b cD;1b cE;1b cF;1b cG;1b cH;1b cI;1b cJ;1f f5(a){cu=ep;cv=eq;cw=5H;cx=er;cy=eX;cz=eY;cA=f1;cB=f2;cC=eZ;cD=f0;cE=f3;cF=f4;cG=ak;cH=al;cI=eV;cJ=eW}1b cK=32-1;1b cL=3;1b cM=1;1f f6(a){a.8i=0;if(a.4a);1l a.8j=cM;1g 1}1b cN=1c 1d(0,2,8);1f f7(a){1b b=a.8j;1b c=a.4O;1b d=4*c*1S(1o);1b e=(16+8+8)*c;1b f=(c+1)*1S(cd);1b g=a.2l>0?c*(a.4a?2:1)*1S(cc):0;1b h=bS*1S(a.2U);1b i=f8*1S(a.2a);1b j=16*b+4v(cN[a.2l])*3/2;1b k=e*j;1b l=a.5G?a.2T.4K*a.2T.3V:0;1b m=d+e+f+g+h+i+k+l+cK;1b n=1o,ip=0;if(m>a.6Q){a.4Q=0;a.6Q=0;if(a.4Q==1k)1g 1z(a,"7O","iq 3j ir am it.");a.6Q=m}n=a.4Q;a.8p=1M;a.8r=4w(1M,16*c*1S(a.8r));a.8s=4w(1M,8*c*1S(a.8s));a.8t=4w(1M,8*c*1S(a.8t));a.4N=g?9r(cc,g):1k;a.iu=g?0:1k;a.4b.3X=0;a.4b.4N=a.4N;if(a.4a);1K((h&cK)==0);a.2U=4w(1M,h*1S(a.2U));a.2a=-iv;a.2v=16*c;a.2b=8*c;1b o=cN[a.2l];1b p=o*a.2v;1b q=o/2*a.2b;a.3q=1v(k,1M);a.3s=+p;a.3r=a.3q;a.3t=a.3s+16*b*a.2v+q;a.4c=a.3r;a.4d=a.3t+8*b*a.2b+q;a.ab=l?1v(l,1o):1k;a.4P=9r(cd,f);a.8p=4w(bP,d);1g 1}1f f9(a,b){b.1r=a.2T.4K;b.1q=a.2T.3V;b.3i=0;b.y=a.3q;b.3f=a.3s;b.u=a.3r;b.3g=a.3t;b.v=a.4c;b.3h=a.4d;b.3P=a.2v;b.5l=a.2b;b.7T=0;b.a=1k;b.3O=1k}1f fa(a,b){if(!f6(a))1g 0;if(!f7(a))1g 0;f9(a,b);en();f5();1g 1}1f fb(a,b){if(b)1g a>=40?2:a>=15?1:0;1l 1g a>=40?3:a>=20?2:a>=15?1:0}1f fc(a,b,c){1b d=a.4b;1b e=a.2v;1b f=d.4N[1+b];1b g=a.3q;1b h=a.3s+d.3X*16*e+b*16;1b i=f.a4;1b j=f.a5;1b k=2*i+j;if(i==0)1g;if(a.2l==1){if(b>0)cH(g,h,e,k+4);if(f.5C)cJ(g,h,e,k);if(c>0)cG(g,h,e,k+4);if(f.5C)cI(g,h,e,k)}1l{1b l=a.2b;1b m=a.3r;1b n=a.3t+d.3X*8*l+b*8;1b o=a.4c;1b p=a.4d+d.3X*8*l+b*8;1b q=fb(i,a.a7.5y);if(b>0){cz(g,h,e,k+4,j,q);cB(m,n,o,p,l,k+4,j,q)}if(f.5C){cD(g,h,e,k,j,q);cF(m,n,o,p,l,k,j,q)}if(c>0){cy(g,h,e,k+4,j,q);cA(m,n,o,p,l,k+4,j,q)}if(f.5C){cC(g,h,e,k,j,q);cE(m,n,o,p,l,k,j,q)}}}1f fd(a){1b b=1j;1b c=a.4b.1D;1K(a.4b.4M);1h(b=a.8k;b<a.6O;++b)fc(a,b,c)}1f fe(a){if(a.2l>0){1b b=a.4N[1+a.1N];1b c=a.4P[1+a.1N].6L;1b d=a.8u[a.6S];if(a.3p.8f){d+=a.3p.a2[0];if(a.4e)d+=a.3p.a3[0]}d=d<0?0:d>63?63:d;b.a4=d;if(a.3p.5B>0){if(a.3p.5B>4)d>>=2;1l d>>=1;if(d>9-a.3p.5B)d=9-a.3p.5B}b.a5=d<1?1:d;b.5C=(!c||a.4e)+0}1b y;1b e=a.8i*16*a.2v;1b f=a.8i*8*a.2b;1b g=a.3q;1b h=a.3s+a.1N*16+e;1b i=a.3r;1b j=a.3t+a.1N*8+f;1b k=a.4c;1b l=a.4d+a.1N*8+f;1h(y=0;y<16;++y)1G(g,h+y*a.2v,a.2U,+bU+y*bR,16);1h(y=0;y<8;++y){1G(i,j+y*a.2b,a.2U,+bV+y*bR,8);1G(k,l+y*a.2b,a.2U,+bW+y*bR,8)}}1f an(a){1g a*16}1f ff(a,b){1b c=1;1b d=a.4b;1b e=cN[a.2l];1b f=e*a.2v;1b g=4v(e/2)*a.2b;1b h=d.3X*16*a.2v;1b i=d.3X*8*a.2b;1b j=a.3q;1b k=a.3s-f+h;1b l=a.3r;1b m=a.3t-g+i;1b n=a.4c;1b o=a.4d-g+i;1b p=d.1D==0;1b q=(d.1D>=a.5E-1)+0;1b r=an(d.1D);1b s=an(d.1D+1);if(d.4M)fd(a);if(b.7R){if(!p){r-=e;b.y=j;b.3f=k;b.u=l;b.3g=m;b.v=n;b.3h=o}1l{b.y=a.3q;b.3f=a.3s+h;b.u=a.3r;b.3g=a.3t+i;b.v=a.4c;b.3h=a.4d+i}if(!q)s-=e;if(s>b.4B)s=b.4B;if(a.5G){if(r==0){b.a=ac(a,r,s-r);b.3O=0}1l b.3O=ac(a,r,s-r);if(b.a==1k)1g 1z(a,1L,"iw fg ix iy 2A.")}if(r<b.2C){1b t=b.2C-r;r=b.2C;1K(!(t&1));b.3f+=a.2v*t;b.3g+=a.2b*(t>>1);b.3h+=a.2b*(t>>1);if(b.a)b.3O+=b.1r*t}if(r<s){b.3f+=b.2B;b.3g+=b.2B>>1;b.3h+=b.2B>>1;if(b.a)b.3O+=b.2B;b.3i=r-b.2C;b.2D=b.6s-b.2B;b.2J=s-r;c=b.7R(b)}}if(d.3X+1==a.8j)if(!q){1G(a.3q,a.3s-f,j,k+16*a.2v,f);1G(a.3r,a.3t-g,l,m+8*a.2b,g);1G(a.4c,a.4d-g,n,o+8*a.2b,g)}1g c}1f fh(a,b){1b c=1;1b d=a.4b;if(!a.4a){d.1D=a.1D;d.4M=a.4M;c=ff(a,b)}1g c}1f fi(a,b){if(b.6r&&!b.6r(b)){1z(a,7Q,"fj 6r iz");1g a.6M}if(b.6p)a.2l=0;1b c=cN[a.2l];if(a.2l==2){a.8k=0;a.8l=0}1l{a.8l=b.2C>>4;a.8k=b.2B>>4}a.5F=b.4B+15+c>>4;a.6O=b.6s+15+c>>4;if(a.6O>a.4O)a.6O=a.4O;if(a.5F>a.5E)a.5F=a.5E;1g bE}1f fk(a,b){1b c=1;if(a.4a);if(b.7S)b.7S(b);1g c}1b cO=1c 1d(0+0*bR,4+0*bR,8+0*bR,12+0*bR,0+4*bR,4+4*bR,8+4*bR,12+4*bR,0+8*bR,4+8*bR,8+8*bR,12+8*bR,0+12*bR,4+12*bR,8+12*bR,12+12*bR);1f ao(a,b){if(b==bP)if(a.1N==0)1g a.1D==0?e6:e5;1l 1g a.1D==0?e4:bP;1g b}1f 8y(a,b,c,d){1h(i=0;i<4;++i)a[b+i]=c[d+i]}1f fl(a){1b b=a.2U;1b c=bU;1b d=a.2U;1b e=bV;1b f=a.2U;1b g=bW;if(a.1N>0){1b j;1h(j=-1;j<16;++j)8y(b,c+j*bR-4,b,c+j*bR+12);1h(j=-1;j<8;++j){8y(d,e+j*bR-4,d,e+j*bR+4);8y(f,g+j*bR-4,f,g+j*bR+4)}}1l{1b j;1h(j=0;j<16;++j)b[c+j*bR-1]=2I;1h(j=0;j<8;++j){d[e+j*bR-1]=2I;f[g+j*bR-1]=2I}if(a.1D>0)b[c-1-bR]=d[e-1-bR]=f[g-1-bR]=2I}1b h=a.8r;1b k=+a.1N*16;1b l=a.8s;1b m=+a.1N*8;1b o=a.8t;1b p=+a.1N*8;1b q=a.2a;1b n;if(a.1D>0){1G(b,c-bR,h,k,16);1G(d,e-bR,l,m,8);1G(f,g-bR,o,p,8)}1l if(a.1N==0){1h(i=0;i<16+4+1;++i)b[c-bR-1+i]=1H;1h(i=0;i<8+1;++i)d[e-bR-1+i]=1H;1h(i=0;i<8+1;++i)f[g-bR-1+i]=1H}if(a.4e){1b r=b;1b s=c-bR+16;if(a.1D>0)if(a.1N>=a.4O-1)r[s+0]=r[s+1]=r[s+2]=r[s+3]=h[k+15];1l 1G(r,s+0,h,k+16,4);1h(ii=0;ii<4;++ii)r[ii+s+bR*4]=r[ii+s+1*bR*4]=r[ii+s+2*bR*4]=r[ii+s+3*bR*4]=r[ii+s+0*4];1h(n=0;n<16;n++){1b t=b;1b u=c+cO[n];cr[a.6R[n]](t,u);if(a.4R&1<<n)cu(q,+n*16,t,u,0);1l if(a.3u&1<<n)cw(q,+n*16,t,u)}}1l{1b v=ao(a,a.6R[0]);cs[v](b,c);if(a.3u)1h(n=0;n<16;n++){1b t=b;1b u=c+cO[n];if(a.4R&1<<n)cu(q,+n*16,t,u,0);1l if(a.3u&1<<n)cw(q,+n*16,t,u)}}1b v=ao(a,a.a9);ct[v](d,e);ct[v](f,g);if(a.3u&fm){1b w=a.2a;1b x=16*16;if(a.4R&fm)cv(w,x,d,e);1l cx(w,x,d,e)}if(a.3u&fn){1b y=a.2a;1b x=20*16;if(a.4R&fn)cv(y,x,f,g);1l cx(y,x,f,g)}if(a.1D<a.5E-1){1G(h,k,b,c+15*bR,16);1G(l,m,d,e+7*bR,8);1G(o,p,f,g+7*bR,8)}}1f 2W(v,M){1g v<0?0:v>M?M:v}1b cP=1c 1d(4,5,6,7,8,9,10,10,11,12,13,14,15,16,17,17,18,19,20,20,21,21,22,22,23,23,24,25,25,26,27,28,29,30,31,32,33,34,35,36,37,37,38,39,40,41,42,43,44,45,46,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,76,77,78,79,80,81,82,83,84,85,86,87,88,89,91,93,95,96,98,1I,3w,1R,5I,6Y,ap,6Z,1V,2w,3x,7a,fo,5J,5K,1e,4W,8z,4X,7b,4g,5L,3k,6A,7c,5r,3y,3m);1b cQ=1c 1d(4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,1I,1R,5I,6Y,ap,6Z,1V,2w,3x,8A,fo,fp,1e,3J,4X,4I,5L,3k,4h,5v,5M,2P,fq,8b,aq,4E,4i,6B,6C,6D,6E,6F,3L,5x,3S,1M,2u,2h,6G,2E,3T,9N,2x,2O,3n,2k,1m,iA,iB,iC,iD,iE,iF);1f fr(a){1b b=a.6N;1b c=2L(b,7);1b d=1A(b)?2R(b,4):0;1b e=1A(b)?2R(b,4):0;1b f=1A(b)?2R(b,4):0;1b g=1A(b)?2R(b,4):0;1b h=1A(b)?2R(b,4):0;1b j=a.3Z;1b i=1j;1h(i=0;i<3o;++i){1b q=1j;if(j.5z){q=j.6I[i];if(!j.6H)q+=c}1l if(i>0){a.6P[i]=a.6P[0];d5}1l q=c;1b m=a.6P[i];m.8g[0]=cP[2W(q+d,1H)];m.8g[1]=cQ[2W(q+0,1H)];m.5D[0]=cP[2W(q+e,1H)]*2;m.5D[1]=4v(cQ[2W(q+f,1H)]*2P/1I);if(m.5D[1]<8)m.5D[1]=8;m.8h[0]=cP[2W(q+g,7d)];m.8h[1]=cQ[2W(q+h,1H)]}}1b cR=1c 1d(-bP,1,-9O,2,-9P,3,4,6,-9Q,5,-dY,-dZ,-e0,7,-e1,8,-e2,-9R);1b cS=1c 1d(1c 1d(1c 1d(1c 1d(1e,1e,1e,1e,1e,1e,1e,1e,1e,1e,1e),1c 1d(1e,1e,1e,1e,1e,1e,1e,1e,1e,1e,1e),1c 1d(1e,1e,1e,1e,1e,1e,1e,1e,1e,1e,1e)),1c 1d(1c 1d(1u,7b,1m,1a,5N,2g,1e,1e,1e,1e,1e),1c 1d(6F,2I,7e,1a,3K,2h,1a,2g,1e,1e,1e),1c 1d(6Y,5K,3K,1O,ar,2u,1a,1a,1e,1e,1e)),1c 1d(1c 1d(1,98,2n,1a,2X,5O,1a,1a,1e,1e,1e),1c 1d(6D,6z,8B,1m,2E,2x,1a,3y,1e,1e,1e),1c 1d(78,4X,7f,2s,5P,7g,1a,2g,1e,1e,1e)),1c 1d(1c 1d(1,6E,2k,1a,2t,1a,1e,1e,1e,1e,1e),1c 1d(7h,at,2s,1a,2X,4j,1e,1e,1e,1e,1e),1c 1d(77,6Z,8C,1a,2X,7i,1e,1e,1e,1e,1e)),1c 1d(1c 1d(1,3w,1C,1a,2Q,1a,1e,1e,1e,1e,1e),1c 1d(4i,8a,2Q,1O,2X,2u,1a,1a,1e,1e,1e),1c 1d(37,3x,4k,2t,5N,1a,1a,1a,1e,1e,1e)),1c 1d(1c 1d(1,fs,1m,1a,3n,1a,1e,1e,1e,1e,1e),1c 1d(5q,4l,2o,1a,8B,1e,1e,1e,1e,1e,1e),1c 1d(1R,au,4G,1a,3l,1Q,1e,1e,1e,1e,1e)),1c 1d(1c 1d(1,5M,1O,1a,3z,1a,1e,1e,1e,1e,1e),1c 1d(6C,4D,2t,1a,2x,3T,1e,1e,1e,1e,1e),1c 1d(80,2I,3l,1a,av,4j,1e,1e,1e,1e,1e)),1c 1d(1c 1d(1,1,1a,1e,1e,1e,1e,1e,1e,1e,1e),1c 1d(4m,1,1a,1e,1e,1e,1e,1e,1e,1e,1e),1c 1d(1a,1e,1e,1e,1e,1e,1e,1e,1e,1e,1e))),1c 1d(1c 1d(1c 1d(5P,35,dX,2j,3L,5t,8D,4l,6A,2P,62),1c 1d(3J,45,5P,2E,aw,5Q,7j,3m,1O,2E,1),1c 1d(68,47,4h,ax,5v,4E,2E,8D,1a,2j,1e)),1c 1d(1c 1d(1,5v,2Q,1a,2E,4j,1a,1a,1e,1e,1e),1c 1d(7h,4J,2x,1u,8E,7j,1a,4F,1e,1e,1e),1c 1d(81,99,6D,7e,5Q,7k,2k,7f,1a,1a,1e)),1c 1d(1c 1d(1,2I,7l,1u,ar,5x,7e,4k,1a,1a,1e),1c 1d(99,5R,ft,2o,3S,5P,1a,7f,1e,1e,1e),1c 1d(23,91,3b,7e,4i,5t,2s,ft,1a,1a,1e)),1c 1d(1c 1d(1,ay,4m,1a,2x,1a,1e,1e,1e,1e,1e),1c 1d(az,8F,2Q,1a,4G,3n,1a,1a,1e,1e,1e),1c 1d(44,4W,3S,1u,1M,2G,1a,1a,1e,1e,1e)),1c 1d(1c 1d(1,8z,2O,1C,2g,2u,1a,5w,1e,1e,1e),1c 1d(94,7b,3T,1C,5S,7k,1a,1a,1e,1e,1e),1c 1d(22,1I,8G,3n,5T,8b,1a,4F,1e,1e,1e)),1c 1d(1c 1d(1,5U,2k,1a,7l,5u,1e,1e,1e,1e,1e),1c 1d(5J,3k,2Q,1a,3K,2x,1e,1e,1e,1e,1e),1c 1d(35,77,6D,1C,3L,3l,1a,1M,1e,1e,1e)),1c 1d(1c 1d(1,3m,2s,1a,2X,4G,1a,1a,1e,1e,1e),1c 1d(5R,4J,5u,1a,3T,3K,1a,1a,1e,1e,1e),1c 1d(45,99,7m,1C,3c,6G,1a,4j,1e,1e,1e)),1c 1d(1c 1d(1,1,1C,1a,2h,1a,1e,1e,1e,1e,1e),1c 1d(6y,1,2n,1a,1a,1e,1e,1e,1e,1e,1e),1c 1d(4I,1,6C,1a,4j,1a,1e,1e,1e,1e,1e))),1c 1d(1c 1d(1c 1d(1u,9,2n,1C,5q,ax,1a,2G,1e,1e,1e),1c 1d(2N,13,4j,2t,3L,6E,2k,5P,1a,1a,1e),1c 1d(73,17,1Q,2E,8b,4H,2X,4E,1a,2x,1e)),1c 1d(1c 1d(1,95,2s,1u,aA,1U,1a,1a,1e,1e,1e),1c 1d(2O,90,8H,2o,3l,2u,1a,1a,1e,1e,1e),1c 1d(2P,77,3c,2n,7m,3c,1a,1a,1e,1e,1e)),1c 1d(1c 1d(1,24,2O,1C,5S,2g,1a,1M,1e,1e,1e),1c 1d(3S,51,2g,1a,4k,5T,1e,1e,1e,1e,1e),1c 1d(69,46,7k,2O,3S,5S,1a,5N,1e,1e,1e)),1c 1d(1c 1d(1,2M,1C,1a,1a,1e,1e,1e,1e,1e,1e),1c 1d(2j,5w,2k,1a,2h,1a,1e,1e,1e,1e,1e),1c 1d(4J,5J,2n,1a,1a,1e,1e,1e,1e,1e,1e)),1c 1d(1c 1d(1,16,2n,1a,1a,1e,1e,1e,1e,1e,1e),1c 1d(7k,36,7i,1a,2X,1a,1e,1e,1e,1e,1e),1c 1d(5v,1,1a,1e,1e,1e,1e,1e,1e,1e,1e)),1c 1d(1c 1d(1,5O,1a,1e,1e,1e,1e,1e,1e,1e,1e),1c 1d(2s,2G,1a,1e,1e,1e,1e,1e,1e,1e,1e),1c 1d(3z,1e,1a,1e,1e,1e,1e,1e,1e,1e,1e)),1c 1d(1c 1d(1,4X,1O,1a,1a,1e,1e,1e,1e,1e,1e),1c 1d(2h,62,2o,1a,1a,1e,1e,1e,1e,1e,1e),1c 1d(55,93,1a,1e,1e,1e,1e,1e,1e,1e,1e)),1c 1d(1c 1d(1e,1e,1e,1e,1e,1e,1e,1e,1e,1e,1e),1c 1d(1e,1e,1e,1e,1e,1e,1e,1e,1e,1e,1e),1c 1d(1e,1e,1e,1e,1e,1e,1e,1e,1e,1e,1e))),1c 1d(1c 1d(1c 1d(7f,24,2h,5u,5T,2M,7j,4l,3z,2N,1a),1c 1d(5K,38,5U,7l,9M,7h,5N,8G,1a,5t,1e),1c 1d(61,46,4g,2g,5r,8F,3z,4i,1a,8C,1e)),1c 1d(1c 1d(1,1V,7i,2o,4F,2M,2s,3R,1a,1a,1e),1c 1d(4n,az,5N,1O,3l,5s,1a,8G,1e,1e,1e),1c 1d(39,77,8D,7l,aw,7g,3n,8F,1a,1a,1e)),1c 1d(1c 1d(1,52,7j,4m,5P,4F,2k,7j,1a,1a,1e),1c 1d(5J,74,2M,2t,1U,3L,2o,2E,1a,1a,1e),1c 1d(24,71,4W,2g,3y,4i,2t,5U,1a,1a,1e)),1c 1d(1c 1d(1,5U,3T,2k,2g,3z,1a,4j,1e,1e,1e),1c 1d(5v,at,5O,1O,8C,1M,1a,1Q,1e,1e,1e),1c 1d(28,ap,4i,7e,1U,av,1m,2j,1a,1a,1e)),1c 1d(1c 1d(1,81,7i,1O,fs,6y,1a,2G,1e,1e,1e),1c 1d(aB,1R,2u,2s,7m,4k,1a,dW,1e,1e,1e),1c 1d(20,95,9L,2t,aq,6B,1a,6y,1e,1e,1e)),1c 1d(1c 1d(1,8E,2n,1a,8C,2h,1e,1e,1e,1e,1e),1c 1d(fu,2N,4m,1O,5u,1M,1a,1a,1e,1e,1e),1c 1d(47,3x,5s,1a,3l,aA,1a,1a,1e,1e,1e)),1c 1d(1c 1d(1,5R,2X,1u,aA,ar,1a,1a,1e,1e,1e),1c 1d(4J,84,2h,1O,3S,7f,1a,2g,1e,1e,1e),1c 1d(42,80,4l,3z,8D,6E,1a,1M,1e,1e,1e)),1c 1d(1c 1d(1,1,1a,1e,1e,1e,1e,1e,1e,1e,1e),1c 1d(8H,1,1a,1e,1e,1e,1e,1e,1e,1e,1e),1c 1d(8B,1,1a,1e,1e,1e,1e,1e,1e,1e,1e))));1b cT=1c 1d(1c 1d(1c 1d(4G,6k,48,89,3I,aC,6k,5M,1V),1c 1d(5M,4H,64,5K,4i,7a,46,70,95),1c 1d(2N,69,3k,80,85,82,72,2P,au),1c 1d(56,58,10,1Q,5S,6F,17,13,5M),1c 1d(2w,26,17,3b,44,3c,21,10,6B),1c 1d(5R,24,80,3c,26,62,44,64,85),1c 1d(7G,71,10,38,1Q,2h,7G,34,26),1c 1d(4i,46,55,19,7b,4l,33,fv,71),1c 1d(63,20,8,2w,2w,ax,12,9,5O),1c 1d(81,40,11,96,5U,84,29,16,36)),1c 1d(1c 1d(4X,1U,89,4I,98,3w,6Y,5w,7c),1c 1d(72,5t,1I,4W,3m,7n,32,75,80),1c 1d(66,1R,4E,99,74,62,40,2x,1e),1c 1d(41,53,9,8F,2Q,4J,26,8,fw),1c 1d(74,43,26,4h,73,4n,49,23,3m),1c 1d(65,38,iG,4l,51,52,31,3I,1e),1c 1d(5I,79,12,27,6G,1a,87,17,7),1c 1d(87,68,71,44,2w,51,15,5T,23),1c 1d(47,41,14,6Z,5U,1U,21,17,av),1c 1d(66,45,25,1R,5x,6F,23,18,22)),1c 1d(1c 1d(88,88,9K,at,42,46,45,4k,1M),1c 1d(43,97,1U,7d,85,38,35,4H,61),1c 1d(39,53,ay,87,26,21,43,7l,1Q),1c 1d(56,34,51,5I,2w,1R,29,93,77),1c 1d(39,28,85,1Q,58,5w,90,98,64),1c 1d(34,22,3x,fv,23,34,43,4n,73),1c 1d(fw,54,32,26,51,1,81,43,31),1c 1d(68,25,6Y,22,64,1Q,36,3T,2w),1c 1d(34,19,21,1R,8z,7m,16,76,5J),1c 1d(62,18,78,95,85,57,50,48,51)),1c 1d(1c 1d(3L,3w,35,3R,5s,7n,89,46,7n),1c 1d(60,7c,31,aw,2g,5N,21,18,7n),1c 1d(1V,aC,77,85,4H,1a,38,6k,2w),1c 1d(40,42,1,4k,3n,2u,10,25,az),1c 1d(88,43,29,5L,4n,2h,37,43,3y),1c 1d(61,63,30,2P,67,45,68,1,2u),1c 1d(1I,80,8,43,3y,1,51,26,71),1c 1d(8I,78,78,16,1a,1e,34,5x,1Q),1c 1d(41,40,5,1R,3l,1U,4,1,2E),1c 1d(51,50,17,fu,2u,2G,23,25,82)),1c 1d(1c 1d(4g,31,36,1Q,27,4n,38,44,9N),1c 1d(67,87,58,9M,82,3I,26,59,4H),1c 1d(63,59,90,7g,59,4n,93,73,3y),1c 1d(40,40,21,3x,3k,2u,34,39,2N),1c 1d(47,15,16,1U,34,2j,49,45,1U),1c 1d(46,17,33,1U,6,98,15,32,1U),1c 1d(57,46,22,24,1e,1,54,17,37),1c 1d(65,32,73,3I,28,1e,23,1e,1M),1c 1d(40,3,9,3I,51,2G,18,6,2j),1c 1d(87,37,9,3I,59,77,64,21,47)),1c 1d(1c 1d(5I,55,44,5S,9,54,53,4W,5O),1c 1d(64,90,70,1M,40,41,23,26,57),1c 1d(54,57,1V,7h,5,41,38,4n,2h),1c 1d(30,34,26,6z,5M,3x,10,32,4X),1c 1d(39,19,53,2E,26,2w,32,73,1a),1c 1d(31,9,65,2x,2,15,1,7a,73),1c 1d(75,32,12,51,2G,1a,4l,43,51),1c 1d(88,31,35,67,1R,85,55,5T,85),1c 1d(56,21,23,7n,59,1M,45,37,2G),1c 1d(55,38,70,5J,73,1R,1,34,98)),1c 1d(1c 1d(fp,98,42,88,5I,85,7d,2N,82),1c 1d(95,84,53,89,1e,1I,aC,3w,45),1c 1d(75,79,aB,47,51,1e,81,1Q,1),1c 1d(57,17,5,71,1R,57,53,41,49),1c 1d(38,33,13,5R,57,73,26,1,85),1c 1d(41,10,67,4g,77,6Z,90,47,2w),1c 1d(3I,21,2,10,1R,1a,4n,23,6),1c 1d(3w,29,16,10,85,1e,3w,4k,26),1c 1d(57,18,10,1R,1R,2h,34,20,43),1c 1d(7d,20,15,36,3b,1e,68,1,26)),1c 1d(1c 1d(1R,61,71,37,34,53,31,2t,2G),1c 1d(69,60,71,38,73,8A,28,8E,37),1c 1d(68,45,1e,34,1,47,11,3n,1Q),1c 1d(62,17,19,70,4h,85,55,62,70),1c 1d(37,43,37,3y,1I,3b,85,4l,1),1c 1d(63,9,92,7b,28,64,32,3S,85),1c 1d(75,15,9,9,64,1a,7h,8A,16),1c 1d(86,6,28,5,64,1a,25,2n,1),1c 1d(56,8,17,8z,4I,1a,55,3x,1e),1c 1d(58,15,20,82,4D,57,26,5R,40)),1c 1d(1c 1d(aq,50,31,4I,3y,6z,25,35,5S),1c 1d(51,au,44,3J,3J,aB,31,6,fq),1c 1d(86,40,64,4D,7c,4j,45,1U,1e),1c 1d(22,26,17,3J,3z,3y,14,1,2u),1c 1d(45,16,21,91,64,8E,7,1,5x),1c 1d(56,21,39,2P,60,4g,23,1R,2h),1c 1d(83,12,13,54,2G,1a,68,47,28),1c 1d(85,26,85,85,1e,1e,32,4h,1Q),1c 1d(18,11,7,63,7G,1Q,4,4,4m),1c 1d(35,27,10,4h,8G,1Q,12,26,1e)),1c 1d(1c 1d(7k,80,35,99,7g,80,5K,54,45),1c 1d(85,5K,47,87,5Q,51,41,20,32),1c 1d(3w,75,1e,8a,7a,4h,3x,1e,85),1c 1d(56,41,15,5Q,2X,85,37,9,62),1c 1d(71,30,17,8A,7a,1a,17,18,4g),1c 1d(3w,38,60,4g,55,70,43,26,8I),1c 1d(4h,36,19,30,1Q,1a,97,27,20),1c 1d(4g,45,61,62,2g,1,81,7m,64),1c 1d(32,41,20,7d,5r,8I,20,21,3b),1c 1d(1V,19,12,61,3c,1e,48,4,24)));1f fx(a){1h(i=0;i<a.4L.1p;++i)a.4L[i]=1a;a.2a=1w(cS)}1f fy(a,b){1b c=b.8p;c[c.1p-1]=0+4*b.1N;1b d=b.8q;b.4e=!1x(a,6A);if(!b.4e){1b e=1x(a,iH)?1x(a,1e)?9V:9U:1x(a,3b)?9T:9S;b.6R[0]=e;1h(i=0;i<4;++i)c[i+c[c.1p-1]]=e;1h(i=0;i<4;++i)d[i]=e}1l{1b f=b.6R;1b g=0;1b y;1h(y=0;y<4;++y){1b e=d[y];1b x;1h(x=0;x<4;++x){1b h=cT[c[c[c.1p-1]+x]][e];1b i=0;do i=cR[2*i+1x(a,h[i])];1y(i>0);e=-i;c[c[c.1p-1]+x]=e;f[g]=e;g++}d[y]=e}}b.a9=!1x(a,8I)?9S:!1x(a,2w)?9T:1x(a,1U)?9V:9U}1b cU=1c 1d(1c 1d(1c 1d(1c 1d(1a,1a,1a,1a,1a,1a,1a,1a,1a,1a,1a),1c 1d(1a,1a,1a,1a,1a,1a,1a,1a,1a,1a,1a),1c 1d(1a,1a,1a,1a,1a,1a,1a,1a,1a,1a,1a)),1c 1d(1c 1d(5Q,4m,1a,1a,1a,1a,1a,1a,1a,1a,1a),1c 1d(2j,2Q,1O,1a,1a,1a,1a,1a,1a,1a,1a),1c 1d(2k,1u,1u,1a,1a,1a,1a,1a,1a,1a,1a)),1c 1d(1c 1d(1a,8H,1O,1a,1a,1a,1a,1a,1a,1a,1a),1c 1d(2x,1m,1m,1a,1a,1a,1a,1a,1a,1a,1a),1c 1d(1u,1a,1a,1a,1a,1a,1a,1a,1a,1a,1a)),1c 1d(1c 1d(1a,4m,1m,1a,1a,1a,1a,1a,1a,1a,1a),1c 1d(2O,1u,1m,1a,1a,1a,1a,1a,1a,1a,1a),1c 1d(1m,1a,1m,1a,1a,1a,1a,1a,1a,1a,1a)),1c 1d(1c 1d(1a,2n,1m,1a,1a,1a,1a,1a,1a,1a,1a),1c 1d(1C,1a,1m,1a,1a,1a,1a,1a,1a,1a,1a),1c 1d(1a,1a,1a,1a,1a,1a,1a,1a,1a,1a,1a)),1c 1d(1c 1d(1a,1u,1m,1a,1a,1a,1a,1a,1a,1a,1a),1c 1d(1C,1m,1m,1a,1a,1a,1a,1a,1a,1a,1a),1c 1d(1m,1a,1m,1a,1a,1a,1a,1a,1a,1a,1a)),1c 1d(1c 1d(1a,1m,1u,1a,1m,1a,1a,1a,1a,1a,1a),1c 1d(2o,1a,1m,1a,1m,1a,1a,1a,1a,1a,1a),1c 1d(1m,1a,1a,1a,1a,1a,1a,1a,1a,1a,1a)),1c 1d(1c 1d(1a,1a,1a,1a,1a,1a,1a,1a,1a,1a,1a),1c 1d(1a,1a,1a,1a,1a,1a,1a,1a,1a,1a,1a),1c 1d(1a,1a,1a,1a,1a,1a,1a,1a,1a,1a,1a))),1c 1d(1c 1d(1c 1d(6G,1a,1a,1a,1a,1a,1a,1a,1a,1a,1a),1c 1d(3T,1O,2Q,1u,1a,1a,1m,1a,1a,1a,1a),1c 1d(2x,2o,2Q,2o,1u,1a,1u,1m,1a,1a,1a)),1c 1d(1c 1d(1a,1m,1a,1a,1a,1a,1a,1a,1a,1a,1a),1c 1d(2j,1m,1m,1a,1a,1a,1a,1a,1a,1a,1a),1c 1d(8B,1u,1m,1m,1a,1a,1a,1a,1a,1a,1a)),1c 1d(1c 1d(1a,2n,1m,1a,1a,1a,1a,1a,1a,1a,1a),1c 1d(2k,1m,1a,1a,1a,1a,1a,1a,1a,1a,1a),1c 1d(1a,1a,1a,1a,1a,1a,1a,1a,1a,1a,1a)),1c 1d(1c 1d(1a,1u,1a,1a,1a,1a,1a,1a,1a,1a,1a),1c 1d(2s,1m,1a,1a,1a,1a,1a,1a,1a,1a,1a),1c 1d(1a,1a,1a,1a,1a,1a,1a,1a,1a,1a,1a)),1c 1d(1c 1d(1a,1u,1m,1a,1a,1a,1a,1a,1a,1a,1a),1c 1d(1O,1a,1a,1a,1a,1a,1a,1a,1a,1a,1a),1c 1d(1a,1a,1a,1a,1a,1a,1a,1a,1a,1a,1a)),1c 1d(1c 1d(1a,1m,1m,1a,1a,1a,1a,1a,1a,1a,1a),1c 1d(1u,1a,1a,1a,1a,1a,1a,1a,1a,1a,1a),1c 1d(1a,1a,1a,1a,1a,1a,1a,1a,1a,1a,1a)),1c 1d(1c 1d(1a,1m,1u,1a,1a,1a,1a,1a,1a,1a,1a),1c 1d(2o,1a,1a,1a,1a,1a,1a,1a,1a,1a,1a),1c 1d(1m,1a,1a,1a,1a,1a,1a,1a,1a,1a,1a)),1c 1d(1c 1d(1a,1a,1a,1a,1a,1a,1a,1a,1a,1a,1a),1c 1d(1a,1a,1a,1a,1a,1a,1a,1a,1a,1a,1a),1c 1d(1a,1a,1a,1a,1a,1a,1a,1a,1a,1a,1a))),1c 1d(1c 1d(1c 1d(5T,1C,2o,1a,1a,1a,1a,1a,1a,1a,1a),1c 1d(2x,1C,8H,1m,1a,1a,1a,1a,1a,1a,1a),1c 1d(1C,1C,2t,1u,1m,1a,1m,1a,1a,1a,1a)),1c 1d(1c 1d(1a,1u,1m,1a,1a,1a,1a,1a,1a,1a,1a),1c 1d(2X,1u,1m,1a,1a,1a,1a,1a,1a,1a,1a),1c 1d(1C,1u,1u,1m,1m,1a,1a,1a,1a,1a,1a)),1c 1d(1c 1d(1a,1m,1m,1a,1a,1a,1a,1a,1a,1a,1a),1c 1d(1m,1m,1m,1a,1a,1a,1a,1a,1a,1a,1a),1c 1d(1a,1a,1a,1a,1a,1a,1a,1a,1a,1a,1a)),1c 1d(1c 1d(1a,1m,1a,1a,1a,1a,1a,1a,1a,1a,1a),1c 1d(1m,1m,1a,1a,1a,1a,1a,1a,1a,1a,1a),1c 1d(1m,1a,1a,1a,1a,1a,1a,1a,1a,1a,1a)),1c 1d(1c 1d(1a,1a,1a,1a,1a,1a,1a,1a,1a,1a,1a),1c 1d(1m,1a,1a,1a,1a,1a,1a,1a,1a,1a,1a),1c 1d(1a,1a,1a,1a,1a,1a,1a,1a,1a,1a,1a)),1c 1d(1c 1d(1a,1a,1a,1a,1a,1a,1a,1a,1a,1a,1a),1c 1d(1a,1a,1a,1a,1a,1a,1a,1a,1a,1a,1a),1c 1d(1a,1a,1a,1a,1a,1a,1a,1a,1a,1a,1a)),1c 1d(1c 1d(1a,1a,1a,1a,1a,1a,1a,1a,1a,1a,1a),1c 1d(1a,1a,1a,1a,1a,1a,1a,1a,1a,1a,1a),1c 1d(1a,1a,1a,1a,1a,1a,1a,1a,1a,1a,1a)),1c 1d(1c 1d(1a,1a,1a,1a,1a,1a,1a,1a,1a,1a,1a),1c 1d(1a,1a,1a,1a,1a,1a,1a,1a,1a,1a,1a),1c 1d(1a,1a,1a,1a,1a,1a,1a,1a,1a,1a,1a))),1c 1d(1c 1d(1c 1d(2n,1a,1a,1a,1a,1a,1a,1a,1a,1a,1a),1c 1d(2o,1m,1O,1m,1a,1a,1a,1a,1a,1a,1a),1c 1d(2n,1m,2k,1u,1a,1a,1a,1a,1a,1a,1a)),1c 1d(1c 1d(1a,1u,1u,1a,1a,1a,1a,1a,1a,1a,1a),1c 1d(4m,1u,1u,1a,1a,1a,1a,1a,1a,1a,1a),1c 1d(1O,1m,1C,1m,1m,1a,1a,1a,1a,1a,1a)),1c 1d(1c 1d(1a,1m,1O,1a,1a,1a,1a,1a,1a,1a,1a),1c 1d(2n,1m,1u,1a,1a,1a,1a,1a,1a,1a,1a),1c 1d(1u,1a,1m,1m,1a,1a,1a,1a,1a,1a,1a)),1c 1d(1c 1d(1a,1C,1m,1a,1a,1a,1a,1a,1a,1a,1a),1c 1d(3n,1C,1m,1a,1a,1a,1a,1a,1a,1a,1a),1c 1d(1u,1u,1m,1a,1a,1a,1a,1a,1a,1a,1a)),1c 1d(1c 1d(1a,1C,1u,1a,1a,1a,1a,1a,1a,1a,1a),1c 1d(1O,1u,1m,1a,1a,1a,1a,1a,1a,1a,1a),1c 1d(1a,1m,1a,1a,1a,1a,1a,1a,1a,1a,1a)),1c 1d(1c 1d(1a,1O,1a,1a,1a,1a,1a,1a,1a,1a,1a),1c 1d(2k,1a,1m,1a,1a,1a,1a,1a,1a,1a,1a),1c 1d(1a,1a,1m,1a,1a,1a,1a,1a,1a,1a,1a)),1c 1d(1c 1d(1a,1a,1u,1a,1a,1a,1a,1a,1a,1a,1a),1c 1d(2o,1a,1a,1a,1a,1a,1a,1a,1a,1a,1a),1c 1d(1a,1a,1a,1a,1a,1a,1a,1a,1a,1a,1a)),1c 1d(1c 1d(1a,1a,1a,1a,1a,1a,1a,1a,1a,1a,1a),1c 1d(1m,1a,1a,1a,1a,1a,1a,1a,1a,1a,1a),1c 1d(1a,1a,1a,1a,1a,1a,1a,1a,1a,1a,1a))));1f fz(a,d){1b e=d.2F;1b t,b,c,p;1h(t=0;t<9W;++t)1h(b=0;b<9X;++b)1h(c=0;c<8d;++c)1h(p=0;p<8e;++p)if(1x(a,cU[t][b][c][p]))e.2a[t][b][c][p]=2L(a,8);d.8o=1A(a);if(d.8o)d.a8=2L(a,8)}1b cV=12;1b cW=20;1n.iI=1f(a){1g bM<<16|bN<<8|bO};1f aD(a){a.6M="5i";a.a6="iJ"}1b cX;1f dR(a,b){if(b!=bz){2z("iK 6j");1g 0}if(a);1g 1}1f fA(a){1b b=1w(cg);if(b){aD(b);b.3Y=0}1g b}1f fB(a){if(a){aE(a);a=0}}1f 1z(a,b,c){a.6M=b;a.a6=c;a.3Y=0;2z(b+": "+c);1g 0}1f 4Y(a,b){1g a[b+0]|a[b+1]<<8|a[b+2]<<16|a[b+3]<<24}1f aF(a,b,c,d,e,f){if(!a||!c||!d||!e)1g 0;if(c.1i>=8)if(!6d(a,b.1i,"iL ",4)){d.1i=1;e.1i=4Y(a,b.1i+4);if(f.1i>=cV&&e.1i>f.1i-cV)1g 0;b.1i+=8;c.1i-=8}1l{d.1i=0;e.1i=0}1l{d.1i=-1;e.1i=0}1g 1}1f fC(a,b,c,d,e,f,g){if(c.1i<10)1g 0;if(a[b.1i+3]!=3m||a[b.1i+4]!=1||a[b.1i+5]!=42)1g 0;1l{1b i=a[b.1i+0]|a[b.1i+1]<<8|a[b.1i+2]<<16;1b j=!(i&1)+0;1b w=(a[b.1i+7]<<8|a[b.1i+6])&6g;1b h=(a[b.1i+9]<<8|a[b.1i+8])&6g;if(g){if(c.1i<11)1g 0;g.1i=!!(a[b.1i+10]&1e)}if(!j)1g 0;if((i>>1&7)>3)1g 0;if(!(i>>4&1))1g 0;if(i>>5>=d)1g 0;if(e)e.1i=w;if(f)f.1i=h;1g 1}}1f aG(a,b,c,d,e,f,g){if(!a||!c||!d)1g 0;if(c.1i>=cW)if(!6d(a,b.1i,"fD",4)){1b h=4Y(a,b.1i+4);d.1i=1;if(h.1i!=cW-8)1g 0;if(g)g.1i=4Y(a,b.1i+8);if(e)e.1i=4Y(a,b.1i+12);if(f)f.1i=4Y(a,b.1i+16);b.1i+=cW;c.1i-=cW}1l d.1i=0;1l d.1i=-1;1g 1}1f fE(a){1K(a);a.5z=0;a.5A=0;a.6H=1;1h(i=0;i<a.6I.1p;++i)a.6I[i]=0;1h(i=0;i<a.6J.1p;++i)a.6J[i]=0}1f fF(a,b,c){1K(a);1K(b);b.5z=1A(a);if(b.5z){b.5A=1A(a);if(1A(a)){1b s;b.6H=1A(a);1h(s=0;s<3o;++s)b.6I[s]=1A(a)?2R(a,7):0;1h(s=0;s<3o;++s)b.6J[s]=1A(a)?2R(a,6):0}if(b.5A){1b s;1h(s=0;s<bQ;++s)c.4L[s]=1A(a)?2L(a,8):1a}}1l b.5A=0;1g!a.4C}1f fG(a,b,c,d){1b e=a.6N;1b f=b;1b g=c;1b h=b,7o=c+d;1b i;1b j=0;1b k=1j;1b p=1j;a.8m=1<<2L(e,2);k=a.8m-1;i=b;1b j=c+k*3;if(7o<j)1g"3Q";1h(p=0;p<k;++p){1b l=f[g+0]|f[g+1]<<8|f[g+2]<<16;1b m=i;1b n=j+l;if(n>7o)m=h;7Z(a.8n[+p],i,j,n);i=m;j=n;g+=3}7Z(a.8n[+k],i,j,7o);1g j<7o?"5i":"9F"}1f fH(a,b){1b c=b.3p;c.a1=1A(a);c.6K=2L(a,6);c.5B=2L(a,3);c.8f=1A(a);if(c.8f)if(1A(a)){1b i;1h(i=0;i<8c;++i)if(1A(a))c.a2[i]=2R(a,6);1h(i=0;i<e7;++i)if(1A(a))c.a3[i]=2R(a,6)}b.2l=c.6K==0?0:c.a1?1:2;if(b.2l>0)if(b.3Z.5z){1b s;1h(s=0;s<3o;++s){1b d=b.3Z.6J[s];if(!b.3Z.6H)d+=c.6K;b.8u[s]=d}}1l b.8u[0]=c.6K;1g!a.4C}1f 8J(a,b){1b c={1i:0};1b d=1o;1b e={1i:2i};1b f={1i:2i};1b g={1i:2i};1b h={1i:0};1b i={1i:0};1b j=1w(bX);1b k=1w(bY);1b l=1w(bJ);1b m="6o";if(a==1k){2z("(iM == 1k)");1g 0}aD(a);if(b==1k)1g 1z(a,"2f","1k fI iN 9B 8J()");d=b.2A;c.1i=b.7U;e.1i=b.9G;if(d==1k||e.1i<=4)1g 1z(a,"3Q","9A d9 2A 9B 5c am 7p");if(!aH(d,c,e,f))1g 1z(a,1L,"4o: fJ 4o fK");if(!aG(d,c,e,h,1k,1k,1k))1g 1z(a,1L,"4o: fJ fD fK");if(!aF(d,c,e,i,g,f))1g 1z(a,1L,"4o: aI 5h aJ.");if(i.1i==-1)1g 1z(a,"1L","4o: aI 5h aJ.");if(e.1i<4)1g 1z(a,3Q,"4o: iO 7p.");c=c.1i;e=e.1i;1b n=d[c+0]|d[c+1]<<8|d[c+2]<<16;j=a.a7;j.5y=!(n&1)+0;j.9Y=n>>1&7;j.9Z=n>>4&1;j.3U=n>>5;if(j.9Y>3)1g 1z(a,"1L","iP iQ iR.");if(!j.9Z)1g 1z(a,"7P","fj fg iS.");c+=3;e-=3;k=a.2T;if(j.5y){if(e<7)1g 1z(a,"3Q","8K 5c iT 7p");if(7D(d[c+0])!=3m||7D(d[c+1])!=1||7D(d[c+2])!=42)1g 1z(a,"1L","iU iV iW");k.4K=(d[c+4]<<8|d[c+3])&6g;k.e9=d[c+4]>>6;k.3V=(d[c+6]<<8|d[c+5])&6g;k.ea=d[c+6]>>6;c+=7;e-=7;a.4O=k.4K+15>>4;a.5E=k.3V+15>>4;b.1r=k.4K;b.1q=k.3V;b.5k=0;b.5j=0;b.2C=0;b.2B=0;b.6s=b.1r;b.4B=b.1q;b.2D=b.1r;b.2J=b.1q;fx(a.2F);fE(a.3Z);a.6S=0}if(j.3U>e)1g 1z(a,"3Q","iX iY 1p");a.5G=1k;a.8v=0;1b l=a.6N;7Z(l,d,c,c+j.3U);c+=j.3U;e-=j.3U;if(j.5y){k.a0=1A(l);k.eb=1A(l)}if(!fF(l,a.3Z,a.2F))1g 1z(a,"1L","8K 5c iZ 7p");if(!fH(l,a))1g 1z(a,"1L","8K 5c j0 7p");m=fG(a,d,c,e);if(m!="5i")1g 1z(a,"1L","8K 5c j1");fr(a);if(!j.5y)1g 1z(a,7P,"9A a j2 am.");1l a.ec=3|1T;1A(l);fz(l,a);if(a.2T.a0){1b o=8;1b p=1;1b q=d;1b r=c-o;1b s=5Z;if(j.3U<o||q[r+o-1]!=p);s=q[r+4]<<0|q[r+5]<<8|q[r+6]<<16;if(j.3U<s+o)1g 1z(a,1L,"4o: aI j3 aJ.");a.5G=s>0?q:1k;a.aa=s>0?r-s:1k;a.8v=s;s=q[r+0]<<0|q[r+1]<<8|q[r+2]<<16;a.8w=s;a.ee=1k;a.ed=q[r+3]}a.3Y=1;1g 1}1b cY=1c 1d(0,1,2,3,6,4,5,6,6,6,6,6,6,6,6,7,0);1b cZ=1c 1d(6B,7c,5L,0);1b da=1c 1d(5Q,2P,5L,4D,0);1b db=1c 1d(7g,3m,4J,4X,4W,0);1b dc=1c 1d(1m,1m,2t,7i,4k,6C,9L,5L,6z,4W,2I,0);1b dd=1c 1d(cZ,da,db,dc);1b de=1c 1d(0,1,4,8,5,2,3,6,9,12,13,10,7,11,14,15);1b df=9u(1c 1d(8d,8e),"");1f 8L(a,b,c,d,n,e){1b p=b[cY[n]][c];if(!1x(a,p[0]))1g 0;1y(1){++n;if(!1x(a,p[1]))p=b[cY[n]][0];1l{1b v,j;if(!1x(a,p[2])){p=b[cY[n]][1];v=1}1l{if(!1x(a,p[3]))if(!1x(a,p[4]))v=2;1l v=3+1x(a,p[5]);1l if(!1x(a,p[6]))if(!1x(a,p[7]))v=5+1x(a,3R);1l{v=7+2*1x(a,5w);v+=1x(a,6A)}1l{1b f=1o;1b g=1x(a,p[8]);1b h=1x(a,p[9+g]);1b k=2*g+h;v=0;f=dd[k];1b l;1h(i=0;i<f.1p-1;++i)v+=v+1x(a,f[i]);v+=3+(8<<k)}p=b[cY[n]][2]}j=de[n-1];e[e[e.1p-1]+j]=dV(a,v)*d[(j>0)+0];if(n==16||!1x(a,p[0]))1g n}if(n==16)1g 16}}1b dg={i8:1v(4,1o),j4:2i};1b dh=1c 1d(1c 1d(0,0,0,0),1c 1d(1,0,0,0),1c 1d(0,1,0,0),1c 1d(1,1,0,0),1c 1d(0,0,1,0),1c 1d(1,0,1,0),1c 1d(0,1,1,0),1c 1d(1,1,1,0),1c 1d(0,0,0,1),1c 1d(1,0,0,1),1c 1d(0,1,0,1),1c 1d(1,1,0,1),1c 1d(0,0,1,1),1c 1d(1,0,1,1),1c 1d(0,1,1,1),1c 1d(1,1,1,1));1b di=j5;1f 3A(X,S){1g((X[0]*j6+X[1]*j7+X[2]*1T+X[3]*1)*di&j8)>>S}1f fL(a,b,c){1b d,8M,8N;1b e=df;1b q=a.6P[a.6S];1b f=a.2a;1b g=a.4P[1-1];1b h=1v(4,0),7q=1v(4,0);1b i=1v(4,0),3B=1v(4,0);1b j=0;1b k=0;1b x,y,ch;f=4w(0,f8*1S(f));if(!a.4e){1b m=1v(16,0);1b n=b.3W+g.3W;b.3W=g.3W=(8L(c,a.2F.2a[1],n,q.5D,0,m)>0)+0;8N=1;e=a.2F.2a[0];et(m,f);f[f.1p-1]=0}1l{8N=0;e=a.2F.2a[3]}i=6c(dh[b.2S&15]);3B=6c(dh[g.2S&15]);1h(y=0;y<4;++y){1b l=3B[y];1h(x=0;x<4;++x){1b n=l+i[x];1b o=8L(c,e,n,q.8g,8N,f);i[x]=l=(o>0)+0;7q[x]=(f[f[f.1p-1]+0]!=0)+0;h[x]=(o>1)+0;f[f.1p-1]+=16}3B[y]=l;k|=3A(7q,24-y*4);j|=3A(h,24-y*4)}d=3A(i,24);8M=3A(3B,24);i=6c(dh[b.2S>>4]);3B=6c(dh[g.2S>>4]);1h(ch=0;ch<4;ch+=2){1h(y=0;y<2;++y){1b l=3B[ch+y];1h(x=0;x<2;++x){1b n=l+i[ch+x];1b o=8L(c,a.2F.2a[2],n,q.8h,0,f);i[ch+x]=l=(o>0)+0;7q[y*2+x]=(f[f[f.1p-1]+0]!=0)+0;h[y*2+x]=(o>1)+0;f[f.1p-1]+=16}3B[ch+y]=l}k|=3A(7q,8-ch*2);j|=3A(h,8-ch*2)}d|=3A(i,20);8M|=3A(3B,20);b.2S=d;g.2S=8M;a.2a=f;a.4R=j+0;a.3u=j|k;b.6L=!a.3u+0}1b dj;1f fM(a,b){1b c=a.6N;1b d=a.4P[1-1];1b e=a.4P[1+a.1N];if(a.3Z.5A)a.6S=!1x(c,a.2F.4L[0])?0+1x(c,a.2F.4L[1]):2+1x(c,a.2F.4L[2]);e.6L=a.8o?1x(c,a.a8):0;fy(c,a);if(c.4C)1g 0;if(!e.6L)fL(a,e,b);1l{d.2S=e.2S=0;if(!a.4e)d.3W=e.3W=0;a.3u=0;a.4R=0}1g!b.4C}1f fN(a){1b b=a.4P[1-1];b.2S=0;b.3W=0;5e(a.8q,0,bP,a.8q.1p);a.4M=(a.2l>0&&a.1D>=a.8l&&a.1D<=a.5F)+0}1f fO(a,b){1h(a.1D=0;a.1D<a.5F;++a.1D){1b c=a.8n[a.1D&a.8m-1];fN(a);1h(a.1N=0;a.1N<a.4O;a.1N++){if(!fM(a,c))1g 1z(a,"3Q","j9 ja-jb-jc jd."+a.1N+" "+a.1D);fl(a);fe(a)}if(!fh(a,b))1g 1z(a,"7Q","je jf.")}if(a.8w>0)if(!em(a))1g 0;1g 1}1f aK(a,b){1b c=0;if(a==1k)1g 0;if(b==1k)1g 1z(a,"2f","jg fI jh in aK().");if(!a.3Y)if(!8J(a,b))1g 0;1K(a.3Y);c=fi(a,b)==bE;if(c){if(c)c=fa(a,b);if(c)c=fO(a,b);c&=fk(a,b)}if(!c){aE(a);1g 0}a.3Y=0;1g 1}1f aE(a){if(a==1k)1g;if(a.4a);if(a.4Q)a.4Q=0;a.4Q=1k;a.6Q=0;a.3Y=0}1b dk=16,3C=-3K,8O=1T+5O;1f fP(y,u,v,a,b){1b c=dm[v];1b d=dn[v]+aL[u]>>dk;1b e=aM[u];a[b+0]=dp[y+c-3C];a[b+1]=dp[y+d-3C];a[b+2]=dp[y+e-3C]}1f aN(y,u,v,a,b){fP(y,u,v,a,b+1)}1f aO(y,u,v,a,b){a[b+0]=1a;aN(y,u,v,a,b)}1b dl=1<<dk-1;1b dm=1v(1T,7C),aM=1v(1T,7C);1b dn=1v(1T,9m),aL=1v(1T,9m);1b dp=1v(8O-3C,1o);1b dq=1v(8O-3C,1o);1b dr=0;1f 2W(v,a){1g v<0?0:v>a?a:v}1f fQ(a){1b i;if(dr)1g;1h(i=0;i<1T;++i){dm[i]=ji*(i-1e)+dl>>dk;aL[i]=-jj*(i-1e)+dl;dn[i]=-jk*(i-1e);aM[i]=jl*(i-1e)+dl>>dk}1h(i=3C;i<8O;++i){1b k=(i-16)*jm+dl>>dk;dp[i-3C]=2W(k,1a);dq[i-3C]=2W(k+8>>4,15)}dr=1}1f 7r(u,v){1g u|v<<16}1f aP(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){1b x;1b t=q-1>>1;1b u=7r(e[f+0],g[h+0]);1b v=7r(i[j+0],k[l+0]);if(a){1b w=3*u+v+8P>>2;r(a[b+0],w&1a,w>>16,m,n)}if(c){1b w=3*v+u+8P>>2;r(c[d+0],w&1a,w>>16,o,p)}1h(x=1;x<=t;++x){1b y=7r(e[f+x],g[h+x]);1b z=7r(i[j+x],k[l+x]);1b A=u+y+v+z+jn;1b B=A+2*(y+v)>>3;1b C=A+2*(u+z)>>3;if(a){1b w=B+u>>1;1b D=C+y>>1;r(a[b+2*x-1],w&1a,w>>16,m,n+(2*x-1)*s);r(a[b+2*x-0],D&1a,D>>16,m,n+(2*x-0)*s)}if(c){1b w=C+v>>1;1b D=B+z>>1;r(c[d+2*x-1],w&1a,w>>16,o,p+(2*x-1)*s);r(c[d+2*x+0],D&1a,D>>16,o,p+(2*x+0)*s)}u=y;v=z}if(!(q&1)){if(a){1b w=3*u+v+8P>>2;r(a[b+q-1],w&1a,w>>16,m,n+(q-1)*s)}if(c){1b w=3*v+u+8P>>2;r(c[d+q-1],w&1a,w>>16,o,p+(q-1)*s)}}}1f fR(A,a,B,b,C,c,D,d,E,e,F,f,G,g,H,h,l){aP(A,a,B,b,C,c,D,d,E,e,F,f,G,g,H,h,l,aO,4)}1f fS(A,a,B,b,C,c,D,d,E,e,F,f,G,g,H,h,l){aP(A,a,B,b,C,c,D,d,E,e,F,f,G,g,H,h,l,aN,4)}1b ds=1c 1d(7I);1b dt=1c 1d(7I);1f fT(a){ds[3e]=fR;dt[3e]=fS}1f fU(a,b,c,d,u,e,v,f,g,h,j,k,l,m,n){1b i;1h(i=0;i<l-1;i+=2){m(a[b+0],u[e+0],v[f+0],g,h);m(a[b+1],u[e+0],v[f+0],g,h+n);m(c[d+0],u[e+0],v[f+0],j,k);m(c[d+1],u[e+0],v[f+0],j,k+n);b+=2;d+=2;e++;f++;h+=2*n;k+=2*n}if(i==l-1){m(a[b+0],u[e+0],v[f+0],g,h);m(c[d+0],u[e+0],v[f+0],j,k)}}1f fV(A,a,B,b,C,c,D,d,E,e,F,f,l){fU(A,a,B,b,C,c,D,d,E,e,F,f,l,aO,4)}1b du=1c 1d(0,0,0,0,fV,0,0);1b dv=0;1f fW(a,p){1b b=p.1P;1b c=b.u.2r;1b d=c.3N;1b e=c.5g+a.3i*c.1Z;1b f=a.y;1b g=a.3f;1b h=a.u;1b i=a.3g;1b k=a.v;1b l=a.3h;1b m=du[b.2q];1b n=a.2D;1b o=a.2J-1;1b j;1h(j=0;j<o;j+=2){m(f,g,f,g+a.3P,h,i,k,l,d,e,d,e+c.1Z,n);g+=2*a.3P;i+=a.5l;l+=a.5l;e+=2*c.1Z}if(j==o)m(f,g,f,g,h,i,k,l,d,e,d,e,n);1g a.2J}1f fX(a,p){1b b=a.2J;1b c=p.1P.u.2r;1b d=c.3N;1b e=c.5g+a.3i*c.1Z;1b f=a.a?dt[p.1P.2q]:ds[p.1P.2q];1b g=a.y;1b h=a.3f;1b i=a.u;1b j=a.3g;1b k=a.v;1b l=a.3h;1b m=p.5n;1b n=p.6v;1b o=p.6t;1b q=p.7V;1b y=a.3i;1b r=a.3i+a.2J;1b s=a.2D;1b t=4v((s+1)/2);if(y==0)f(1k,1k,g,h,i,j,k,l,i,j,k,l,1k,1k,d,e,s);1l{f(p.5m,p.6u,g,h,m,n,o,q,i,j,k,l,d,e-c.1Z,d,e,s);b++}1h(;y+2<r;y+=2){m=i;n=j;o=k;q=l;j+=a.5l;l+=a.5l;e+=2*c.1Z;h+=2*a.3P;f(g,h-a.3P,g,h,m,n,o,q,i,j,k,l,d,e-c.1Z,d,e,s)}h+=a.3P;if(a.2C+r<a.4B){1G(p.5m,p.6u,g,h,s*1S(p.5m));1G(p.5n,p.6v,i,j,t*1S(p.5n));1G(p.6t,p.7V,k,l,t*1S(p.6t));b--}1l if(!(r&1))f(g,h,1k,1k,i,j,k,l,i,j,k,l,d,e+c.1Z,1k,1k,s);1g b}1f fY(a,p){1b b=p.1P.2q;1b c=b==3e?0:b==6m?1:3;1b d=b==6m?2:4;1b e=a.2D;1b f=a.2J;1b i,j;1b g=p.1P.u.2r;1b h=g.3N;1b k=g.5g+a.3i*g.1Z;1b l=a.a;1b m=a.3O;if(l!=1k)1h(j=0;j<f;++j){1h(i=0;i<e;++i)h[k+d*i+c]=l[m+i];m+=a.1r;k+=g.1Z}1g 0}1b dw=30;1f jo(x,y){1g x*y+(1<<dw-1)>>dw}1f fZ(a){1g a==9C||a==9D||a==3e||a==6m||a==7H}1f g0(a,b){1b W=b.1r;1b H=b.1q;1b x=0,y=0,w=W,h=H;b.5j=a!=1k&&a.5j>0;if(b.5j){w=a.dI;h=a.dJ;x=a.2B&~1;y=a.2C&~1;if(x<0||y<0||w<=0||h<=0||x+w>W||y+h>H)1g 0}b.2B=x;b.2C=y;b.6s=x+w;b.4B=y+h;b.2D=w;b.2J=h;b.5k=(a!=1k&&a.5k>0)+0;b.6p=a&&a.6p;b.7T=(a==1k||!a.dH)+0;1g 1}1f g1(a){1b p=a.6q;1b b=p.1P.2q<4A;p.3j=1k;p.6w=1k;p.6x=1k;if(!g0(p.7W,a))1g 0;if(a.5k);1l{if(b){p.6w=fW;if(a.7T){1b c=a.2D+1>>1;p.3j=9s(a.2D+2*c,1M);if(p.3j==1k){2z("3j 6j #2");1g 0}p.5m=p.3j;p.6u=0;p.5n=p.5m;p.6v=p.6u+a.2D;p.6t=p.5n;p.7V=p.6v+c;p.6w=fX;fT()}}1l;if(fZ(p.1P.2q))p.6x=b?fY:0}if(b)fQ();1g 1}1f g2(a){1b p=a.6q;1b b=a.2D;1b c=a.2J;1b d;1K(!(a.3i&1));if(b<=0||c<=0)1g 0;d=p.6w(a,p);p.dS+=d;if(p.6x)p.6x(a,p);1g 1}1f g3(a){1b p=a.6q;p.3j="";p.3j=1k}1f g4(a,b){b.7R=g2;b.6r=g1;b.7S=g3;b.6q=a}1b cV=12;1f aH(a,b,c,d){if(c.1i>=cV&&!6d(a,b.1i,"4o",4))if(6d(a,b.1i+8,"jp",4))1g 0;1l{d.1i=4Y(a,b.1i+4);if(d.1i<cV)1g 0;b.1i+=cV;c.1i-=cV}1l d.1i=0;1g 1}1f 8Q(a){if(a){}}1f 8R(a,b,c,d){1b e=1c fA;1b f=bE;1b g=1w(bH);1b h=1;1K(d);if(e==1k)1g 2f;dQ(g);g.2A=a;g.7U=b;g.9G=c;g4(d,g);e.4a=0;if(!8J(e,g))f=1L;1l{f=eh(g.1r,g.1q,d.7W,d.1P);if(f==bE)if(!aK(e,g))f=e.6M}fB(e);if(f!=bE)1n.ei(d.1P);1g f}1f g5(a,b,c,d,e,f){1b g=1w(bI);1b h=1w(bD);if(d==1k)1g 1k;7N(h);8Q(g);g.1P=h;h.2q=a;h.u.2r.3N=d;h.u.2r.5g=0;h.u.2r.1Z=e;h.u.2r.5h=f;h.7L=1;if(8R(b,0,c,g)!=bE)1g 1k;1g d}1f jq(a,b,c,d,e){1g g5(3e,a,b,c,e,d)}1f g6(a,b,c,d,e,f){1b g={1i:0};1b c={1i:c};1b h=1w(bI);1b i=1w(bD);7N(i);8Q(h);h.1P=i;i.2q=a;1b o={7U:{1i:0},1r:{1i:i.1r},1q:{1i:i.1q}};if(!g7(b,g,c,o.1r,o.1q))1g 1k;i.1r=o.1r.1i;i.1q=o.1q.1i;if(d)d.1i=i.1r.1i;if(e)e.1i=i.1q.1i;if(8R(b,g.1i,c.1i,h)!=bE)1g 1k;if(f)ad(i,f);1g a>=4A?i.u.dB.y:i.u.2r.3N}1n.jr=1f(a,b,c,d){1g g6(3e,a,b,c,d,1k)};1f aQ(a){1K(a);a.dE=0}1f 8S(a,b,c,d){1b e={1i:0};1b f={1i:0};1b g={1i:0};1b h={1i:0};1b i={1i:0};if(d==1k)1g 2f;aQ(d);if(a==1k||b==1k||c.1i==0)1g 2f;if(!aH(a,b,c,f))1g 1L;if(!aG(a,b,c,h,d.1r,d.1q,g))1g 1L;if(h.1i>0)1g bE;if(!aF(a,b,c,i,e,f))1g 1L;if(i.1i==-1)1g 1L;if(!i.1i)e.1i=c.1i;if(!fC(a,b,c,e,d.1r,d.1q,d.dD))1g 1L;1g bE}1f g7(a,b,c,d,e){1b f=1w(bF);if(8S(a,b,c,f)!=bE)1g 0;if(d)d.1i=f.1r;if(e)e.1i=f.1q;1g 1}1f dP(a,b){if(b!=bz)1g 0;if(a==1k)1g 0;aQ(a.6l);7N(a.1P);1g 1}1f dG(a,b,c,d){if(d!=bz)1g 2f;if(c==1k)1g 2f;1b e={1i:0};1b b={1i:b};1g 8S(a,e,b,c)}1n.g8=1f(a,b,c){1b d=1w(bI);1b e="6o";if(!c)1g 2f;1b f={1i:0};b={1i:b};e=8S(a,f,b,c.6l);if(e!=bE)1g e;8Q(d);d.1P=c.1P;d.7W=c.dN;e=8R(a,f.1i,b.1i,d);1g e}}if(!2y.4Z)2y.4Z=1f(c,d){1n.el=c;1n.2Y=1f(a){1b b=/(\\-([a-z]){1})/g;if(a=="jt")a="ju";if(b.7s(a))a=a.3D(b,1f(){1g 4p[2].jv()});1g c.2Z[a]?c.2Z[a]:1k};1g 1n};1b g9="<\\!-- aR --\\>\\r\\n"+"8T aR(7t)\\r\\n"+"\\jw = jx(7t)\\r\\n"+"ga 8T\\r\\n"+"8T gb(7t)\\r\\n"+"\\jy aS\\r\\n"+"\\jz = jA(7t)\\r\\n"+"\\jB aS jC 2 jD\\r\\n"+"\\t\\gc = jE( jF( jG( 7t, aS, 1 ) ) )\\r\\n"+"\\jH\\r\\n"+"\\t\\gc = "+\'""\'+"\\r\\n"+"\\jI jJ\\r\\n"+"ga 8T\\r\\n";1f gd(){1b a=1B.4q("aT");a.aU="aV/jK";1b s=1B.aW("aT")[0];a.5a=g9;s.aX.ge(a,s)}1f gf(b){1b c={};1h(1b i=0;i<1T;i++)1h(1b j=0;j<1T;j++)c[6e.6f(i+j*1T)]=6e.6f(i)+6e.6f(j);8U{1b d=aR(b);1b f=gb(b);1g d.3D(/[\\s\\S]/g,1f(a){1g c[a]})+f}8V(e){1g 1k}}1f gg(){1b D="gh-0.0.2.8W.js";1b E="gh-0.0.2.jL";1b F="";1b G=1B.aW("aT");1b H=G.1p;1h(1b i=0;i<H;++i)if(G[i].3E.2e(D)>=0){F=G[i].3E.3F(0,G[i].3E.gi("/")+1);2p}1b I=F+E;1f gj(){1b a=1c jM;a.gk=1f(){if(a.1r==2&&a.1q==2)8X();1l 8X()};a.jN=1f(){8X()};1b b="2A:8Y/gl;gm,jO/jP/jQ//jR";a.3E=b;a.aY("3E",b)}gj();1b J=4y;1f 8X(){if(J)1g;J=5f;1f gn(a){if(a.3F(a.1p-5,a.1p)==".gl")1g 1;1l 1g 0}1b p=1B.4q("8Z");1f go(a,b){if(b.2e("jS://")!=0)b=a+""+b;p.3E=b;b=p.3E;1g b}1f aZ(a,b,c,d){if(gn(b))gp(a,b,c,d)}1b q=[];1f gp(a,b,c,d){b=go(a,b);q.1t(1c 1d(b,c,d?d:0))}1f gq(a){1b c=(a.3F(a.2e("4r")+4).3F(0,1)==\'"\'||a.3F(a.2e("4r")+4).3F(0,1)=="\'")+0;1b b=a.3F(a.2e("4r")+4+c,a.gi(")")-c-(a.2e("4r")+4+c));1g b}1b r=1B.b0.aW("*");1h(1b i=0;i<1B.b1.1p;i++)aZ("",1B.b1[i].3E,1B.b1[i],1);1h(1b s=0;s<r.1p;s++){1b t=r[s];1b u=2y.4Z(t,1k).2Y("7u-8Y");if(u.jT("4r")){1b v=gq(u);aZ("",v,t)}}1b x=0;if(5d 9o!=="7v"&&!!1B.4q("b2").9a){1b z=5d gr!=="7v"?1c gr:2y.gs?1c gs("jU.jV"):1k;1b A=1c 9w}(1f(){1b d="jW+/";1f gt(a){1b b,i,7w;1b c,c2,c3;7w=a.1p;i=0;b="";1y(i<7w){c=a.6a(i++)&1a;if(i==7w){b+=d.3G(c>>2);b+=d.3G((c&3)<<4);b+="==";2p}c2=a.6a(i++);if(i==7w){b+=d.3G(c>>2);b+=d.3G((c&3)<<4|(c2&3z)>>4);b+=d.3G((c2&15)<<2);b+="=";2p}c3=a.6a(i++);b+=d.3G(c>>2);b+=d.3G((c&3)<<4|(c2&3z)>>4);b+=d.3G((c2&15)<<2|(c3&2G)>>6);b+=d.3G(c3&63)}1g b}if(!2y.b3)2y.b3=gt})();b4.1J.9b=1f(){1g 1n<0?1n+jX:1n};b4.1J.4s=1f(){1g[1n>>>24&1a,1n>>>16&1a,1n>>>8&1a,1n&1a]};b4.1J.b5=1f(){1g[1n&1a,1n>>>8&1a]};1d.1J.gu=1f(c,d){9y(4p.1p){4z 0:c=0;4z 1:d=1n.1p-c}1b a=1,b=0;1h(1b i=0;i<d;i++){a=(a+1n[c+i])%9z;b=(b+a)%9z}1g(b<<16|a).9b()};1d.1J.9c=1f(a,b){9y(4p.1p){4z 0:a=0;4z 1:b=1n.1p-a}1b d=4p.9d.gv;if(!d){d=[];1b c;1h(1b n=0;n<1T;n++){c=n;1h(1b k=0;k<8;k++)c=c&1?jY^c>>>1:c>>>1;d[n]=c.9b()}4p.9d.gv=d}1b c=gw;1h(1b i=0;i<b;i++)c=d[(c^1n[a+i])&1a]^c>>>8;1g(c^gw).9b()};(1f(){1b l=1f(){1b a=1d.1J.6b.jZ(1n.9a("2d").k0(0,0,1n.1r,1n.1q).2A);1b w=1n.1r;1b h=1n.1q;1b b=[4I,80,78,71,13,10,26,10,0,0,0,13,73,72,68,82];1d.1J.1t.2H(b,w.4s());1d.1J.1t.2H(b,h.4s());b.1t(8,6,0,0,0);1d.1J.1t.2H(b,b.9c(12,17).4s());1b d=h*(w*4+1);1h(1b y=0;y<h;y++)a.k1(y*(w*4+1),0,0);1b e=gx.k2(d/4x);1d.1J.1t.2H(b,(d+5*e+6).4s());1b f=b.1p;1b g=d+5*e+6+4;b.1t(73,68,65,84,6k,1);1h(1b i=0;i<e;i++){1b j=gx.8W(4x,d-i*4x);b.1t(i==e-1?1:0);1d.1J.1t.2H(b,j.b5());1d.1J.1t.2H(b,(~j).b5());1b k=a.6b(i*4x,i*4x+j);1d.1J.1t.2H(b,k)}1d.1J.1t.2H(b,a.gu().4s());1d.1J.1t.2H(b,b.9c(f,g).4s());b.1t(0,0,0,0,73,69,78,68);1d.1J.1t.2H(b,b.9c(b.1p-4,4).4s());1g"2A:8Y/gy;gm,"+b3(b.gz(1f(c){1g 6e.6f(c)}).9p(""))};if(5d 7x!=="7v"){1b m=7x.1J.5V;7x.1J.5V=1f(a){1b b=m.2H(1n,4p);if(b=="2A:,"){7x.1J.5V=l;1g 1n.5V()}1l{7x.1J.5V=m;1g b}}}})();1f gA(a,b){if(a!=1k){1b c=b.1q.1i;1b d=b.1r.1i;1b e=1B.4q("b2");e.id="b6";e.5a="aV";1B.b0.gB(e);1b f=1B.9e("b6");f.1E.9f="gC";f.1q=c;f.1r=d;1b g=f.9a("2d");1b i=g.k3(f.1r,f.1q);1b j=i.2A;1h(1b h=0;h<c;h++)1h(1b w=0;w<d;w++){j[2+w*4+d*4*h]=a[3+w*4+d*4*h];j[1+w*4+d*4*h]=a[2+w*4+d*4*h];j[0+w*4+d*4*h]=a[1+w*4+d*4*h];j[3+w*4+d*4*h]=a[0+w*4+d*4*h]}g.k4(i,0,0);1b k=f.5V("8Y/gy");1B.b0.k5(1B.9e("b6"))}1l k=b.k6;1g k}1b B=[];1f gD(a,b){B.1t(1c 1d(a,b))}1f gE(a){1h(1b i=0;i<B.1p;i++)if(a===B[i][0])1g b7=B[i][1];1g 4y}1f 9g(a,b){if(a&&a.aU=="gF"){1b c=q[x][1];if(q[x][2])c.3E=a.b8;1l c.1E.k7="4r("+a.b8+")"}1l if(a==1k&&b=="as"){1b d=q[x][1];1b e=q[x][2];if(e==0){1b f;if(5d d.k8==="7v")gG(d,x,a)}1l if(e==1)gH(d,x,a)}}1f 5W(){9h(1f(){x++;if(x<q.1p)b9(x);if(x>=q.1p)B=[]},0)}1f b9(b){1b c=q[b][0];if(!!1B.4q("b2").9a)if(b7=gE(c)){9g(b7);5W()}1l{z.k9("ka",c);if(z.gI)z.gI("aV/kb; kc=x-gJ-gK");1l z.kd("ke-kf","x-gJ-gK");z.kg=1f(){if(z.c0==4)if(z.1F==ay)8U{if(5d z.gL=="7v")1b a=z.kh.9i("").gz(1f(e){1g e.6a(0)&1a});1l{gd();1b a=c9(gf(z.gL))}gM(c,a,"js")}8V(e){5W()}1l 5W()};z.ki()}1l 9g(1k,"as")}1f gN(o){1b e=1B.4q("4t");e.gB(o.kj(5f));1g e.5a}1f gH(a,b,c){1b d=2y.4Z(a,1k);1b e=q[b][0];1b f=a.5a;1b g=a.2Z?a.2Z["1r"]:2y.4Z(a,1k).2Y("1r");1b h=a.2Z?a.2Z["1q"]:2y.4Z(a,1k).2Y("1q");1b i=1B.4q("4t");i.1E.9f="gO";if(a.1E.c1!=="")i.1E.c1=a.1E.c1;if(a.c4!=="")i.c4=a.c4;if(a.id!=="")i.id=a.id+" ";1b j=/<8Z((\\s+\\w+=[^\\+]+))>/im.c5(gN(a))[1]+"";1b k=j.2e("1r=")>0?/(\\S+)=["\']?((?:.(?!["\']?\\s+(?:\\S+)=|["\']))+.)["\']?/.c5(j.3F(j.2e("1r=")))[2]:"";1b l=j.2e("1q=")>0?/(\\S+)=["\']?((?:.(?!["\']?\\s+(?:\\S+)=|["\']))+.)["\']?/.c5(j.3F(j.2e("1q=")))[2]:"";if((h+""+l).2e("%")>0&&gP(a)!==4y){l="";h="7y"}i.5a=\'<4t id="gQ\'+C+\'" 1E="9f:gO;1r:1I%;8W-1q: 1I%;1q:7y !gR;1q:1I%;"><9j 1E="" 1r="10" 1q="10" 4u="7z\'+C+\'" gS="7z\'+C+\'" gT="gU:gV-gW-gX-gY-gZ"><5X 4u="h0" 1i="4r=\'+e+"&h1=8Z&kk="+l.3D(/%/g,"%25")+"&kl="+k.3D(/%/g,"%25")+"&km="+h.3D(/%/g,"%25")+"&kn="+g.3D(/%/g,"%25")+"&id="+C+\'"/><5X 4u="h2" 1i="\'+I+\'"/><5X 4u="h3" 1i="h4"></9j></4t>\';a.1E.9f="gC";a.aX.ge(i,a.ko);C++}1f gG(a,b,c){1b d=2y.4Z(a,1k);1b e=q[b][0];1b f=a.5a;1b g=a.2Z?a.2Z["1r"]:d.2Y("1r");g=!!g&&g!="7y"?g:"1I%";1b h=a.2Z?a.2Z["1q"]:d.2Y("1q");h=!!h&&h!="7y"?h:"1I%";1b i=d.2Y("7u-h5");i=i?i:"h5";1b j=d.2Y("7u-3a");if(j==1k||j.9i(" ").1p<2)j=d.2Y("7u-3a-x")+" "+d.2Y("7u-3a-y");a.5a=\'<4t 1E="1r:1I%;8W-1q: 1I%;1q:7y !gR;1q:1I%; 3a:kp; z-kq:0"><9j 1E="3a:c6; c7:0; h6:0;" 1r="\'+g+\'" 1q="\'+h+\'" 4u="7z\'+C+\'" gS="7z\'+C+\'" gT="gU:gV-gW-gX-gY-gZ"><5X 4u="h0" 1i="4r=\'+e+"&h1=bg&kr="+i+"&ks="+j.3D(/%/g,"%25")+"&id="+C+\'"/><5X 4u="h2" 1i="\'+I+\'"/><5X 4u="h3" 1i="h4"></9j><4t 1E="3a:c6; c7:0; h6:0;">\'+f+"</4t></4t>";if(a.1E.3a!=""&&a.1E.h7=="")a.1E.h7="1";C++}1f gP(e){1b a=e.1E.3a;e.1E.3a="c6";1b b=e.1q;e.1E.3a=a;1g b!=e.1q?b:4y}1b C=0;2y["kt"]=1f(a,b){if(a=="1F"){b=b.9i("|");if(b[1]=="ku"||b[1]=="6j")5W()}1l if(a=="8Z"||a=="kv")if(b!=""){b=b.9i("|");1b c=1B.9e("gQ"+b[0]+"").aX;c.1E.1r=b[1];c.1E.1q=b[2];1b d=1B.9e("7z"+b[0]+"");d.aY("1r",b[1].2e("%")>0?"1I%":b[1].3D("h8",""));d.aY("1q",b[2].2e("%")>0?"1I%":b[2].3D("h8",""));d.1E.1r=b[1].2e("%")>0?"1I%":b[1];d.1E.1q=b[2].2e("%")>0?"1I%":b[2]}};1f gM(a,b,c){if(c="js"){8U{1b d={1r:{1i:0},1q:{1i:0}};1b e=1c 9w;1b f=4y;b=b;1b g=e.dM;1b h=g.1P;1b i=g.6l;if(!e.dO(g))f=5f;1b j=e.6o;1F=e.dF(b,b.1p,i);if(1F!=j.5i)f=5f;1b k=e.9E;h.2q=k.3e;1F=e.g8(b,b.1p,g);d.1r.1i=h.1r;d.1q.1i=h.1q;h9=1F==j.5i;if(!h9)f=5f;1b l=!f?h.u.2r.3N:1k}8V(kw){l=1k}1b m={b8:gA(l,d),aU:"gF"}}gD(a,m);9g(m);5W()}if(q.1p>0)b9(x)}}(1f(i){1b u=kx.ky.kz();1b b=4y;if(/kA/.7s(u))kB=9h(1f(){if(1B.c0=="kC"||1B.c0=="kD")i();1l 9h(4p.9d,10)},10);1l if(/kE/.7s(u)&&!/(kF)/.7s(u)||/kG/.7s(u))i();1l if(b)(1f(){1b a=1B.4q("1B:kH");8U{a.kI("c7");i();a=1k}8V(e){9h(4p.9d,0)}})();1l 2y.gk=i})(gg);',62,1285,'||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||255|var|new|Array|128|function|return|for|value|int_|null|else|254|this|uint8_t|length|height|width|AVG3|push|253|Arr|newObjectIt|VP8GetBit|while|VP8SetError|VP8Get|document|251|mb_y_|style|status|memcpy|127|100|prototype|assert|VP8_STATUS_BITSTREAM_ERROR|205|mb_x_|252|output|171|102|sizeof|256|183|112|tmp_off|AVG2|p0|stride|||||||||||coeffs_|cache_uv_stride_|q1||indexOf|VP8_STATUS_INVALID_PARAM|219|213|uint32_t|223|249|filter_type_|tmp|248|250|break|colorspace|RGBA|247|243|209|cache_y_stride_|114|234|window|alert2|data|crop_left|crop_top|mb_w|221|proba_|192|apply|129|mb_h|range_|VP8GetValue|191|175|239|155|241|VP8GetSignedValue|nz_|pic_hdr_|yuv_b_|q0|clip|236|getPropertyValue|currentStyle|||||||||||position|163|195|root|MODE_ARGB|y_off|u_off|v_off|mb_y|memory|143|211|157|245|NUM_MB_SEGMENTS|filter_hdr_|cache_y_|cache_u_|cache_y_off|cache_u_off|non_zero_|MUL|101|116|154|240|PACK|lnz|YUV_RANGE_MIN|replace|src|substr|charAt|zip_bd|115|131|227|193|BMAX|rgba|a_off|y_stride|VP8_STATUS_NOT_ENOUGH_DATA|159|201|225|partition_length_|height_|dc_nz_|id_|ready_|segment_hdr_|||||||||||use_threads_|thread_ctx_|cache_v_|cache_v_off|is_i4x4_|1020|138|146|170|224|196|160|246|166|RIFF|arguments|createElement|url|bytes32|div|name|parseInt|memset|32768|false|case|MODE_YUV|crop_bottom|eof_|135|167|199|231|179|137|141|width_|segments_|filter_row_|f_info_|mb_w_|mb_info_|mem_|non_zero_ac_|clip_8b|p1|FilterLoop26|FilterLoop24|130|134|get_le32|getComputedStyle|||||||||||innerHTML|uint16_t|parse|typeof|memset_|true|rgba_off|size|VP8_STATUS_OK|use_cropping|use_scaling|uv_stride|tmp_y|tmp_u|value_|missing_|207|151|215|187|235|149|165|197|key_frame_|use_segment_|update_map_|sharpness_|f_inner_|y2_mat_|mb_h_|br_mb_y_|alpha_data_|TransformDC|104|124|126|140|152|228|226|198|176|121|218|186|182|toDataURL|waitListNext|param|int8_t|size_t|||||||||||charCodeAt|slice|ArrCopy|memcmp|String|fromCharCode|16383|257|list|error|120|input|MODE_RGBA_4444|private_memory|VP8StatusCode|bypass_filtering|opaque|setup|crop_right|tmp_v|tmp_y_off|tmp_u_off|emit|emit_alpha|203|133|145|173|177|181|185|189|217|absolute_delta_|quantizer_|filter_strength_|level_|skip_|status_|br_|br_mb_x_|dqm_|mem_size_|imodes_|segment_|total_size|Put16|Put8x8uv|do_filter2|q2|106|110|||||||||||118|136|148|117|242|202|180|184|230|220|190|232|188|111|buf_end_off|header|nz_dc|LOAD_UV|test|Binary|background|undefined|len|HTMLCanvasElement|auto|fsWebPid_|char_|void_|int16_t|Byte2Hex|zip_td|288|144|MODE_YUVA|MODE_LAST|a_stride|a_size|is_external_memory|private_memory_off|WebPInitDecBuffer|VP8_STATUS_OUT_OF_MEMORY|VP8_STATUS_UNSUPPORTED_FEATURE|VP8_STATUS_USER_ABORT|put|teardown|fancy_upsampling|data_off|tmp_v_off|options_|buf_|buf_off|VP8InitBitReader|||||||||||139|161|NUM_REF_LF_DELTAS|NUM_CTX|NUM_PROBAS|use_lf_delta_|y1_mat_|uv_mat_|cache_id_|num_caches_|tl_mb_x_|tl_mb_y_|num_parts_|parts_|use_skip_proba_|intra_t_|intra_l_|y_t_|u_t_|v_t_|filter_levels_|alpha_data_size_|layer_data_size_|TrueMotion|Copy32b|132|119|238|216|162|222|178|174|244|142|VP8GetHeaders|cannot|GetCoeffs|out_l_nz|first|YUV_RANGE_MAX|131074|WebPResetDecParams|DecodeInto|GetFeatures|Function|try|catch|min|startDecoding|image|img|||||||||||getContext|toUInt|crc32|callee|getElementById|display|writeResultIntoElement|setTimeout|split|object|short_|long_|int32_t|uint64_t|JSON|join|str|memset_wl|malloc|Arr_nOI|ArrM|throw|WebPDecoder|next|switch|65521|Not|to|MODE_RGBA|MODE_BGRA|WEBP_CSP_MODE|VP8_STATUS_SUSPENDED|data_size|buf_end_|VP8BitUpdate|VP8Shift|147|153|169|229|B_TM_PRED|B_VE_PRED|B_HE_PRED|B_HU_PRED|DC_PRED|V_PRED|H_PRED|TM_PRED|NUM_TYPES|NUM_BANDS|profile_|show_|colorspace_|simple_|ref_lf_delta_|mode_lf_delta_|f_level_|f_ilevel_|error_msg_|frm_hdr_|skip_p_|uvmode_|alpha_data_off|alpha_plane_|VP8DecompressAlphaRows|WebPCopyDecBuffer|dst|TransformOne|hev|needs_filter|needs_filter2|p2|SimpleVFilter16|SimpleHFilter16|frame|MACROBLOCK_VPOS|CheckMode|108|164|214||150|103|194|172|208|200|109|212|123|113|SetOk|VP8Clear|VP8CheckAndSkipHeader|VP8XGetInfo|WebPCheckAndSkipRIFFHeader|Inconsistent|information|VP8Decode|VP8kUToG|VP8kUToB|VP8YuvToArgbKeepA|VP8YuvToArgb|FUNC_NAME|DefaultFeatures|IEBinaryToArray_ByteStr|lastIndex|script|type|text|getElementsByTagName|parentNode|setAttribute|checkAndAddToWaitList|body|images|canvas|btoa|Number|bytes16sw|webbpywebpcanvas|WebPData|Data|waitListProcess|||||||||||||||||||||||||||||||||||||||||||||||||||||readyState|cssText|||className|exec|absolute|left|int64_t|convertBinaryToArray|||||||||||||||||||||||||||||||||||||||||||||||||||||bits|toString|string|65535|N_MAX|continue|HufBuild|286|DataError|enough||||||||||||||||||||||||inflate|uncompress|MODE_BGR|MODE_RGB_565|YUVA|WebPInitDecBufferInternal|has_alpha|bitstream_version|WebPGetFeatures|WebPGetFeaturesInternal|no_fancy_upsampling|crop_width|crop_height|scaled_width|scaled_height|WebPDecoderConfig|options|WebPInitDecoderConfig|WebPInitDecoderConfigInternal|VP8InitIo|VP8InitIoInternal|last_y|OutputFunc|VP8GetByte|VP8GetSigned|233|237|B_RD_PRED|B_VR_PRED|B_LD_PRED|B_VL_PRED|B_HD_PRED|NUM_BMODES|B_DC_PRED_NOTOP|B_DC_PRED_NOLEFT|B_DC_PRED_NOTOPLEFT|NUM_MODE_LF_DELTAS|MAX_NUM_PARTITIONS|xscale_|yscale_|clamp_type_|buffer_flags_|layer_colorspace_|layer_data_|CheckDecBuffer|AllocateBuffer|WebPAllocateDecBuffer|WebPFreeDecBuffer|todo|WebPGrabDecBuffer||VP8DecodeLayer|VP8DspInitTables|dst_off|TransformTwo|TransformUV|TransformDCUV|TransformWHT|VP8TransformWHT|TM4|TM8uv|TM16|VE16|HE16|DC16|DC16NoTop|DC16NoLeft|DC16NoTopLeft|VE4|HE4|DC4|RD4|LD4|VR4|VL4|HU4|HD4|VE8uv|HE8uv|DC8uv|DC8uvNoLeft|DC8uvNoTop|DC8uvNoTopLeft|do_filter4|do_filter6|q3|SimpleVFilter16i|SimpleHFilter16i|VFilter16|HFilter16|VFilter16i|HFilter16i|VFilter8|HFilter8|VFilter8i|HFilter8i|VP8DspInit|InitThreadContext|AllocateMemory|384|InitIo|VP8InitFrame|hev_thresh_from_level|DoFilter|FilterRow|VP8StoreBlock|VP8FinishRow|not|VP8ProcessRow|VP8EnterCritical|Frame|VP8ExitCritical|VP8ReconstructBlock|983040|15728640|122|125|158|VP8ParseQuant|204|210|168|206|107|VP8ResetProba|VP8ParseIntraMode|VP8ParseProba|VP8New|VP8Delete|VP8GetInfo|VP8X|ResetSegmentHeader|ParseSegmentHeader|ParsePartitions|ParseFilterHeader|VP8Io|Invalid|container|ParseResiduals|VP8DecodeMB|VP8InitScanline|ParseFrame|VP8YuvToRgb|VP8YUVInit|UpsampleArgbLinePair|UpsampleArgbKeepAlphaLinePair|InitUpsamplers|FUNC_NAME_SAMPLE|SampleArgbLinePair|EmitSampledRGB|EmitFancyRGB|EmitAlphaRGB|IsAlphaMode|InitFromOptions|CustomSetup|CustomPut|CustomTeardown|WebPInitCustomIo|DecodeIntoRGBABuffer|Decode|WebPGetInfo|WebPDecode|IEBinaryToArray_ByteStr_Script|End|IEBinaryToArray_ByteStr_Last|tIEBinaryToArray_ByteStr_Last|vbscript_IEBinaryToArray_ByteStr|insertBefore|convertResponseBodyToText|WebPJSInit|webpjs|lastIndexOf|checkWebPSupport|onload|webp|base64|IsWebPFile|makeCacheValidUrl|addFilenameToWaitList|removeQuotes|XMLHttpRequest|ActiveXObject|base64encode|adler32|crctable|4294967295|Math|png|map|bitmapToPNGFromCanvas|appendChild|none|InsertIntoCacheList|in_cacheList|PNGDataBase64|addEmbedObjectBG|addEmbedObjectIMG|overrideMimeType|user|defined|responseBody|DecodeWebPImage|getOuterHTML|inline|checkElementHeight|divfsWebPid_|important|ID|classid|clsid|D27CDB6E|AE6D|11cf|96B8|444553540000|FlashVars|mode|movie|wmode|transparent|repeat|top|zIndex|px|ok|float_|double_|score_t|stringify|int64BitLeft|write32BitIn4Bytes|write4BytesIn32Bit|alert32BitIn4Bytes|0x|offset|over|memcpy2|memcpyArrM|membuild_wl|membuild|mallocStr|resStr|Error|fixed_bd|511|1023|2047|4095|8191|32767|258|385|513|769|1025|1537|2049|3073|4097|6145|8193|12289|16385|24577|280|default|Deflate|unshift|Unable|the|MODE_RGB|u_stride|v_stride|y_size|u_size|v_size|no_incremental_decoding|rotate|uv_sampling|force_rotation|no_enhancement|use_threads|B_PRED|NUM_B_DC_MODES|NUM_MV_PROBAS||io_|worker_|WebPWorker|imodes_offset_||alpha_plane_off||layer_data_off|510||STORE|20091|35468|||OUT|mem_offset|no|during||initialization|f_info_off|12851|Could|decode|alpha|failed|259|264|269|274|279|284|105|156|WebPGetDecoderVersion|OK|mismatch|VP8|dec|passed|Truncated|Incorrect|keyframe|parameters|displayable|picture|Bad|code|word|bad|partition|segment|filter|partitions|key|extra|i32|134480385|16777216|65536|4278190080|Premature|end|of|file|encountered|Output|aborted|NULL|parameter|89858|22014|45773|113618|76283|524296|MULT|WEBP|WebPDecodeARGBInto|WebPDecodeARGB||float|styleFloat|toUpperCase|tIEBinaryToArray_ByteStr|CStr|tDim|tlastIndex|LenB|tif|mod|Then|Chr|AscB|MidB|tElse|tEnd|If|vbscript|swf|Image|onerror|UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA|veff|0PP8bA|LwYAAA|http|match|MSXML2|XMLHTTP|ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789|4294967296|3988292384|call|getImageData|splice|ceil|createImageData|putImageData|removeChild|URL|backgroundImage|selectorText|open|get|plain|charset|setRequestHeader|Accept|Charset|onreadystatechange|responseText|send|cloneNode|imgHeight|imgWidth|styleHeight|styleWidth|nextSibling|relative|index|backgroundRepeat|backgroundPosition|webpFSCommand|finish|imgresize|err|navigator|userAgent|toLowerCase|webkit|timeout|loaded|complete|mozilla|compatible|opera|ready|doScroll'.split('|'),0,{}))
/*! jQuery v3.2.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(a,b){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){"use strict";var c=[],d=a.document,e=Object.getPrototypeOf,f=c.slice,g=c.concat,h=c.push,i=c.indexOf,j={},k=j.toString,l=j.hasOwnProperty,m=l.toString,n=m.call(Object),o={};function p(a,b){b=b||d;var c=b.createElement("script");c.text=a,b.head.appendChild(c).parentNode.removeChild(c)}var q="3.2.1",r=function(a,b){return new r.fn.init(a,b)},s=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,t=/^-ms-/,u=/-([a-z])/g,v=function(a,b){return b.toUpperCase()};r.fn=r.prototype={jquery:q,constructor:r,length:0,toArray:function(){return f.call(this)},get:function(a){return null==a?f.call(this):a<0?this[a+this.length]:this[a]},pushStack:function(a){var b=r.merge(this.constructor(),a);return b.prevObject=this,b},each:function(a){return r.each(this,a)},map:function(a){return this.pushStack(r.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(f.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(a<0?b:0);return this.pushStack(c>=0&&c<b?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:h,sort:c.sort,splice:c.splice},r.extend=r.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||r.isFunction(g)||(g={}),h===i&&(g=this,h--);h<i;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(r.isPlainObject(d)||(e=Array.isArray(d)))?(e?(e=!1,f=c&&Array.isArray(c)?c:[]):f=c&&r.isPlainObject(c)?c:{},g[b]=r.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},r.extend({expando:"jQuery"+(q+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===r.type(a)},isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){var b=r.type(a);return("number"===b||"string"===b)&&!isNaN(a-parseFloat(a))},isPlainObject:function(a){var b,c;return!(!a||"[object Object]"!==k.call(a))&&(!(b=e(a))||(c=l.call(b,"constructor")&&b.constructor,"function"==typeof c&&m.call(c)===n))},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?j[k.call(a)]||"object":typeof a},globalEval:function(a){p(a)},camelCase:function(a){return a.replace(t,"ms-").replace(u,v)},each:function(a,b){var c,d=0;if(w(a)){for(c=a.length;d<c;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(s,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(w(Object(a))?r.merge(c,"string"==typeof a?[a]:a):h.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:i.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;d<c;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;f<g;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,f=0,h=[];if(w(a))for(d=a.length;f<d;f++)e=b(a[f],f,c),null!=e&&h.push(e);else for(f in a)e=b(a[f],f,c),null!=e&&h.push(e);return g.apply([],h)},guid:1,proxy:function(a,b){var c,d,e;if("string"==typeof b&&(c=a[b],b=a,a=c),r.isFunction(a))return d=f.call(arguments,2),e=function(){return a.apply(b||this,d.concat(f.call(arguments)))},e.guid=a.guid=a.guid||r.guid++,e},now:Date.now,support:o}),"function"==typeof Symbol&&(r.fn[Symbol.iterator]=c[Symbol.iterator]),r.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){j["[object "+b+"]"]=b.toLowerCase()});function w(a){var b=!!a&&"length"in a&&a.length,c=r.type(a);return"function"!==c&&!r.isWindow(a)&&("array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a)}var x=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C={}.hasOwnProperty,D=[],E=D.pop,F=D.push,G=D.push,H=D.slice,I=function(a,b){for(var c=0,d=a.length;c<d;c++)if(a[c]===b)return c;return-1},J="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",K="[\\x20\\t\\r\\n\\f]",L="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",M="\\["+K+"*("+L+")(?:"+K+"*([*^$|!~]?=)"+K+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+L+"))|)"+K+"*\\]",N=":("+L+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+M+")*)|.*)\\)|)",O=new RegExp(K+"+","g"),P=new RegExp("^"+K+"+|((?:^|[^\\\\])(?:\\\\.)*)"+K+"+$","g"),Q=new RegExp("^"+K+"*,"+K+"*"),R=new RegExp("^"+K+"*([>+~]|"+K+")"+K+"*"),S=new RegExp("="+K+"*([^\\]'\"]*?)"+K+"*\\]","g"),T=new RegExp(N),U=new RegExp("^"+L+"$"),V={ID:new RegExp("^#("+L+")"),CLASS:new RegExp("^\\.("+L+")"),TAG:new RegExp("^("+L+"|[*])"),ATTR:new RegExp("^"+M),PSEUDO:new RegExp("^"+N),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+K+"*(even|odd|(([+-]|)(\\d*)n|)"+K+"*(?:([+-]|)"+K+"*(\\d+)|))"+K+"*\\)|)","i"),bool:new RegExp("^(?:"+J+")$","i"),needsContext:new RegExp("^"+K+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+K+"*((?:-\\d)?\\d*)"+K+"*\\)|)(?=[^-]|$)","i")},W=/^(?:input|select|textarea|button)$/i,X=/^h\d$/i,Y=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,$=/[+~]/,_=new RegExp("\\\\([\\da-f]{1,6}"+K+"?|("+K+")|.)","ig"),aa=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:d<0?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ba=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ca=function(a,b){return b?"\0"===a?"\ufffd":a.slice(0,-1)+"\\"+a.charCodeAt(a.length-1).toString(16)+" ":"\\"+a},da=function(){m()},ea=ta(function(a){return a.disabled===!0&&("form"in a||"label"in a)},{dir:"parentNode",next:"legend"});try{G.apply(D=H.call(v.childNodes),v.childNodes),D[v.childNodes.length].nodeType}catch(fa){G={apply:D.length?function(a,b){F.apply(a,H.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s=b&&b.ownerDocument,w=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==w&&9!==w&&11!==w)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==w&&(l=Z.exec(a)))if(f=l[1]){if(9===w){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(s&&(j=s.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(l[2])return G.apply(d,b.getElementsByTagName(a)),d;if((f=l[3])&&c.getElementsByClassName&&b.getElementsByClassName)return G.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==w)s=b,r=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(ba,ca):b.setAttribute("id",k=u),o=g(a),h=o.length;while(h--)o[h]="#"+k+" "+sa(o[h]);r=o.join(","),s=$.test(a)&&qa(b.parentNode)||b}if(r)try{return G.apply(d,s.querySelectorAll(r)),d}catch(x){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(P,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("fieldset");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&a.sourceIndex-b.sourceIndex;if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return function(b){return"form"in b?b.parentNode&&b.disabled===!1?"label"in b?"label"in b.parentNode?b.parentNode.disabled===a:b.disabled===a:b.isDisabled===a||b.isDisabled!==!a&&ea(b)===a:b.disabled===a:"label"in b&&b.disabled===a}}function pa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function qa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return!!b&&"HTML"!==b.nodeName},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),v!==n&&(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Y.test(n.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){return a.getAttribute("id")===b}},d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}}):(d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}},d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c,d,e,f=b.getElementById(a);if(f){if(c=f.getAttributeNode("id"),c&&c.value===a)return[f];e=b.getElementsByName(a),d=0;while(f=e[d++])if(c=f.getAttributeNode("id"),c&&c.value===a)return[f]}return[]}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){if("undefined"!=typeof b.getElementsByClassName&&p)return b.getElementsByClassName(a)},r=[],q=[],(c.qsa=Y.test(n.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+K+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+K+"*(?:value|"+J+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){a.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+K+"*[*^$|!~]?="),2!==a.querySelectorAll(":enabled").length&&q.push(":enabled",":disabled"),o.appendChild(a).disabled=!0,2!==a.querySelectorAll(":disabled").length&&q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Y.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"*"),s.call(a,"[s!='']:x"),r.push("!=",N)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Y.test(o.compareDocumentPosition),t=b||Y.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?I(k,a)-I(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?I(k,a)-I(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?la(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(S,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&C.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.escape=function(a){return(a+"").replace(ba,ca)},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(_,aa),a[3]=(a[3]||a[4]||a[5]||"").replace(_,aa),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return V.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&T.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(_,aa).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+K+")"+a+"("+K+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:!b||(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(O," ")+" ").indexOf(c)>-1:"|="===b&&(e===c||e.slice(0,c.length+1)===c+"-"))}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=I(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(P,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(_,aa),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return U.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(_,aa).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:oa(!1),disabled:oa(!0),checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return X.test(a.nodeName)},input:function(a){return W.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:pa(function(){return[0]}),last:pa(function(a,b){return[b-1]}),eq:pa(function(a,b,c){return[c<0?c+b:c]}),even:pa(function(a,b){for(var c=0;c<b;c+=2)a.push(c);return a}),odd:pa(function(a,b){for(var c=1;c<b;c+=2)a.push(c);return a}),lt:pa(function(a,b,c){for(var d=c<0?c+b:c;--d>=0;)a.push(d);return a}),gt:pa(function(a,b,c){for(var d=c<0?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function ra(){}ra.prototype=d.filters=d.pseudos,d.setFilters=new ra,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=Q.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=R.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(P," ")}),h=h.slice(c.length));for(g in d.filter)!(e=V[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function sa(a){for(var b=0,c=a.length,d="";b<c;b++)d+=a[b].value;return d}function ta(a,b,c){var d=b.dir,e=b.next,f=e||d,g=c&&"parentNode"===f,h=x++;return b.first?function(b,c,e){while(b=b[d])if(1===b.nodeType||g)return a(b,c,e);return!1}:function(b,c,i){var j,k,l,m=[w,h];if(i){while(b=b[d])if((1===b.nodeType||g)&&a(b,c,i))return!0}else while(b=b[d])if(1===b.nodeType||g)if(l=b[u]||(b[u]={}),k=l[b.uniqueID]||(l[b.uniqueID]={}),e&&e===b.nodeName.toLowerCase())b=b[d]||b;else{if((j=k[f])&&j[0]===w&&j[1]===h)return m[2]=j[2];if(k[f]=m,m[2]=a(b,c,i))return!0}return!1}}function ua(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function va(a,b,c){for(var d=0,e=b.length;d<e;d++)ga(a,b[d],c);return c}function wa(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;h<i;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function xa(a,b,c,d,e,f){return d&&!d[u]&&(d=xa(d)),e&&!e[u]&&(e=xa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||va(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:wa(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=wa(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?I(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=wa(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):G.apply(g,r)})}function ya(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ta(function(a){return a===b},h,!0),l=ta(function(a){return I(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];i<f;i++)if(c=d.relative[a[i].type])m=[ta(ua(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;e<f;e++)if(d.relative[a[e].type])break;return xa(i>1&&ua(m),i>1&&sa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(P,"$1"),c,i<e&&ya(a.slice(i,e)),e<f&&ya(a=a.slice(e)),e<f&&sa(a))}m.push(c)}return ua(m)}function za(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=E.call(i));u=wa(u)}G.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&ga.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=ya(b[c]),f[u]?d.push(f):e.push(f);f=A(a,za(e,d)),f.selector=a}return f},i=ga.select=function(a,b,c,e){var f,i,j,k,l,m="function"==typeof a&&a,n=!e&&g(a=m.selector||a);if(c=c||[],1===n.length){if(i=n[0]=n[0].slice(0),i.length>2&&"ID"===(j=i[0]).type&&9===b.nodeType&&p&&d.relative[i[1].type]){if(b=(d.find.ID(j.matches[0].replace(_,aa),b)||[])[0],!b)return c;m&&(b=b.parentNode),a=a.slice(i.shift().value.length)}f=V.needsContext.test(a)?0:i.length;while(f--){if(j=i[f],d.relative[k=j.type])break;if((l=d.find[k])&&(e=l(j.matches[0].replace(_,aa),$.test(i[0].type)&&qa(b.parentNode)||b))){if(i.splice(f,1),a=e.length&&sa(i),!a)return G.apply(c,e),c;break}}}return(m||h(a,n))(e,b,!p,c,!b||$.test(a)&&qa(b.parentNode)||b),c},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("fieldset"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){if(!c)return a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){if(!c&&"input"===a.nodeName.toLowerCase())return a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(J,function(a,b,c){var d;if(!c)return a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);r.find=x,r.expr=x.selectors,r.expr[":"]=r.expr.pseudos,r.uniqueSort=r.unique=x.uniqueSort,r.text=x.getText,r.isXMLDoc=x.isXML,r.contains=x.contains,r.escapeSelector=x.escape;var y=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&r(a).is(c))break;d.push(a)}return d},z=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},A=r.expr.match.needsContext;function B(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()}var C=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,D=/^.[^:#\[\.,]*$/;function E(a,b,c){return r.isFunction(b)?r.grep(a,function(a,d){return!!b.call(a,d,a)!==c}):b.nodeType?r.grep(a,function(a){return a===b!==c}):"string"!=typeof b?r.grep(a,function(a){return i.call(b,a)>-1!==c}):D.test(b)?r.filter(b,a,c):(b=r.filter(b,a),r.grep(a,function(a){return i.call(b,a)>-1!==c&&1===a.nodeType}))}r.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?r.find.matchesSelector(d,a)?[d]:[]:r.find.matches(a,r.grep(b,function(a){return 1===a.nodeType}))},r.fn.extend({find:function(a){var b,c,d=this.length,e=this;if("string"!=typeof a)return this.pushStack(r(a).filter(function(){for(b=0;b<d;b++)if(r.contains(e[b],this))return!0}));for(c=this.pushStack([]),b=0;b<d;b++)r.find(a,e[b],c);return d>1?r.uniqueSort(c):c},filter:function(a){return this.pushStack(E(this,a||[],!1))},not:function(a){return this.pushStack(E(this,a||[],!0))},is:function(a){return!!E(this,"string"==typeof a&&A.test(a)?r(a):a||[],!1).length}});var F,G=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,H=r.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||F,"string"==typeof a){if(e="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:G.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof r?b[0]:b,r.merge(this,r.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),C.test(e[1])&&r.isPlainObject(b))for(e in b)r.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}return f=d.getElementById(e[2]),f&&(this[0]=f,this.length=1),this}return a.nodeType?(this[0]=a,this.length=1,this):r.isFunction(a)?void 0!==c.ready?c.ready(a):a(r):r.makeArray(a,this)};H.prototype=r.fn,F=r(d);var I=/^(?:parents|prev(?:Until|All))/,J={children:!0,contents:!0,next:!0,prev:!0};r.fn.extend({has:function(a){var b=r(a,this),c=b.length;return this.filter(function(){for(var a=0;a<c;a++)if(r.contains(this,b[a]))return!0})},closest:function(a,b){var c,d=0,e=this.length,f=[],g="string"!=typeof a&&r(a);if(!A.test(a))for(;d<e;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&r.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?r.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?i.call(r(a),this[0]):i.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(r.uniqueSort(r.merge(this.get(),r(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function K(a,b){while((a=a[b])&&1!==a.nodeType);return a}r.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return y(a,"parentNode")},parentsUntil:function(a,b,c){return y(a,"parentNode",c)},next:function(a){return K(a,"nextSibling")},prev:function(a){return K(a,"previousSibling")},nextAll:function(a){return y(a,"nextSibling")},prevAll:function(a){return y(a,"previousSibling")},nextUntil:function(a,b,c){return y(a,"nextSibling",c)},prevUntil:function(a,b,c){return y(a,"previousSibling",c)},siblings:function(a){return z((a.parentNode||{}).firstChild,a)},children:function(a){return z(a.firstChild)},contents:function(a){return B(a,"iframe")?a.contentDocument:(B(a,"template")&&(a=a.content||a),r.merge([],a.childNodes))}},function(a,b){r.fn[a]=function(c,d){var e=r.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=r.filter(d,e)),this.length>1&&(J[a]||r.uniqueSort(e),I.test(a)&&e.reverse()),this.pushStack(e)}});var L=/[^\x20\t\r\n\f]+/g;function M(a){var b={};return r.each(a.match(L)||[],function(a,c){b[c]=!0}),b}r.Callbacks=function(a){a="string"==typeof a?M(a):r.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=e||a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){r.each(b,function(b,c){r.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==r.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return r.each(arguments,function(a,b){var c;while((c=r.inArray(b,f,c))>-1)f.splice(c,1),c<=h&&h--}),this},has:function(a){return a?r.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=g=[],c||b||(f=c=""),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j};function N(a){return a}function O(a){throw a}function P(a,b,c,d){var e;try{a&&r.isFunction(e=a.promise)?e.call(a).done(b).fail(c):a&&r.isFunction(e=a.then)?e.call(a,b,c):b.apply(void 0,[a].slice(d))}catch(a){c.apply(void 0,[a])}}r.extend({Deferred:function(b){var c=[["notify","progress",r.Callbacks("memory"),r.Callbacks("memory"),2],["resolve","done",r.Callbacks("once memory"),r.Callbacks("once memory"),0,"resolved"],["reject","fail",r.Callbacks("once memory"),r.Callbacks("once memory"),1,"rejected"]],d="pending",e={state:function(){return d},always:function(){return f.done(arguments).fail(arguments),this},"catch":function(a){return e.then(null,a)},pipe:function(){var a=arguments;return r.Deferred(function(b){r.each(c,function(c,d){var e=r.isFunction(a[d[4]])&&a[d[4]];f[d[1]](function(){var a=e&&e.apply(this,arguments);a&&r.isFunction(a.promise)?a.promise().progress(b.notify).done(b.resolve).fail(b.reject):b[d[0]+"With"](this,e?[a]:arguments)})}),a=null}).promise()},then:function(b,d,e){var f=0;function g(b,c,d,e){return function(){var h=this,i=arguments,j=function(){var a,j;if(!(b<f)){if(a=d.apply(h,i),a===c.promise())throw new TypeError("Thenable self-resolution");j=a&&("object"==typeof a||"function"==typeof a)&&a.then,r.isFunction(j)?e?j.call(a,g(f,c,N,e),g(f,c,O,e)):(f++,j.call(a,g(f,c,N,e),g(f,c,O,e),g(f,c,N,c.notifyWith))):(d!==N&&(h=void 0,i=[a]),(e||c.resolveWith)(h,i))}},k=e?j:function(){try{j()}catch(a){r.Deferred.exceptionHook&&r.Deferred.exceptionHook(a,k.stackTrace),b+1>=f&&(d!==O&&(h=void 0,i=[a]),c.rejectWith(h,i))}};b?k():(r.Deferred.getStackHook&&(k.stackTrace=r.Deferred.getStackHook()),a.setTimeout(k))}}return r.Deferred(function(a){c[0][3].add(g(0,a,r.isFunction(e)?e:N,a.notifyWith)),c[1][3].add(g(0,a,r.isFunction(b)?b:N)),c[2][3].add(g(0,a,r.isFunction(d)?d:O))}).promise()},promise:function(a){return null!=a?r.extend(a,e):e}},f={};return r.each(c,function(a,b){var g=b[2],h=b[5];e[b[1]]=g.add,h&&g.add(function(){d=h},c[3-a][2].disable,c[0][2].lock),g.add(b[3].fire),f[b[0]]=function(){return f[b[0]+"With"](this===f?void 0:this,arguments),this},f[b[0]+"With"]=g.fireWith}),e.promise(f),b&&b.call(f,f),f},when:function(a){var b=arguments.length,c=b,d=Array(c),e=f.call(arguments),g=r.Deferred(),h=function(a){return function(c){d[a]=this,e[a]=arguments.length>1?f.call(arguments):c,--b||g.resolveWith(d,e)}};if(b<=1&&(P(a,g.done(h(c)).resolve,g.reject,!b),"pending"===g.state()||r.isFunction(e[c]&&e[c].then)))return g.then();while(c--)P(e[c],h(c),g.reject);return g.promise()}});var Q=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;r.Deferred.exceptionHook=function(b,c){a.console&&a.console.warn&&b&&Q.test(b.name)&&a.console.warn("jQuery.Deferred exception: "+b.message,b.stack,c)},r.readyException=function(b){a.setTimeout(function(){throw b})};var R=r.Deferred();r.fn.ready=function(a){return R.then(a)["catch"](function(a){r.readyException(a)}),this},r.extend({isReady:!1,readyWait:1,ready:function(a){(a===!0?--r.readyWait:r.isReady)||(r.isReady=!0,a!==!0&&--r.readyWait>0||R.resolveWith(d,[r]))}}),r.ready.then=R.then;function S(){d.removeEventListener("DOMContentLoaded",S),
a.removeEventListener("load",S),r.ready()}"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll?a.setTimeout(r.ready):(d.addEventListener("DOMContentLoaded",S),a.addEventListener("load",S));var T=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===r.type(c)){e=!0;for(h in c)T(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,r.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(r(a),c)})),b))for(;h<i;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},U=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function V(){this.expando=r.expando+V.uid++}V.uid=1,V.prototype={cache:function(a){var b=a[this.expando];return b||(b={},U(a)&&(a.nodeType?a[this.expando]=b:Object.defineProperty(a,this.expando,{value:b,configurable:!0}))),b},set:function(a,b,c){var d,e=this.cache(a);if("string"==typeof b)e[r.camelCase(b)]=c;else for(d in b)e[r.camelCase(d)]=b[d];return e},get:function(a,b){return void 0===b?this.cache(a):a[this.expando]&&a[this.expando][r.camelCase(b)]},access:function(a,b,c){return void 0===b||b&&"string"==typeof b&&void 0===c?this.get(a,b):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d=a[this.expando];if(void 0!==d){if(void 0!==b){Array.isArray(b)?b=b.map(r.camelCase):(b=r.camelCase(b),b=b in d?[b]:b.match(L)||[]),c=b.length;while(c--)delete d[b[c]]}(void 0===b||r.isEmptyObject(d))&&(a.nodeType?a[this.expando]=void 0:delete a[this.expando])}},hasData:function(a){var b=a[this.expando];return void 0!==b&&!r.isEmptyObject(b)}};var W=new V,X=new V,Y=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Z=/[A-Z]/g;function $(a){return"true"===a||"false"!==a&&("null"===a?null:a===+a+""?+a:Y.test(a)?JSON.parse(a):a)}function _(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(Z,"-$&").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c=$(c)}catch(e){}X.set(a,b,c)}else c=void 0;return c}r.extend({hasData:function(a){return X.hasData(a)||W.hasData(a)},data:function(a,b,c){return X.access(a,b,c)},removeData:function(a,b){X.remove(a,b)},_data:function(a,b,c){return W.access(a,b,c)},_removeData:function(a,b){W.remove(a,b)}}),r.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=X.get(f),1===f.nodeType&&!W.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=r.camelCase(d.slice(5)),_(f,d,e[d])));W.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){X.set(this,a)}):T(this,function(b){var c;if(f&&void 0===b){if(c=X.get(f,a),void 0!==c)return c;if(c=_(f,a),void 0!==c)return c}else this.each(function(){X.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){X.remove(this,a)})}}),r.extend({queue:function(a,b,c){var d;if(a)return b=(b||"fx")+"queue",d=W.get(a,b),c&&(!d||Array.isArray(c)?d=W.access(a,b,r.makeArray(c)):d.push(c)),d||[]},dequeue:function(a,b){b=b||"fx";var c=r.queue(a,b),d=c.length,e=c.shift(),f=r._queueHooks(a,b),g=function(){r.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return W.get(a,c)||W.access(a,c,{empty:r.Callbacks("once memory").add(function(){W.remove(a,[b+"queue",c])})})}}),r.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?r.queue(this[0],a):void 0===b?this:this.each(function(){var c=r.queue(this,a,b);r._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&r.dequeue(this,a)})},dequeue:function(a){return this.each(function(){r.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=r.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=W.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var aa=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ba=new RegExp("^(?:([+-])=|)("+aa+")([a-z%]*)$","i"),ca=["Top","Right","Bottom","Left"],da=function(a,b){return a=b||a,"none"===a.style.display||""===a.style.display&&r.contains(a.ownerDocument,a)&&"none"===r.css(a,"display")},ea=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};function fa(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return r.css(a,b,"")},i=h(),j=c&&c[3]||(r.cssNumber[b]?"":"px"),k=(r.cssNumber[b]||"px"!==j&&+i)&&ba.exec(r.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,r.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var ga={};function ha(a){var b,c=a.ownerDocument,d=a.nodeName,e=ga[d];return e?e:(b=c.body.appendChild(c.createElement(d)),e=r.css(b,"display"),b.parentNode.removeChild(b),"none"===e&&(e="block"),ga[d]=e,e)}function ia(a,b){for(var c,d,e=[],f=0,g=a.length;f<g;f++)d=a[f],d.style&&(c=d.style.display,b?("none"===c&&(e[f]=W.get(d,"display")||null,e[f]||(d.style.display="")),""===d.style.display&&da(d)&&(e[f]=ha(d))):"none"!==c&&(e[f]="none",W.set(d,"display",c)));for(f=0;f<g;f++)null!=e[f]&&(a[f].style.display=e[f]);return a}r.fn.extend({show:function(){return ia(this,!0)},hide:function(){return ia(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){da(this)?r(this).show():r(this).hide()})}});var ja=/^(?:checkbox|radio)$/i,ka=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,la=/^$|\/(?:java|ecma)script/i,ma={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ma.optgroup=ma.option,ma.tbody=ma.tfoot=ma.colgroup=ma.caption=ma.thead,ma.th=ma.td;function na(a,b){var c;return c="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):[],void 0===b||b&&B(a,b)?r.merge([a],c):c}function oa(a,b){for(var c=0,d=a.length;c<d;c++)W.set(a[c],"globalEval",!b||W.get(b[c],"globalEval"))}var pa=/<|&#?\w+;/;function qa(a,b,c,d,e){for(var f,g,h,i,j,k,l=b.createDocumentFragment(),m=[],n=0,o=a.length;n<o;n++)if(f=a[n],f||0===f)if("object"===r.type(f))r.merge(m,f.nodeType?[f]:f);else if(pa.test(f)){g=g||l.appendChild(b.createElement("div")),h=(ka.exec(f)||["",""])[1].toLowerCase(),i=ma[h]||ma._default,g.innerHTML=i[1]+r.htmlPrefilter(f)+i[2],k=i[0];while(k--)g=g.lastChild;r.merge(m,g.childNodes),g=l.firstChild,g.textContent=""}else m.push(b.createTextNode(f));l.textContent="",n=0;while(f=m[n++])if(d&&r.inArray(f,d)>-1)e&&e.push(f);else if(j=r.contains(f.ownerDocument,f),g=na(l.appendChild(f),"script"),j&&oa(g),c){k=0;while(f=g[k++])la.test(f.type||"")&&c.push(f)}return l}!function(){var a=d.createDocumentFragment(),b=a.appendChild(d.createElement("div")),c=d.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),o.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",o.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var ra=d.documentElement,sa=/^key/,ta=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,ua=/^([^.]*)(?:\.(.+)|)/;function va(){return!0}function wa(){return!1}function xa(){try{return d.activeElement}catch(a){}}function ya(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)ya(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=wa;else if(!e)return a;return 1===f&&(g=e,e=function(a){return r().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=r.guid++)),a.each(function(){r.event.add(this,b,e,d,c)})}r.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=W.get(a);if(q){c.handler&&(f=c,c=f.handler,e=f.selector),e&&r.find.matchesSelector(ra,e),c.guid||(c.guid=r.guid++),(i=q.events)||(i=q.events={}),(g=q.handle)||(g=q.handle=function(b){return"undefined"!=typeof r&&r.event.triggered!==b.type?r.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(L)||[""],j=b.length;while(j--)h=ua.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n&&(l=r.event.special[n]||{},n=(e?l.delegateType:l.bindType)||n,l=r.event.special[n]||{},k=r.extend({type:n,origType:p,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&r.expr.match.needsContext.test(e),namespace:o.join(".")},f),(m=i[n])||(m=i[n]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,o,g)!==!1||a.addEventListener&&a.addEventListener(n,g)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),r.event.global[n]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=W.hasData(a)&&W.get(a);if(q&&(i=q.events)){b=(b||"").match(L)||[""],j=b.length;while(j--)if(h=ua.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n){l=r.event.special[n]||{},n=(d?l.delegateType:l.bindType)||n,m=i[n]||[],h=h[2]&&new RegExp("(^|\\.)"+o.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&p!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,o,q.handle)!==!1||r.removeEvent(a,n,q.handle),delete i[n])}else for(n in i)r.event.remove(a,n+b[j],c,d,!0);r.isEmptyObject(i)&&W.remove(a,"handle events")}},dispatch:function(a){var b=r.event.fix(a),c,d,e,f,g,h,i=new Array(arguments.length),j=(W.get(this,"events")||{})[b.type]||[],k=r.event.special[b.type]||{};for(i[0]=b,c=1;c<arguments.length;c++)i[c]=arguments[c];if(b.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,b)!==!1){h=r.event.handlers.call(this,b,j),c=0;while((f=h[c++])&&!b.isPropagationStopped()){b.currentTarget=f.elem,d=0;while((g=f.handlers[d++])&&!b.isImmediatePropagationStopped())b.rnamespace&&!b.rnamespace.test(g.namespace)||(b.handleObj=g,b.data=g.data,e=((r.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(b.result=e)===!1&&(b.preventDefault(),b.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,b),b.result}},handlers:function(a,b){var c,d,e,f,g,h=[],i=b.delegateCount,j=a.target;if(i&&j.nodeType&&!("click"===a.type&&a.button>=1))for(;j!==this;j=j.parentNode||this)if(1===j.nodeType&&("click"!==a.type||j.disabled!==!0)){for(f=[],g={},c=0;c<i;c++)d=b[c],e=d.selector+" ",void 0===g[e]&&(g[e]=d.needsContext?r(e,this).index(j)>-1:r.find(e,this,null,[j]).length),g[e]&&f.push(d);f.length&&h.push({elem:j,handlers:f})}return j=this,i<b.length&&h.push({elem:j,handlers:b.slice(i)}),h},addProp:function(a,b){Object.defineProperty(r.Event.prototype,a,{enumerable:!0,configurable:!0,get:r.isFunction(b)?function(){if(this.originalEvent)return b(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[a]},set:function(b){Object.defineProperty(this,a,{enumerable:!0,configurable:!0,writable:!0,value:b})}})},fix:function(a){return a[r.expando]?a:new r.Event(a)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==xa()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===xa()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&B(this,"input"))return this.click(),!1},_default:function(a){return B(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}}},r.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)},r.Event=function(a,b){return this instanceof r.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?va:wa,this.target=a.target&&3===a.target.nodeType?a.target.parentNode:a.target,this.currentTarget=a.currentTarget,this.relatedTarget=a.relatedTarget):this.type=a,b&&r.extend(this,b),this.timeStamp=a&&a.timeStamp||r.now(),void(this[r.expando]=!0)):new r.Event(a,b)},r.Event.prototype={constructor:r.Event,isDefaultPrevented:wa,isPropagationStopped:wa,isImmediatePropagationStopped:wa,isSimulated:!1,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=va,a&&!this.isSimulated&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=va,a&&!this.isSimulated&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=va,a&&!this.isSimulated&&a.stopImmediatePropagation(),this.stopPropagation()}},r.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(a){var b=a.button;return null==a.which&&sa.test(a.type)?null!=a.charCode?a.charCode:a.keyCode:!a.which&&void 0!==b&&ta.test(a.type)?1&b?1:2&b?3:4&b?2:0:a.which}},r.event.addProp),r.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){r.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||r.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),r.fn.extend({on:function(a,b,c,d){return ya(this,a,b,c,d)},one:function(a,b,c,d){return ya(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,r(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=wa),this.each(function(){r.event.remove(this,a,c,b)})}});var za=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,Aa=/<script|<style|<link/i,Ba=/checked\s*(?:[^=]|=\s*.checked.)/i,Ca=/^true\/(.*)/,Da=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Ea(a,b){return B(a,"table")&&B(11!==b.nodeType?b:b.firstChild,"tr")?r(">tbody",a)[0]||a:a}function Fa(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function Ga(a){var b=Ca.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function Ha(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(W.hasData(a)&&(f=W.access(a),g=W.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;c<d;c++)r.event.add(b,e,j[e][c])}X.hasData(a)&&(h=X.access(a),i=r.extend({},h),X.set(b,i))}}function Ia(a,b){var c=b.nodeName.toLowerCase();"input"===c&&ja.test(a.type)?b.checked=a.checked:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}function Ja(a,b,c,d){b=g.apply([],b);var e,f,h,i,j,k,l=0,m=a.length,n=m-1,q=b[0],s=r.isFunction(q);if(s||m>1&&"string"==typeof q&&!o.checkClone&&Ba.test(q))return a.each(function(e){var f=a.eq(e);s&&(b[0]=q.call(this,e,f.html())),Ja(f,b,c,d)});if(m&&(e=qa(b,a[0].ownerDocument,!1,a,d),f=e.firstChild,1===e.childNodes.length&&(e=f),f||d)){for(h=r.map(na(e,"script"),Fa),i=h.length;l<m;l++)j=e,l!==n&&(j=r.clone(j,!0,!0),i&&r.merge(h,na(j,"script"))),c.call(a[l],j,l);if(i)for(k=h[h.length-1].ownerDocument,r.map(h,Ga),l=0;l<i;l++)j=h[l],la.test(j.type||"")&&!W.access(j,"globalEval")&&r.contains(k,j)&&(j.src?r._evalUrl&&r._evalUrl(j.src):p(j.textContent.replace(Da,""),k))}return a}function Ka(a,b,c){for(var d,e=b?r.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||r.cleanData(na(d)),d.parentNode&&(c&&r.contains(d.ownerDocument,d)&&oa(na(d,"script")),d.parentNode.removeChild(d));return a}r.extend({htmlPrefilter:function(a){return a.replace(za,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=r.contains(a.ownerDocument,a);if(!(o.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||r.isXMLDoc(a)))for(g=na(h),f=na(a),d=0,e=f.length;d<e;d++)Ia(f[d],g[d]);if(b)if(c)for(f=f||na(a),g=g||na(h),d=0,e=f.length;d<e;d++)Ha(f[d],g[d]);else Ha(a,h);return g=na(h,"script"),g.length>0&&oa(g,!i&&na(a,"script")),h},cleanData:function(a){for(var b,c,d,e=r.event.special,f=0;void 0!==(c=a[f]);f++)if(U(c)){if(b=c[W.expando]){if(b.events)for(d in b.events)e[d]?r.event.remove(c,d):r.removeEvent(c,d,b.handle);c[W.expando]=void 0}c[X.expando]&&(c[X.expando]=void 0)}}}),r.fn.extend({detach:function(a){return Ka(this,a,!0)},remove:function(a){return Ka(this,a)},text:function(a){return T(this,function(a){return void 0===a?r.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=a)})},null,a,arguments.length)},append:function(){return Ja(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ea(this,a);b.appendChild(a)}})},prepend:function(){return Ja(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ea(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return Ja(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return Ja(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(r.cleanData(na(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null!=a&&a,b=null==b?a:b,this.map(function(){return r.clone(this,a,b)})},html:function(a){return T(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!Aa.test(a)&&!ma[(ka.exec(a)||["",""])[1].toLowerCase()]){a=r.htmlPrefilter(a);try{for(;c<d;c++)b=this[c]||{},1===b.nodeType&&(r.cleanData(na(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return Ja(this,arguments,function(b){var c=this.parentNode;r.inArray(this,a)<0&&(r.cleanData(na(this)),c&&c.replaceChild(b,this))},a)}}),r.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){r.fn[a]=function(a){for(var c,d=[],e=r(a),f=e.length-1,g=0;g<=f;g++)c=g===f?this:this.clone(!0),r(e[g])[b](c),h.apply(d,c.get());return this.pushStack(d)}});var La=/^margin/,Ma=new RegExp("^("+aa+")(?!px)[a-z%]+$","i"),Na=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)};!function(){function b(){if(i){i.style.cssText="box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",i.innerHTML="",ra.appendChild(h);var b=a.getComputedStyle(i);c="1%"!==b.top,g="2px"===b.marginLeft,e="4px"===b.width,i.style.marginRight="50%",f="4px"===b.marginRight,ra.removeChild(h),i=null}}var c,e,f,g,h=d.createElement("div"),i=d.createElement("div");i.style&&(i.style.backgroundClip="content-box",i.cloneNode(!0).style.backgroundClip="",o.clearCloneStyle="content-box"===i.style.backgroundClip,h.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",h.appendChild(i),r.extend(o,{pixelPosition:function(){return b(),c},boxSizingReliable:function(){return b(),e},pixelMarginRight:function(){return b(),f},reliableMarginLeft:function(){return b(),g}}))}();function Oa(a,b,c){var d,e,f,g,h=a.style;return c=c||Na(a),c&&(g=c.getPropertyValue(b)||c[b],""!==g||r.contains(a.ownerDocument,a)||(g=r.style(a,b)),!o.pixelMarginRight()&&Ma.test(g)&&La.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function Pa(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Qa=/^(none|table(?!-c[ea]).+)/,Ra=/^--/,Sa={position:"absolute",visibility:"hidden",display:"block"},Ta={letterSpacing:"0",fontWeight:"400"},Ua=["Webkit","Moz","ms"],Va=d.createElement("div").style;function Wa(a){if(a in Va)return a;var b=a[0].toUpperCase()+a.slice(1),c=Ua.length;while(c--)if(a=Ua[c]+b,a in Va)return a}function Xa(a){var b=r.cssProps[a];return b||(b=r.cssProps[a]=Wa(a)||a),b}function Ya(a,b,c){var d=ba.exec(b);return d?Math.max(0,d[2]-(c||0))+(d[3]||"px"):b}function Za(a,b,c,d,e){var f,g=0;for(f=c===(d?"border":"content")?4:"width"===b?1:0;f<4;f+=2)"margin"===c&&(g+=r.css(a,c+ca[f],!0,e)),d?("content"===c&&(g-=r.css(a,"padding"+ca[f],!0,e)),"margin"!==c&&(g-=r.css(a,"border"+ca[f]+"Width",!0,e))):(g+=r.css(a,"padding"+ca[f],!0,e),"padding"!==c&&(g+=r.css(a,"border"+ca[f]+"Width",!0,e)));return g}function $a(a,b,c){var d,e=Na(a),f=Oa(a,b,e),g="border-box"===r.css(a,"boxSizing",!1,e);return Ma.test(f)?f:(d=g&&(o.boxSizingReliable()||f===a.style[b]),"auto"===f&&(f=a["offset"+b[0].toUpperCase()+b.slice(1)]),f=parseFloat(f)||0,f+Za(a,b,c||(g?"border":"content"),d,e)+"px")}r.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Oa(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=r.camelCase(b),i=Ra.test(b),j=a.style;return i||(b=Xa(h)),g=r.cssHooks[b]||r.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:j[b]:(f=typeof c,"string"===f&&(e=ba.exec(c))&&e[1]&&(c=fa(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(r.cssNumber[h]?"":"px")),o.clearCloneStyle||""!==c||0!==b.indexOf("background")||(j[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i?j.setProperty(b,c):j[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=r.camelCase(b),i=Ra.test(b);return i||(b=Xa(h)),g=r.cssHooks[b]||r.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=Oa(a,b,d)),"normal"===e&&b in Ta&&(e=Ta[b]),""===c||c?(f=parseFloat(e),c===!0||isFinite(f)?f||0:e):e}}),r.each(["height","width"],function(a,b){r.cssHooks[b]={get:function(a,c,d){if(c)return!Qa.test(r.css(a,"display"))||a.getClientRects().length&&a.getBoundingClientRect().width?$a(a,b,d):ea(a,Sa,function(){return $a(a,b,d)})},set:function(a,c,d){var e,f=d&&Na(a),g=d&&Za(a,b,d,"border-box"===r.css(a,"boxSizing",!1,f),f);return g&&(e=ba.exec(c))&&"px"!==(e[3]||"px")&&(a.style[b]=c,c=r.css(a,b)),Ya(a,c,g)}}}),r.cssHooks.marginLeft=Pa(o.reliableMarginLeft,function(a,b){if(b)return(parseFloat(Oa(a,"marginLeft"))||a.getBoundingClientRect().left-ea(a,{marginLeft:0},function(){return a.getBoundingClientRect().left}))+"px"}),r.each({margin:"",padding:"",border:"Width"},function(a,b){r.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];d<4;d++)e[a+ca[d]+b]=f[d]||f[d-2]||f[0];return e}},La.test(a)||(r.cssHooks[a+b].set=Ya)}),r.fn.extend({css:function(a,b){return T(this,function(a,b,c){var d,e,f={},g=0;if(Array.isArray(b)){for(d=Na(a),e=b.length;g<e;g++)f[b[g]]=r.css(a,b[g],!1,d);return f}return void 0!==c?r.style(a,b,c):r.css(a,b)},a,b,arguments.length>1)}});function _a(a,b,c,d,e){return new _a.prototype.init(a,b,c,d,e)}r.Tween=_a,_a.prototype={constructor:_a,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||r.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(r.cssNumber[c]?"":"px")},cur:function(){var a=_a.propHooks[this.prop];return a&&a.get?a.get(this):_a.propHooks._default.get(this)},run:function(a){var b,c=_a.propHooks[this.prop];return this.options.duration?this.pos=b=r.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):_a.propHooks._default.set(this),this}},_a.prototype.init.prototype=_a.prototype,_a.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=r.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){r.fx.step[a.prop]?r.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[r.cssProps[a.prop]]&&!r.cssHooks[a.prop]?a.elem[a.prop]=a.now:r.style(a.elem,a.prop,a.now+a.unit)}}},_a.propHooks.scrollTop=_a.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},r.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},r.fx=_a.prototype.init,r.fx.step={};var ab,bb,cb=/^(?:toggle|show|hide)$/,db=/queueHooks$/;function eb(){bb&&(d.hidden===!1&&a.requestAnimationFrame?a.requestAnimationFrame(eb):a.setTimeout(eb,r.fx.interval),r.fx.tick())}function fb(){return a.setTimeout(function(){ab=void 0}),ab=r.now()}function gb(a,b){var c,d=0,e={height:a};for(b=b?1:0;d<4;d+=2-b)c=ca[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function hb(a,b,c){for(var d,e=(kb.tweeners[b]||[]).concat(kb.tweeners["*"]),f=0,g=e.length;f<g;f++)if(d=e[f].call(c,b,a))return d}function ib(a,b,c){var d,e,f,g,h,i,j,k,l="width"in b||"height"in b,m=this,n={},o=a.style,p=a.nodeType&&da(a),q=W.get(a,"fxshow");c.queue||(g=r._queueHooks(a,"fx"),null==g.unqueued&&(g.unqueued=0,h=g.empty.fire,g.empty.fire=function(){g.unqueued||h()}),g.unqueued++,m.always(function(){m.always(function(){g.unqueued--,r.queue(a,"fx").length||g.empty.fire()})}));for(d in b)if(e=b[d],cb.test(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}n[d]=q&&q[d]||r.style(a,d)}if(i=!r.isEmptyObject(b),i||!r.isEmptyObject(n)){l&&1===a.nodeType&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=q&&q.display,null==j&&(j=W.get(a,"display")),k=r.css(a,"display"),"none"===k&&(j?k=j:(ia([a],!0),j=a.style.display||j,k=r.css(a,"display"),ia([a]))),("inline"===k||"inline-block"===k&&null!=j)&&"none"===r.css(a,"float")&&(i||(m.done(function(){o.display=j}),null==j&&(k=o.display,j="none"===k?"":k)),o.display="inline-block")),c.overflow&&(o.overflow="hidden",m.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]})),i=!1;for(d in n)i||(q?"hidden"in q&&(p=q.hidden):q=W.access(a,"fxshow",{display:j}),f&&(q.hidden=!p),p&&ia([a],!0),m.done(function(){p||ia([a]),W.remove(a,"fxshow");for(d in n)r.style(a,d,n[d])})),i=hb(p?q[d]:0,d,m),d in q||(q[d]=i.start,p&&(i.end=i.start,i.start=0))}}function jb(a,b){var c,d,e,f,g;for(c in a)if(d=r.camelCase(c),e=b[d],f=a[c],Array.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=r.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function kb(a,b,c){var d,e,f=0,g=kb.prefilters.length,h=r.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=ab||fb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;g<i;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),f<1&&i?c:(i||h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:r.extend({},b),opts:r.extend(!0,{specialEasing:{},easing:r.easing._default},c),originalProperties:b,originalOptions:c,startTime:ab||fb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=r.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;c<d;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for(jb(k,j.opts.specialEasing);f<g;f++)if(d=kb.prefilters[f].call(j,a,k,j.opts))return r.isFunction(d.stop)&&(r._queueHooks(j.elem,j.opts.queue).stop=r.proxy(d.stop,d)),d;return r.map(k,hb,j),r.isFunction(j.opts.start)&&j.opts.start.call(a,j),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always),r.fx.timer(r.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j}r.Animation=r.extend(kb,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return fa(c.elem,a,ba.exec(b),c),c}]},tweener:function(a,b){r.isFunction(a)?(b=a,a=["*"]):a=a.match(L);for(var c,d=0,e=a.length;d<e;d++)c=a[d],kb.tweeners[c]=kb.tweeners[c]||[],kb.tweeners[c].unshift(b)},prefilters:[ib],prefilter:function(a,b){b?kb.prefilters.unshift(a):kb.prefilters.push(a)}}),r.speed=function(a,b,c){var d=a&&"object"==typeof a?r.extend({},a):{complete:c||!c&&b||r.isFunction(a)&&a,duration:a,easing:c&&b||b&&!r.isFunction(b)&&b};return r.fx.off?d.duration=0:"number"!=typeof d.duration&&(d.duration in r.fx.speeds?d.duration=r.fx.speeds[d.duration]:d.duration=r.fx.speeds._default),null!=d.queue&&d.queue!==!0||(d.queue="fx"),d.old=d.complete,d.complete=function(){r.isFunction(d.old)&&d.old.call(this),d.queue&&r.dequeue(this,d.queue)},d},r.fn.extend({fadeTo:function(a,b,c,d){return this.filter(da).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=r.isEmptyObject(a),f=r.speed(b,c,d),g=function(){var b=kb(this,r.extend({},a),f);(e||W.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=r.timers,g=W.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&db.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||r.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=W.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=r.timers,g=d?d.length:0;for(c.finish=!0,r.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;b<g;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),r.each(["toggle","show","hide"],function(a,b){var c=r.fn[b];r.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(gb(b,!0),a,d,e)}}),r.each({slideDown:gb("show"),slideUp:gb("hide"),slideToggle:gb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){r.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),r.timers=[],r.fx.tick=function(){var a,b=0,c=r.timers;for(ab=r.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||r.fx.stop(),ab=void 0},r.fx.timer=function(a){r.timers.push(a),r.fx.start()},r.fx.interval=13,r.fx.start=function(){bb||(bb=!0,eb())},r.fx.stop=function(){bb=null},r.fx.speeds={slow:600,fast:200,_default:400},r.fn.delay=function(b,c){return b=r.fx?r.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a=d.createElement("input"),b=d.createElement("select"),c=b.appendChild(d.createElement("option"));a.type="checkbox",o.checkOn=""!==a.value,o.optSelected=c.selected,a=d.createElement("input"),a.value="t",a.type="radio",o.radioValue="t"===a.value}();var lb,mb=r.expr.attrHandle;r.fn.extend({attr:function(a,b){return T(this,r.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){r.removeAttr(this,a)})}}),r.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?r.prop(a,b,c):(1===f&&r.isXMLDoc(a)||(e=r.attrHooks[b.toLowerCase()]||(r.expr.match.bool.test(b)?lb:void 0)),void 0!==c?null===c?void r.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=r.find.attr(a,b),
null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!o.radioValue&&"radio"===b&&B(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d=0,e=b&&b.match(L);if(e&&1===a.nodeType)while(c=e[d++])a.removeAttribute(c)}}),lb={set:function(a,b,c){return b===!1?r.removeAttr(a,c):a.setAttribute(c,c),c}},r.each(r.expr.match.bool.source.match(/\w+/g),function(a,b){var c=mb[b]||r.find.attr;mb[b]=function(a,b,d){var e,f,g=b.toLowerCase();return d||(f=mb[g],mb[g]=e,e=null!=c(a,b,d)?g:null,mb[g]=f),e}});var nb=/^(?:input|select|textarea|button)$/i,ob=/^(?:a|area)$/i;r.fn.extend({prop:function(a,b){return T(this,r.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[r.propFix[a]||a]})}}),r.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&r.isXMLDoc(a)||(b=r.propFix[b]||b,e=r.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=r.find.attr(a,"tabindex");return b?parseInt(b,10):nb.test(a.nodeName)||ob.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),o.optSelected||(r.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),r.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){r.propFix[this.toLowerCase()]=this});function pb(a){var b=a.match(L)||[];return b.join(" ")}function qb(a){return a.getAttribute&&a.getAttribute("class")||""}r.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).addClass(a.call(this,b,qb(this)))});if("string"==typeof a&&a){b=a.match(L)||[];while(c=this[i++])if(e=qb(c),d=1===c.nodeType&&" "+pb(e)+" "){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=pb(d),e!==h&&c.setAttribute("class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).removeClass(a.call(this,b,qb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(L)||[];while(c=this[i++])if(e=qb(c),d=1===c.nodeType&&" "+pb(e)+" "){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=pb(d),e!==h&&c.setAttribute("class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):r.isFunction(a)?this.each(function(c){r(this).toggleClass(a.call(this,c,qb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=r(this),f=a.match(L)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else void 0!==a&&"boolean"!==c||(b=qb(this),b&&W.set(this,"__className__",b),this.setAttribute&&this.setAttribute("class",b||a===!1?"":W.get(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+pb(qb(c))+" ").indexOf(b)>-1)return!0;return!1}});var rb=/\r/g;r.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=r.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,r(this).val()):a,null==e?e="":"number"==typeof e?e+="":Array.isArray(e)&&(e=r.map(e,function(a){return null==a?"":a+""})),b=r.valHooks[this.type]||r.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=r.valHooks[e.type]||r.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(rb,""):null==c?"":c)}}}),r.extend({valHooks:{option:{get:function(a){var b=r.find.attr(a,"value");return null!=b?b:pb(r.text(a))}},select:{get:function(a){var b,c,d,e=a.options,f=a.selectedIndex,g="select-one"===a.type,h=g?null:[],i=g?f+1:e.length;for(d=f<0?i:g?f:0;d<i;d++)if(c=e[d],(c.selected||d===f)&&!c.disabled&&(!c.parentNode.disabled||!B(c.parentNode,"optgroup"))){if(b=r(c).val(),g)return b;h.push(b)}return h},set:function(a,b){var c,d,e=a.options,f=r.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=r.inArray(r.valHooks.option.get(d),f)>-1)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),r.each(["radio","checkbox"],function(){r.valHooks[this]={set:function(a,b){if(Array.isArray(b))return a.checked=r.inArray(r(a).val(),b)>-1}},o.checkOn||(r.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var sb=/^(?:focusinfocus|focusoutblur)$/;r.extend(r.event,{trigger:function(b,c,e,f){var g,h,i,j,k,m,n,o=[e||d],p=l.call(b,"type")?b.type:b,q=l.call(b,"namespace")?b.namespace.split("."):[];if(h=i=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!sb.test(p+r.event.triggered)&&(p.indexOf(".")>-1&&(q=p.split("."),p=q.shift(),q.sort()),k=p.indexOf(":")<0&&"on"+p,b=b[r.expando]?b:new r.Event(p,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=q.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:r.makeArray(c,[b]),n=r.event.special[p]||{},f||!n.trigger||n.trigger.apply(e,c)!==!1)){if(!f&&!n.noBubble&&!r.isWindow(e)){for(j=n.delegateType||p,sb.test(j+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),i=h;i===(e.ownerDocument||d)&&o.push(i.defaultView||i.parentWindow||a)}g=0;while((h=o[g++])&&!b.isPropagationStopped())b.type=g>1?j:n.bindType||p,m=(W.get(h,"events")||{})[b.type]&&W.get(h,"handle"),m&&m.apply(h,c),m=k&&h[k],m&&m.apply&&U(h)&&(b.result=m.apply(h,c),b.result===!1&&b.preventDefault());return b.type=p,f||b.isDefaultPrevented()||n._default&&n._default.apply(o.pop(),c)!==!1||!U(e)||k&&r.isFunction(e[p])&&!r.isWindow(e)&&(i=e[k],i&&(e[k]=null),r.event.triggered=p,e[p](),r.event.triggered=void 0,i&&(e[k]=i)),b.result}},simulate:function(a,b,c){var d=r.extend(new r.Event,c,{type:a,isSimulated:!0});r.event.trigger(d,null,b)}}),r.fn.extend({trigger:function(a,b){return this.each(function(){r.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];if(c)return r.event.trigger(a,b,c,!0)}}),r.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(a,b){r.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),r.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),o.focusin="onfocusin"in a,o.focusin||r.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){r.event.simulate(b,a.target,r.event.fix(a))};r.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=W.access(d,b);e||d.addEventListener(a,c,!0),W.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=W.access(d,b)-1;e?W.access(d,b,e):(d.removeEventListener(a,c,!0),W.remove(d,b))}}});var tb=a.location,ub=r.now(),vb=/\?/;r.parseXML=function(b){var c;if(!b||"string"!=typeof b)return null;try{c=(new a.DOMParser).parseFromString(b,"text/xml")}catch(d){c=void 0}return c&&!c.getElementsByTagName("parsererror").length||r.error("Invalid XML: "+b),c};var wb=/\[\]$/,xb=/\r?\n/g,yb=/^(?:submit|button|image|reset|file)$/i,zb=/^(?:input|select|textarea|keygen)/i;function Ab(a,b,c,d){var e;if(Array.isArray(b))r.each(b,function(b,e){c||wb.test(a)?d(a,e):Ab(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==r.type(b))d(a,b);else for(e in b)Ab(a+"["+e+"]",b[e],c,d)}r.param=function(a,b){var c,d=[],e=function(a,b){var c=r.isFunction(b)?b():b;d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(null==c?"":c)};if(Array.isArray(a)||a.jquery&&!r.isPlainObject(a))r.each(a,function(){e(this.name,this.value)});else for(c in a)Ab(c,a[c],b,e);return d.join("&")},r.fn.extend({serialize:function(){return r.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=r.prop(this,"elements");return a?r.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!r(this).is(":disabled")&&zb.test(this.nodeName)&&!yb.test(a)&&(this.checked||!ja.test(a))}).map(function(a,b){var c=r(this).val();return null==c?null:Array.isArray(c)?r.map(c,function(a){return{name:b.name,value:a.replace(xb,"\r\n")}}):{name:b.name,value:c.replace(xb,"\r\n")}}).get()}});var Bb=/%20/g,Cb=/#.*$/,Db=/([?&])_=[^&]*/,Eb=/^(.*?):[ \t]*([^\r\n]*)$/gm,Fb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Gb=/^(?:GET|HEAD)$/,Hb=/^\/\//,Ib={},Jb={},Kb="*/".concat("*"),Lb=d.createElement("a");Lb.href=tb.href;function Mb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(L)||[];if(r.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Nb(a,b,c,d){var e={},f=a===Jb;function g(h){var i;return e[h]=!0,r.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Ob(a,b){var c,d,e=r.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&r.extend(!0,a,d),a}function Pb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}if(f)return f!==i[0]&&i.unshift(f),c[f]}function Qb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}r.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:tb.href,type:"GET",isLocal:Fb.test(tb.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Kb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":r.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Ob(Ob(a,r.ajaxSettings),b):Ob(r.ajaxSettings,a)},ajaxPrefilter:Mb(Ib),ajaxTransport:Mb(Jb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var e,f,g,h,i,j,k,l,m,n,o=r.ajaxSetup({},c),p=o.context||o,q=o.context&&(p.nodeType||p.jquery)?r(p):r.event,s=r.Deferred(),t=r.Callbacks("once memory"),u=o.statusCode||{},v={},w={},x="canceled",y={readyState:0,getResponseHeader:function(a){var b;if(k){if(!h){h={};while(b=Eb.exec(g))h[b[1].toLowerCase()]=b[2]}b=h[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return k?g:null},setRequestHeader:function(a,b){return null==k&&(a=w[a.toLowerCase()]=w[a.toLowerCase()]||a,v[a]=b),this},overrideMimeType:function(a){return null==k&&(o.mimeType=a),this},statusCode:function(a){var b;if(a)if(k)y.always(a[y.status]);else for(b in a)u[b]=[u[b],a[b]];return this},abort:function(a){var b=a||x;return e&&e.abort(b),A(0,b),this}};if(s.promise(y),o.url=((b||o.url||tb.href)+"").replace(Hb,tb.protocol+"//"),o.type=c.method||c.type||o.method||o.type,o.dataTypes=(o.dataType||"*").toLowerCase().match(L)||[""],null==o.crossDomain){j=d.createElement("a");try{j.href=o.url,j.href=j.href,o.crossDomain=Lb.protocol+"//"+Lb.host!=j.protocol+"//"+j.host}catch(z){o.crossDomain=!0}}if(o.data&&o.processData&&"string"!=typeof o.data&&(o.data=r.param(o.data,o.traditional)),Nb(Ib,o,c,y),k)return y;l=r.event&&o.global,l&&0===r.active++&&r.event.trigger("ajaxStart"),o.type=o.type.toUpperCase(),o.hasContent=!Gb.test(o.type),f=o.url.replace(Cb,""),o.hasContent?o.data&&o.processData&&0===(o.contentType||"").indexOf("application/x-www-form-urlencoded")&&(o.data=o.data.replace(Bb,"+")):(n=o.url.slice(f.length),o.data&&(f+=(vb.test(f)?"&":"?")+o.data,delete o.data),o.cache===!1&&(f=f.replace(Db,"$1"),n=(vb.test(f)?"&":"?")+"_="+ub++ +n),o.url=f+n),o.ifModified&&(r.lastModified[f]&&y.setRequestHeader("If-Modified-Since",r.lastModified[f]),r.etag[f]&&y.setRequestHeader("If-None-Match",r.etag[f])),(o.data&&o.hasContent&&o.contentType!==!1||c.contentType)&&y.setRequestHeader("Content-Type",o.contentType),y.setRequestHeader("Accept",o.dataTypes[0]&&o.accepts[o.dataTypes[0]]?o.accepts[o.dataTypes[0]]+("*"!==o.dataTypes[0]?", "+Kb+"; q=0.01":""):o.accepts["*"]);for(m in o.headers)y.setRequestHeader(m,o.headers[m]);if(o.beforeSend&&(o.beforeSend.call(p,y,o)===!1||k))return y.abort();if(x="abort",t.add(o.complete),y.done(o.success),y.fail(o.error),e=Nb(Jb,o,c,y)){if(y.readyState=1,l&&q.trigger("ajaxSend",[y,o]),k)return y;o.async&&o.timeout>0&&(i=a.setTimeout(function(){y.abort("timeout")},o.timeout));try{k=!1,e.send(v,A)}catch(z){if(k)throw z;A(-1,z)}}else A(-1,"No Transport");function A(b,c,d,h){var j,m,n,v,w,x=c;k||(k=!0,i&&a.clearTimeout(i),e=void 0,g=h||"",y.readyState=b>0?4:0,j=b>=200&&b<300||304===b,d&&(v=Pb(o,y,d)),v=Qb(o,v,y,j),j?(o.ifModified&&(w=y.getResponseHeader("Last-Modified"),w&&(r.lastModified[f]=w),w=y.getResponseHeader("etag"),w&&(r.etag[f]=w)),204===b||"HEAD"===o.type?x="nocontent":304===b?x="notmodified":(x=v.state,m=v.data,n=v.error,j=!n)):(n=x,!b&&x||(x="error",b<0&&(b=0))),y.status=b,y.statusText=(c||x)+"",j?s.resolveWith(p,[m,x,y]):s.rejectWith(p,[y,x,n]),y.statusCode(u),u=void 0,l&&q.trigger(j?"ajaxSuccess":"ajaxError",[y,o,j?m:n]),t.fireWith(p,[y,x]),l&&(q.trigger("ajaxComplete",[y,o]),--r.active||r.event.trigger("ajaxStop")))}return y},getJSON:function(a,b,c){return r.get(a,b,c,"json")},getScript:function(a,b){return r.get(a,void 0,b,"script")}}),r.each(["get","post"],function(a,b){r[b]=function(a,c,d,e){return r.isFunction(c)&&(e=e||d,d=c,c=void 0),r.ajax(r.extend({url:a,type:b,dataType:e,data:c,success:d},r.isPlainObject(a)&&a))}}),r._evalUrl=function(a){return r.ajax({url:a,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},r.fn.extend({wrapAll:function(a){var b;return this[0]&&(r.isFunction(a)&&(a=a.call(this[0])),b=r(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this},wrapInner:function(a){return r.isFunction(a)?this.each(function(b){r(this).wrapInner(a.call(this,b))}):this.each(function(){var b=r(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=r.isFunction(a);return this.each(function(c){r(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(a){return this.parent(a).not("body").each(function(){r(this).replaceWith(this.childNodes)}),this}}),r.expr.pseudos.hidden=function(a){return!r.expr.pseudos.visible(a)},r.expr.pseudos.visible=function(a){return!!(a.offsetWidth||a.offsetHeight||a.getClientRects().length)},r.ajaxSettings.xhr=function(){try{return new a.XMLHttpRequest}catch(b){}};var Rb={0:200,1223:204},Sb=r.ajaxSettings.xhr();o.cors=!!Sb&&"withCredentials"in Sb,o.ajax=Sb=!!Sb,r.ajaxTransport(function(b){var c,d;if(o.cors||Sb&&!b.crossDomain)return{send:function(e,f){var g,h=b.xhr();if(h.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(g in b.xhrFields)h[g]=b.xhrFields[g];b.mimeType&&h.overrideMimeType&&h.overrideMimeType(b.mimeType),b.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest");for(g in e)h.setRequestHeader(g,e[g]);c=function(a){return function(){c&&(c=d=h.onload=h.onerror=h.onabort=h.onreadystatechange=null,"abort"===a?h.abort():"error"===a?"number"!=typeof h.status?f(0,"error"):f(h.status,h.statusText):f(Rb[h.status]||h.status,h.statusText,"text"!==(h.responseType||"text")||"string"!=typeof h.responseText?{binary:h.response}:{text:h.responseText},h.getAllResponseHeaders()))}},h.onload=c(),d=h.onerror=c("error"),void 0!==h.onabort?h.onabort=d:h.onreadystatechange=function(){4===h.readyState&&a.setTimeout(function(){c&&d()})},c=c("abort");try{h.send(b.hasContent&&b.data||null)}catch(i){if(c)throw i}},abort:function(){c&&c()}}}),r.ajaxPrefilter(function(a){a.crossDomain&&(a.contents.script=!1)}),r.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return r.globalEval(a),a}}}),r.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),r.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(e,f){b=r("<script>").prop({charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&f("error"===a.type?404:200,a.type)}),d.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Tb=[],Ub=/(=)\?(?=&|$)|\?\?/;r.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Tb.pop()||r.expando+"_"+ub++;return this[a]=!0,a}}),r.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Ub.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Ub.test(b.data)&&"data");if(h||"jsonp"===b.dataTypes[0])return e=b.jsonpCallback=r.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Ub,"$1"+e):b.jsonp!==!1&&(b.url+=(vb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||r.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?r(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Tb.push(e)),g&&r.isFunction(f)&&f(g[0]),g=f=void 0}),"script"}),o.createHTMLDocument=function(){var a=d.implementation.createHTMLDocument("").body;return a.innerHTML="<form></form><form></form>",2===a.childNodes.length}(),r.parseHTML=function(a,b,c){if("string"!=typeof a)return[];"boolean"==typeof b&&(c=b,b=!1);var e,f,g;return b||(o.createHTMLDocument?(b=d.implementation.createHTMLDocument(""),e=b.createElement("base"),e.href=d.location.href,b.head.appendChild(e)):b=d),f=C.exec(a),g=!c&&[],f?[b.createElement(f[1])]:(f=qa([a],b,g),g&&g.length&&r(g).remove(),r.merge([],f.childNodes))},r.fn.load=function(a,b,c){var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=pb(a.slice(h)),a=a.slice(0,h)),r.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&r.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?r("<div>").append(r.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a])})}),this},r.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){r.fn[b]=function(a){return this.on(b,a)}}),r.expr.pseudos.animated=function(a){return r.grep(r.timers,function(b){return a===b.elem}).length},r.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=r.css(a,"position"),l=r(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=r.css(a,"top"),i=r.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),r.isFunction(b)&&(b=b.call(a,c,r.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},r.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){r.offset.setOffset(this,a,b)});var b,c,d,e,f=this[0];if(f)return f.getClientRects().length?(d=f.getBoundingClientRect(),b=f.ownerDocument,c=b.documentElement,e=b.defaultView,{top:d.top+e.pageYOffset-c.clientTop,left:d.left+e.pageXOffset-c.clientLeft}):{top:0,left:0}},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===r.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),B(a[0],"html")||(d=a.offset()),d={top:d.top+r.css(a[0],"borderTopWidth",!0),left:d.left+r.css(a[0],"borderLeftWidth",!0)}),{top:b.top-d.top-r.css(c,"marginTop",!0),left:b.left-d.left-r.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&"static"===r.css(a,"position"))a=a.offsetParent;return a||ra})}}),r.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c="pageYOffset"===b;r.fn[a]=function(d){return T(this,function(a,d,e){var f;return r.isWindow(a)?f=a:9===a.nodeType&&(f=a.defaultView),void 0===e?f?f[b]:a[d]:void(f?f.scrollTo(c?f.pageXOffset:e,c?e:f.pageYOffset):a[d]=e)},a,d,arguments.length)}}),r.each(["top","left"],function(a,b){r.cssHooks[b]=Pa(o.pixelPosition,function(a,c){if(c)return c=Oa(a,b),Ma.test(c)?r(a).position()[b]+"px":c})}),r.each({Height:"height",Width:"width"},function(a,b){r.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){r.fn[d]=function(e,f){var g=arguments.length&&(c||"boolean"!=typeof e),h=c||(e===!0||f===!0?"margin":"border");return T(this,function(b,c,e){var f;return r.isWindow(b)?0===d.indexOf("outer")?b["inner"+a]:b.document.documentElement["client"+a]:9===b.nodeType?(f=b.documentElement,Math.max(b.body["scroll"+a],f["scroll"+a],b.body["offset"+a],f["offset"+a],f["client"+a])):void 0===e?r.css(b,c,h):r.style(b,c,e,h)},b,g?e:void 0,g)}})}),r.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}}),r.holdReady=function(a){a?r.readyWait++:r.ready(!0)},r.isArray=Array.isArray,r.parseJSON=JSON.parse,r.nodeName=B,"function"==typeof define&&define.amd&&define("jquery",[],function(){return r});var Vb=a.jQuery,Wb=a.$;return r.noConflict=function(b){return a.$===r&&(a.$=Wb),b&&a.jQuery===r&&(a.jQuery=Vb),r},b||(a.jQuery=a.$=r),r});

/*!
 * Bootstrap v3.3.7 (http://getbootstrap.com)
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under the MIT license
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(a){"use strict";var b=a.fn.jquery.split(" ")[0].split(".");if(b[0]<2&&b[1]<9||1==b[0]&&9==b[1]&&b[2]<1||b[0]>3)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")}(jQuery),+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]};return!1}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one("bsTransitionEnd",function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b(),a.support.transition&&(a.event.special.bsTransitionEnd={bindType:a.support.transition.end,delegateType:a.support.transition.end,handle:function(b){if(a(b.target).is(this))return b.handleObj.handler.apply(this,arguments)}})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var c=a(this),e=c.data("bs.alert");e||c.data("bs.alert",e=new d(this)),"string"==typeof b&&e[b].call(c)})}var c='[data-dismiss="alert"]',d=function(b){a(b).on("click",c,this.close)};d.VERSION="3.3.7",d.TRANSITION_DURATION=150,d.prototype.close=function(b){function c(){g.detach().trigger("closed.bs.alert").remove()}var e=a(this),f=e.attr("data-target");f||(f=e.attr("href"),f=f&&f.replace(/.*(?=#[^\s]*$)/,""));var g=a("#"===f?[]:f);b&&b.preventDefault(),g.length||(g=e.closest(".alert")),g.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(g.removeClass("in"),a.support.transition&&g.hasClass("fade")?g.one("bsTransitionEnd",c).emulateTransitionEnd(d.TRANSITION_DURATION):c())};var e=a.fn.alert;a.fn.alert=b,a.fn.alert.Constructor=d,a.fn.alert.noConflict=function(){return a.fn.alert=e,this},a(document).on("click.bs.alert.data-api",c,d.prototype.close)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof b&&b;e||d.data("bs.button",e=new c(this,f)),"toggle"==b?e.toggle():b&&e.setState(b)})}var c=function(b,d){this.$element=a(b),this.options=a.extend({},c.DEFAULTS,d),this.isLoading=!1};c.VERSION="3.3.7",c.DEFAULTS={loadingText:"loading..."},c.prototype.setState=function(b){var c="disabled",d=this.$element,e=d.is("input")?"val":"html",f=d.data();b+="Text",null==f.resetText&&d.data("resetText",d[e]()),setTimeout(a.proxy(function(){d[e](null==f[b]?this.options[b]:f[b]),"loadingText"==b?(this.isLoading=!0,d.addClass(c).attr(c,c).prop(c,!0)):this.isLoading&&(this.isLoading=!1,d.removeClass(c).removeAttr(c).prop(c,!1))},this),0)},c.prototype.toggle=function(){var a=!0,b=this.$element.closest('[data-toggle="buttons"]');if(b.length){var c=this.$element.find("input");"radio"==c.prop("type")?(c.prop("checked")&&(a=!1),b.find(".active").removeClass("active"),this.$element.addClass("active")):"checkbox"==c.prop("type")&&(c.prop("checked")!==this.$element.hasClass("active")&&(a=!1),this.$element.toggleClass("active")),c.prop("checked",this.$element.hasClass("active")),a&&c.trigger("change")}else this.$element.attr("aria-pressed",!this.$element.hasClass("active")),this.$element.toggleClass("active")};var d=a.fn.button;a.fn.button=b,a.fn.button.Constructor=c,a.fn.button.noConflict=function(){return a.fn.button=d,this},a(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(c){var d=a(c.target).closest(".btn");b.call(d,"toggle"),a(c.target).is('input[type="radio"], input[type="checkbox"]')||(c.preventDefault(),d.is("input,button")?d.trigger("focus"):d.find("input:visible,button:visible").first().trigger("focus"))}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(b){a(b.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(b.type))})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},c.DEFAULTS,d.data(),"object"==typeof b&&b),g="string"==typeof b?b:f.slide;e||d.data("bs.carousel",e=new c(this,f)),"number"==typeof b?e.to(b):g?e[g]():f.interval&&e.pause().cycle()})}var c=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=null,this.sliding=null,this.interval=null,this.$active=null,this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",a.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart"in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",a.proxy(this.pause,this)).on("mouseleave.bs.carousel",a.proxy(this.cycle,this))};c.VERSION="3.3.7",c.TRANSITION_DURATION=600,c.DEFAULTS={interval:5e3,pause:"hover",wrap:!0,keyboard:!0},c.prototype.keydown=function(a){if(!/input|textarea/i.test(a.target.tagName)){switch(a.which){case 37:this.prev();break;case 39:this.next();break;default:return}a.preventDefault()}},c.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},c.prototype.getItemIndex=function(a){return this.$items=a.parent().children(".item"),this.$items.index(a||this.$active)},c.prototype.getItemForDirection=function(a,b){var c=this.getItemIndex(b),d="prev"==a&&0===c||"next"==a&&c==this.$items.length-1;if(d&&!this.options.wrap)return b;var e="prev"==a?-1:1,f=(c+e)%this.$items.length;return this.$items.eq(f)},c.prototype.to=function(a){var b=this,c=this.getItemIndex(this.$active=this.$element.find(".item.active"));if(!(a>this.$items.length-1||a<0))return this.sliding?this.$element.one("slid.bs.carousel",function(){b.to(a)}):c==a?this.pause().cycle():this.slide(a>c?"next":"prev",this.$items.eq(a))},c.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},c.prototype.next=function(){if(!this.sliding)return this.slide("next")},c.prototype.prev=function(){if(!this.sliding)return this.slide("prev")},c.prototype.slide=function(b,d){var e=this.$element.find(".item.active"),f=d||this.getItemForDirection(b,e),g=this.interval,h="next"==b?"left":"right",i=this;if(f.hasClass("active"))return this.sliding=!1;var j=f[0],k=a.Event("slide.bs.carousel",{relatedTarget:j,direction:h});if(this.$element.trigger(k),!k.isDefaultPrevented()){if(this.sliding=!0,g&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var l=a(this.$indicators.children()[this.getItemIndex(f)]);l&&l.addClass("active")}var m=a.Event("slid.bs.carousel",{relatedTarget:j,direction:h});return a.support.transition&&this.$element.hasClass("slide")?(f.addClass(b),f[0].offsetWidth,e.addClass(h),f.addClass(h),e.one("bsTransitionEnd",function(){f.removeClass([b,h].join(" ")).addClass("active"),e.removeClass(["active",h].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger(m)},0)}).emulateTransitionEnd(c.TRANSITION_DURATION)):(e.removeClass("active"),f.addClass("active"),this.sliding=!1,this.$element.trigger(m)),g&&this.cycle(),this}};var d=a.fn.carousel;a.fn.carousel=b,a.fn.carousel.Constructor=c,a.fn.carousel.noConflict=function(){return a.fn.carousel=d,this};var e=function(c){var d,e=a(this),f=a(e.attr("data-target")||(d=e.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,""));if(f.hasClass("carousel")){var g=a.extend({},f.data(),e.data()),h=e.attr("data-slide-to");h&&(g.interval=!1),b.call(f,g),h&&f.data("bs.carousel").to(h),c.preventDefault()}};a(document).on("click.bs.carousel.data-api","[data-slide]",e).on("click.bs.carousel.data-api","[data-slide-to]",e),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var c=a(this);b.call(c,c.data())})})}(jQuery),+function(a){"use strict";function b(b){var c,d=b.attr("data-target")||(c=b.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"");return a(d)}function c(b){return this.each(function(){var c=a(this),e=c.data("bs.collapse"),f=a.extend({},d.DEFAULTS,c.data(),"object"==typeof b&&b);!e&&f.toggle&&/show|hide/.test(b)&&(f.toggle=!1),e||c.data("bs.collapse",e=new d(this,f)),"string"==typeof b&&e[b]()})}var d=function(b,c){this.$element=a(b),this.options=a.extend({},d.DEFAULTS,c),this.$trigger=a('[data-toggle="collapse"][href="#'+b.id+'"],[data-toggle="collapse"][data-target="#'+b.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};d.VERSION="3.3.7",d.TRANSITION_DURATION=350,d.DEFAULTS={toggle:!0},d.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},d.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var b,e=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");if(!(e&&e.length&&(b=e.data("bs.collapse"),b&&b.transitioning))){var f=a.Event("show.bs.collapse");if(this.$element.trigger(f),!f.isDefaultPrevented()){e&&e.length&&(c.call(e,"hide"),b||e.data("bs.collapse",null));var g=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var h=function(){this.$element.removeClass("collapsing").addClass("collapse in")[g](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return h.call(this);var i=a.camelCase(["scroll",g].join("-"));this.$element.one("bsTransitionEnd",a.proxy(h,this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])}}}},d.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var e=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};return a.support.transition?void this.$element[c](0).one("bsTransitionEnd",a.proxy(e,this)).emulateTransitionEnd(d.TRANSITION_DURATION):e.call(this)}}},d.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},d.prototype.getParent=function(){return a(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(a.proxy(function(c,d){var e=a(d);this.addAriaAndCollapsedClass(b(e),e)},this)).end()},d.prototype.addAriaAndCollapsedClass=function(a,b){var c=a.hasClass("in");a.attr("aria-expanded",c),b.toggleClass("collapsed",!c).attr("aria-expanded",c)};var e=a.fn.collapse;a.fn.collapse=c,a.fn.collapse.Constructor=d,a.fn.collapse.noConflict=function(){return a.fn.collapse=e,this},a(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(d){var e=a(this);e.attr("data-target")||d.preventDefault();var f=b(e),g=f.data("bs.collapse"),h=g?"toggle":e.data();c.call(f,h)})}(jQuery),+function(a){"use strict";function b(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#[A-Za-z]/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}function c(c){c&&3===c.which||(a(e).remove(),a(f).each(function(){var d=a(this),e=b(d),f={relatedTarget:this};e.hasClass("open")&&(c&&"click"==c.type&&/input|textarea/i.test(c.target.tagName)&&a.contains(e[0],c.target)||(e.trigger(c=a.Event("hide.bs.dropdown",f)),c.isDefaultPrevented()||(d.attr("aria-expanded","false"),e.removeClass("open").trigger(a.Event("hidden.bs.dropdown",f)))))}))}function d(b){return this.each(function(){var c=a(this),d=c.data("bs.dropdown");d||c.data("bs.dropdown",d=new g(this)),"string"==typeof b&&d[b].call(c)})}var e=".dropdown-backdrop",f='[data-toggle="dropdown"]',g=function(b){a(b).on("click.bs.dropdown",this.toggle)};g.VERSION="3.3.7",g.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=b(e),g=f.hasClass("open");if(c(),!g){"ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click",c);var h={relatedTarget:this};if(f.trigger(d=a.Event("show.bs.dropdown",h)),d.isDefaultPrevented())return;e.trigger("focus").attr("aria-expanded","true"),f.toggleClass("open").trigger(a.Event("shown.bs.dropdown",h))}return!1}},g.prototype.keydown=function(c){if(/(38|40|27|32)/.test(c.which)&&!/input|textarea/i.test(c.target.tagName)){var d=a(this);if(c.preventDefault(),c.stopPropagation(),!d.is(".disabled, :disabled")){var e=b(d),g=e.hasClass("open");if(!g&&27!=c.which||g&&27==c.which)return 27==c.which&&e.find(f).trigger("focus"),d.trigger("click");var h=" li:not(.disabled):visible a",i=e.find(".dropdown-menu"+h);if(i.length){var j=i.index(c.target);38==c.which&&j>0&&j--,40==c.which&&j<i.length-1&&j++,~j||(j=0),i.eq(j).trigger("focus")}}}};var h=a.fn.dropdown;a.fn.dropdown=d,a.fn.dropdown.Constructor=g,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=h,this},a(document).on("click.bs.dropdown.data-api",c).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",f,g.prototype.toggle).on("keydown.bs.dropdown.data-api",f,g.prototype.keydown).on("keydown.bs.dropdown.data-api",".dropdown-menu",g.prototype.keydown)}(jQuery),+function(a){"use strict";function b(b,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},c.DEFAULTS,e.data(),"object"==typeof b&&b);f||e.data("bs.modal",f=new c(this,g)),"string"==typeof b?f[b](d):g.show&&f.show(d)})}var c=function(b,c){this.options=c,this.$body=a(document.body),this.$element=a(b),this.$dialog=this.$element.find(".modal-dialog"),this.$backdrop=null,this.isShown=null,this.originalBodyPad=null,this.scrollbarWidth=0,this.ignoreBackdropClick=!1,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};c.VERSION="3.3.7",c.TRANSITION_DURATION=300,c.BACKDROP_TRANSITION_DURATION=150,c.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},c.prototype.toggle=function(a){return this.isShown?this.hide():this.show(a)},c.prototype.show=function(b){var d=this,e=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(e),this.isShown||e.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.$dialog.on("mousedown.dismiss.bs.modal",function(){d.$element.one("mouseup.dismiss.bs.modal",function(b){a(b.target).is(d.$element)&&(d.ignoreBackdropClick=!0)})}),this.backdrop(function(){var e=a.support.transition&&d.$element.hasClass("fade");d.$element.parent().length||d.$element.appendTo(d.$body),d.$element.show().scrollTop(0),d.adjustDialog(),e&&d.$element[0].offsetWidth,d.$element.addClass("in"),d.enforceFocus();var f=a.Event("shown.bs.modal",{relatedTarget:b});e?d.$dialog.one("bsTransitionEnd",function(){d.$element.trigger("focus").trigger(f)}).emulateTransitionEnd(c.TRANSITION_DURATION):d.$element.trigger("focus").trigger(f)}))},c.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),this.$dialog.off("mousedown.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",a.proxy(this.hideModal,this)).emulateTransitionEnd(c.TRANSITION_DURATION):this.hideModal())},c.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){document===a.target||this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.trigger("focus")},this))},c.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},c.prototype.resize=function(){this.isShown?a(window).on("resize.bs.modal",a.proxy(this.handleUpdate,this)):a(window).off("resize.bs.modal")},c.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.$body.removeClass("modal-open"),a.resetAdjustments(),a.resetScrollbar(),a.$element.trigger("hidden.bs.modal")})},c.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},c.prototype.backdrop=function(b){var d=this,e=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var f=a.support.transition&&e;if(this.$backdrop=a(document.createElement("div")).addClass("modal-backdrop "+e).appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",a.proxy(function(a){return this.ignoreBackdropClick?void(this.ignoreBackdropClick=!1):void(a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus():this.hide()))},this)),f&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;f?this.$backdrop.one("bsTransitionEnd",b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):b()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var g=function(){d.removeBackdrop(),b&&b()};a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):g()}else b&&b()},c.prototype.handleUpdate=function(){this.adjustDialog()},c.prototype.adjustDialog=function(){var a=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&a?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!a?this.scrollbarWidth:""})},c.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},c.prototype.checkScrollbar=function(){var a=window.innerWidth;if(!a){var b=document.documentElement.getBoundingClientRect();a=b.right-Math.abs(b.left)}this.bodyIsOverflowing=document.body.clientWidth<a,this.scrollbarWidth=this.measureScrollbar()},c.prototype.setScrollbar=function(){var a=parseInt(this.$body.css("padding-right")||0,10);this.originalBodyPad=document.body.style.paddingRight||"",this.bodyIsOverflowing&&this.$body.css("padding-right",a+this.scrollbarWidth)},c.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad)},c.prototype.measureScrollbar=function(){var a=document.createElement("div");a.className="modal-scrollbar-measure",this.$body.append(a);var b=a.offsetWidth-a.clientWidth;return this.$body[0].removeChild(a),b};var d=a.fn.modal;a.fn.modal=b,a.fn.modal.Constructor=c,a.fn.modal.noConflict=function(){return a.fn.modal=d,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(c){var d=a(this),e=d.attr("href"),f=a(d.attr("data-target")||e&&e.replace(/.*(?=#[^\s]+$)/,"")),g=f.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(e)&&e},f.data(),d.data());d.is("a")&&c.preventDefault(),f.one("show.bs.modal",function(a){a.isDefaultPrevented()||f.one("hidden.bs.modal",function(){d.is(":visible")&&d.trigger("focus")})}),b.call(f,g,this)})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof b&&b;!e&&/destroy|hide/.test(b)||(e||d.data("bs.tooltip",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.type=null,this.options=null,this.enabled=null,this.timeout=null,this.hoverState=null,this.$element=null,this.inState=null,this.init("tooltip",a,b)};c.VERSION="3.3.7",c.TRANSITION_DURATION=150,c.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},c.prototype.init=function(b,c,d){if(this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d),this.$viewport=this.options.viewport&&a(a.isFunction(this.options.viewport)?this.options.viewport.call(this,this.$element):this.options.viewport.selector||this.options.viewport),this.inState={click:!1,hover:!1,focus:!1},this.$element[0]instanceof document.constructor&&!this.options.selector)throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!");for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focusin",i="hover"==g?"mouseleave":"focusout";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},c.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},c.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusin"==b.type?"focus":"hover"]=!0),c.tip().hasClass("in")||"in"==c.hoverState?void(c.hoverState="in"):(clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?void(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show)):c.show())},c.prototype.isInStateTrue=function(){for(var a in this.inState)if(this.inState[a])return!0;return!1},c.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);if(c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusout"==b.type?"focus":"hover"]=!1),!c.isInStateTrue())return clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?void(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide)):c.hide()},c.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(b);var d=a.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(b.isDefaultPrevented()||!d)return;var e=this,f=this.tip(),g=this.getUID(this.type);this.setContent(),f.attr("id",g),this.$element.attr("aria-describedby",g),this.options.animation&&f.addClass("fade");var h="function"==typeof this.options.placement?this.options.placement.call(this,f[0],this.$element[0]):this.options.placement,i=/\s?auto?\s?/i,j=i.test(h);j&&(h=h.replace(i,"")||"top"),f.detach().css({top:0,left:0,display:"block"}).addClass(h).data("bs."+this.type,this),this.options.container?f.appendTo(this.options.container):f.insertAfter(this.$element),this.$element.trigger("inserted.bs."+this.type);var k=this.getPosition(),l=f[0].offsetWidth,m=f[0].offsetHeight;if(j){var n=h,o=this.getPosition(this.$viewport);h="bottom"==h&&k.bottom+m>o.bottom?"top":"top"==h&&k.top-m<o.top?"bottom":"right"==h&&k.right+l>o.width?"left":"left"==h&&k.left-l<o.left?"right":h,f.removeClass(n).addClass(h)}var p=this.getCalculatedOffset(h,k,l,m);this.applyPlacement(p,h);var q=function(){var a=e.hoverState;e.$element.trigger("shown.bs."+e.type),e.hoverState=null,"out"==a&&e.leave(e)};a.support.transition&&this.$tip.hasClass("fade")?f.one("bsTransitionEnd",q).emulateTransitionEnd(c.TRANSITION_DURATION):q()}},c.prototype.applyPlacement=function(b,c){var d=this.tip(),e=d[0].offsetWidth,f=d[0].offsetHeight,g=parseInt(d.css("margin-top"),10),h=parseInt(d.css("margin-left"),10);isNaN(g)&&(g=0),isNaN(h)&&(h=0),b.top+=g,b.left+=h,a.offset.setOffset(d[0],a.extend({using:function(a){d.css({top:Math.round(a.top),left:Math.round(a.left)})}},b),0),d.addClass("in");var i=d[0].offsetWidth,j=d[0].offsetHeight;"top"==c&&j!=f&&(b.top=b.top+f-j);var k=this.getViewportAdjustedDelta(c,b,i,j);k.left?b.left+=k.left:b.top+=k.top;var l=/top|bottom/.test(c),m=l?2*k.left-e+i:2*k.top-f+j,n=l?"offsetWidth":"offsetHeight";d.offset(b),this.replaceArrow(m,d[0][n],l)},c.prototype.replaceArrow=function(a,b,c){this.arrow().css(c?"left":"top",50*(1-a/b)+"%").css(c?"top":"left","")},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},c.prototype.hide=function(b){function d(){"in"!=e.hoverState&&f.detach(),e.$element&&e.$element.removeAttr("aria-describedby").trigger("hidden.bs."+e.type),b&&b()}var e=this,f=a(this.$tip),g=a.Event("hide.bs."+this.type);if(this.$element.trigger(g),!g.isDefaultPrevented())return f.removeClass("in"),a.support.transition&&f.hasClass("fade")?f.one("bsTransitionEnd",d).emulateTransitionEnd(c.TRANSITION_DURATION):d(),this.hoverState=null,this},c.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},c.prototype.hasContent=function(){return this.getTitle()},c.prototype.getPosition=function(b){b=b||this.$element;var c=b[0],d="BODY"==c.tagName,e=c.getBoundingClientRect();null==e.width&&(e=a.extend({},e,{width:e.right-e.left,height:e.bottom-e.top}));var f=window.SVGElement&&c instanceof window.SVGElement,g=d?{top:0,left:0}:f?null:b.offset(),h={scroll:d?document.documentElement.scrollTop||document.body.scrollTop:b.scrollTop()},i=d?{width:a(window).width(),height:a(window).height()}:null;return a.extend({},e,h,i,g)},c.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},c.prototype.getViewportAdjustedDelta=function(a,b,c,d){var e={top:0,left:0};if(!this.$viewport)return e;var f=this.options.viewport&&this.options.viewport.padding||0,g=this.getPosition(this.$viewport);if(/right|left/.test(a)){var h=b.top-f-g.scroll,i=b.top+f-g.scroll+d;h<g.top?e.top=g.top-h:i>g.top+g.height&&(e.top=g.top+g.height-i)}else{var j=b.left-f,k=b.left+f+c;j<g.left?e.left=g.left-j:k>g.right&&(e.left=g.left+g.width-k)}return e},c.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},c.prototype.getUID=function(a){do a+=~~(1e6*Math.random());while(document.getElementById(a));return a},c.prototype.tip=function(){if(!this.$tip&&(this.$tip=a(this.options.template),1!=this.$tip.length))throw new Error(this.type+" `template` option must consist of exactly 1 top-level element!");return this.$tip},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},c.prototype.enable=function(){this.enabled=!0},c.prototype.disable=function(){this.enabled=!1},c.prototype.toggleEnabled=function(){this.enabled=!this.enabled},c.prototype.toggle=function(b){var c=this;b&&(c=a(b.currentTarget).data("bs."+this.type),c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c))),b?(c.inState.click=!c.inState.click,c.isInStateTrue()?c.enter(c):c.leave(c)):c.tip().hasClass("in")?c.leave(c):c.enter(c)},c.prototype.destroy=function(){var a=this;clearTimeout(this.timeout),this.hide(function(){a.$element.off("."+a.type).removeData("bs."+a.type),a.$tip&&a.$tip.detach(),a.$tip=null,a.$arrow=null,a.$viewport=null,a.$element=null})};var d=a.fn.tooltip;a.fn.tooltip=b,a.fn.tooltip.Constructor=c,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=d,this}}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof b&&b;!e&&/destroy|hide/.test(b)||(e||d.data("bs.popover",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");c.VERSION="3.3.7",c.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),c.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),c.prototype.constructor=c,c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content").children().detach().end()[this.options.html?"string"==typeof c?"html":"append":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},c.prototype.hasContent=function(){return this.getTitle()||this.getContent()},c.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")};var d=a.fn.popover;a.fn.popover=b,a.fn.popover.Constructor=c,a.fn.popover.noConflict=function(){return a.fn.popover=d,this}}(jQuery),+function(a){"use strict";function b(c,d){this.$body=a(document.body),this.$scrollElement=a(a(c).is(document.body)?window:c),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",a.proxy(this.process,this)),this.refresh(),this.process()}function c(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})}b.VERSION="3.3.7",b.DEFAULTS={offset:10},b.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},b.prototype.refresh=function(){var b=this,c="offset",d=0;this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight(),a.isWindow(this.$scrollElement[0])||(c="position",d=this.$scrollElement.scrollTop()),this.$body.find(this.selector).map(function(){var b=a(this),e=b.data("target")||b.attr("href"),f=/^#./.test(e)&&a(e);return f&&f.length&&f.is(":visible")&&[[f[c]().top+d,e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){b.offsets.push(this[0]),b.targets.push(this[1])})},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.getScrollHeight(),d=this.options.offset+c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(this.scrollHeight!=c&&this.refresh(),b>=d)return g!=(a=f[f.length-1])&&this.activate(a);if(g&&b<e[0])return this.activeTarget=null,this.clear();for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(void 0===e[a+1]||b<e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){
this.activeTarget=b,this.clear();var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),d.trigger("activate.bs.scrollspy")},b.prototype.clear=function(){a(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};var d=a.fn.scrollspy;a.fn.scrollspy=c,a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=d,this},a(window).on("load.bs.scrollspy.data-api",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);c.call(b,b.data())})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new c(this)),"string"==typeof b&&e[b]()})}var c=function(b){this.element=a(b)};c.VERSION="3.3.7",c.TRANSITION_DURATION=150,c.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a"),f=a.Event("hide.bs.tab",{relatedTarget:b[0]}),g=a.Event("show.bs.tab",{relatedTarget:e[0]});if(e.trigger(f),b.trigger(g),!g.isDefaultPrevented()&&!f.isDefaultPrevented()){var h=a(d);this.activate(b.closest("li"),c),this.activate(h,h.parent(),function(){e.trigger({type:"hidden.bs.tab",relatedTarget:b[0]}),b.trigger({type:"shown.bs.tab",relatedTarget:e[0]})})}}},c.prototype.activate=function(b,d,e){function f(){g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),h?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu").length&&b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),e&&e()}var g=d.find("> .active"),h=e&&a.support.transition&&(g.length&&g.hasClass("fade")||!!d.find("> .fade").length);g.length&&h?g.one("bsTransitionEnd",f).emulateTransitionEnd(c.TRANSITION_DURATION):f(),g.removeClass("in")};var d=a.fn.tab;a.fn.tab=b,a.fn.tab.Constructor=c,a.fn.tab.noConflict=function(){return a.fn.tab=d,this};var e=function(c){c.preventDefault(),b.call(a(this),"show")};a(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',e).on("click.bs.tab.data-api",'[data-toggle="pill"]',e)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof b&&b;e||d.data("bs.affix",e=new c(this,f)),"string"==typeof b&&e[b]()})}var c=function(b,d){this.options=a.extend({},c.DEFAULTS,d),this.$target=a(this.options.target).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(b),this.affixed=null,this.unpin=null,this.pinnedOffset=null,this.checkPosition()};c.VERSION="3.3.7",c.RESET="affix affix-top affix-bottom",c.DEFAULTS={offset:0,target:window},c.prototype.getState=function(a,b,c,d){var e=this.$target.scrollTop(),f=this.$element.offset(),g=this.$target.height();if(null!=c&&"top"==this.affixed)return e<c&&"top";if("bottom"==this.affixed)return null!=c?!(e+this.unpin<=f.top)&&"bottom":!(e+g<=a-d)&&"bottom";var h=null==this.affixed,i=h?e:f.top,j=h?g:b;return null!=c&&e<=c?"top":null!=d&&i+j>=a-d&&"bottom"},c.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(c.RESET).addClass("affix");var a=this.$target.scrollTop(),b=this.$element.offset();return this.pinnedOffset=b.top-a},c.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},c.prototype.checkPosition=function(){if(this.$element.is(":visible")){var b=this.$element.height(),d=this.options.offset,e=d.top,f=d.bottom,g=Math.max(a(document).height(),a(document.body).height());"object"!=typeof d&&(f=e=d),"function"==typeof e&&(e=d.top(this.$element)),"function"==typeof f&&(f=d.bottom(this.$element));var h=this.getState(g,b,e,f);if(this.affixed!=h){null!=this.unpin&&this.$element.css("top","");var i="affix"+(h?"-"+h:""),j=a.Event(i+".bs.affix");if(this.$element.trigger(j),j.isDefaultPrevented())return;this.affixed=h,this.unpin="bottom"==h?this.getPinnedOffset():null,this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix","affixed")+".bs.affix")}"bottom"==h&&this.$element.offset({top:g-b-f})}};var d=a.fn.affix;a.fn.affix=b,a.fn.affix.Constructor=c,a.fn.affix.noConflict=function(){return a.fn.affix=d,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var c=a(this),d=c.data();d.offset=d.offset||{},null!=d.offsetBottom&&(d.offset.bottom=d.offsetBottom),null!=d.offsetTop&&(d.offset.top=d.offsetTop),b.call(c,d)})})}(jQuery);
   <!-- Custom Theme JavaScript -->

   // Closes the sidebar menu
   $("#menu-close").click(function(e) {
       e.preventDefault();
       $("#sidebar-wrapper").toggleClass("active");
   });
   // Opens the sidebar menu
   $("#menu-toggle").click(function(e) {
       e.preventDefault();
       $("#sidebar-wrapper").toggleClass("active");
   });
   // Scrolls to the selected menu item on the page
  //  $(function() {
  //      $('a[href*=#]:not([href=#],[data-toggle],[data-target],[data-slide])').click(function() {
  //          if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {
  //              var target = $(this.hash);
  //              target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
  //              if (target.length) {
  //                  $('html,body').animate({
  //                      scrollTop: target.offset().top
  //                  }, 1000);
  //                  return false;
  //              }
  //          }
  //      });
  //  });
   //#to-top button appears after scrolling
   var fixed = false;
   $(document).scroll(function() {
       if ($(this).scrollTop() > 250) {
           if (!fixed) {
               fixed = true;
               // $('#to-top').css({position:'fixed', display:'block'});
               $('#to-top').show("slow", function() {
                   $('#to-top').css({
                       position: 'fixed',
                       display: 'block'
                   });
               });
           }
       } else {
           if (fixed) {
               fixed = false;
               $('#to-top').hide("slow", function() {
                   $('#to-top').css({
                       display: 'none'
                   });
               });
           }
       }
   });
   // Disable Google Maps scrolling
   // See http://stackoverflow.com/a/25904582/1607849
   // Disable scroll zooming and bind back the click event
   var onMapMouseleaveHandler = function(event) {
       var that = $(this);
       that.on('click', onMapClickHandler);
       that.off('mouseleave', onMapMouseleaveHandler);
       that.find('iframe').css("pointer-events", "none");
   }
   var onMapClickHandler = function(event) {
           var that = $(this);
           // Disable the click handler until the user leaves the map area
           that.off('click', onMapClickHandler);
           // Enable scrolling zoom
           that.find('iframe').css("pointer-events", "auto");
           // Handle the mouse leave event
           that.on('mouseleave', onMapMouseleaveHandler);
       }
       // Enable map zooming with mouse scroll when the user clicks the map
   $('.map').on('click', onMapClickHandler);


$( document ).ready(function() {
    console.log( "jQuery ready!" );

     $.ajax({
         url: "../assets/creativeautomaton.json",
         dataType: "json",
         success: function (data){
              siteData(data);
         },
         error: function (error){
               console.log('failed...');
               console.log(error);
               var data = null;
          }
     });
    function siteData(data){
         setTimeout(function () {
             console.log(data);
         }, 200);
    }
    function heroAnimation(){
          $('.call-to-action').hide().removeClass('hide');

          setTimeout(function(){
             $('.logo').removeClass('hide').addClass('three-sec slideInDown animated');
             $(".title").each(function (index) {
                 var characters = $(this).text().split("");
                 $this = $(this);
                 $this.empty();
                 $.each(characters, function (i, el) {
                    $this.append("<p class='slideInLeft animated'>" + el + "</p>");
                 });
                  console.log(characters);
             });
             $('.title p').each(function() {
                $(this).hide();
                var letterVal = $(this).text();
                if(letterVal == " "){
                    $(this).css({'margin-left': '2rem'});
                }
             });
          }, 1000);

          $('.title').removeClass('hide');
          $('#hero .container').addClass('done');
          $('.title p').each(function() {
                 var time = 4;
                 $(this).delay(500 * time).show(1000);
          });
         setTimeout(function(){
              $('.call-to-action').delay(1500).show(500);
              $('.hire-us').delay(500).show(1000);
              $('.join-us').delay(500).show(1000);
         }, 10000);
    }
    function heroStatic(){
         $('.call-to-action').hide().removeClass('hide');
         $('.logo').removeClass('hide');
         $('.title').removeClass('hide');
         $('#hero .container').addClass('done');

         var heroTitles = $('.title h2').length;
         var titleNumber = Math.floor(Math.random() * heroTitles);

         $('.title h2').hide().eq(titleNumber).show();
         $('.title p').hide().eq(titleNumber).show();

          console.log(titleNumber, heroTitles);

         $('.call-to-action').delay(1500).show(500);
         $('.hire-us').delay(500).show(1000);
         $('.join-us').delay(500).show(1000);

    }

    var heroVal = localStorage.getItem("heroanimation");
    if (heroVal == null || heroVal === false){
        localStorage.setItem("heroanimation", "false");
        heroAnimation();
        console.log('called  heroAnimation');
    }
    if(heroVal !== "false") {
        localStorage.setItem("heroanimation", "true");
        heroStatic();
        console.log('called  heroStatic');
    }

      $('.panel').on({
          mouseenter: function () {
              //stuff to do on mouse enter
               $('span.fa-stack', this).addClass('bounce');
               $('.get-quote', this).addClass('pulse').removeClass('btn-primary').addClass('btn-danger');
               $('.bg-image', this).addClass('pan-bg');
          },
          mouseleave: function () {
              //stuff to do on mouse leave
              $('span.fa-stack', this).removeClass('bounce');
              $('.get-quote', this).addClass('btn-primary').removeClass('btn-danger pulse');
              $('.bg-image', this).removeClass('pan-bg');
          }
      });

    // $(document).html().replace('[at]', '@');


    $(document).on('scroll', function(){
        var stickyHeader = $('html, body').scrollTop();
        if (stickyHeader >= 100) {
            console.log('reached 100px ');
            $('.hamburger-container').addClass('sticky');
        } else { $('.hamburger-container').removeClass('sticky'); }

        var services = $('.service-panels').offset().top;
        console.log(services);
        if (stickyHeader = services) {
           console.log('reached service-panels');
           $('.service-panels .animated').removeClass('hide');
        }

         var portfolio = $('.portfolio').offset().top;
         console.log(portfolio);
         if (stickyHeader = portfolio) {
            console.log('reached portfolio');
            $('.portfolio .animated').removeClass('hide');
         }
    });



});

$( document ).ready(function() {
    console.log( "Git Commit ready!" );
    var repoURL ="https://api.github.com/repos/creativeautomaton/creativeautomaton.github.io";
    var clientID = "Iv1.e7d53c09d763fb72";
    var clientSecret = "45080ffb34402b42d515b951926f285f0f9a51ac";
    var accesstoken =  "0edbdfc2c1e20c0ff037d61317977f5213ca9d45";
    var user = 'creativeautomaton';
    var pass = 'zjkhdc00';

    var repo = "https://" + user + ":" +  pass + "@github.com/creativeautomaton/creativeautomaton.github.io/"

// git remote
// set-url origin https://christinaswyers:test2017@github.com/christinaswyers/christinaswyers.github.io.git


function getRef(repoURL){
      //get branch SHA
        $.ajax({
            type: "GET",
            url: repoURL + "/git/refs/heads/master",
            contentType: "application/json",
            dataType: "json",
          })
          .done(function( data ) {
            console.log( data );
            var sha = data.object.sha;
            getCommit(sha, repoURL);
          });
}

function getCommit(sha, repoURL){
      $.ajax({
          type: "GET",
          url: repoURL + "/git/commits/" + sha,
          contentType: "application/json",
          dataType: "json"
        })
        .done(function(data) {
            // console.log( data );
            createCommit(data);
            // var parents = data.parents;
            // var treeSHA = data.tree.sha;
            // var author = data.author;
            // var parentsArray = {};
            // $(data.parents).each(function(i) {
            //    parentsArray[i] = parents[i].sha;
            // });
            //  console.log(parentsArray);
            //  console.log(treeSHA);
            //  console.log(author);
            //  createCommit(parentsArray, treeSHA, author, repoURL, sha );
        });
      // createBlob(sha);

}
function createCommit(data){
        console.log(data.parents);
        console.log( JSON.stringify(data.author) );
        console.log(data);

        var author = JSON.stringify(data.author);
        var parents = data.parents[0].sha;
        var tree = JSON.stringify(data.tree.sha);


        console.log(parents);
        //Create a Commit
         $.ajax({
             type: "POST",
             url: repoURL + "/git/commits/" + data.sha,
             contentType: "application/json",
             dataType: "json",
             data: JSON.stringify(
                  {
                    "message": "my commit message",
                    "author": {
                      author
                    },
                    "parents": [
                      parents
                    ],
                    "tree": tree
                  }
              )
           })
           .done(function( data ) {
             console.log( data );
           }).fail(function (data) {
               console.log('failed: ');
              console.log(data);
         });
}

function createBlob(sha){
      console.log(sha);
      var accesstoken =  "9ee638d9227e1af5ec83a5f3ace6ded18497c203";
      var uploadURL = "https://api.github.com/users/creativeautomaton/creativeautomaton.github.io/git/blobs/access_token=" + accesstoken + "/:" + sha;
      // Create a Blob
      $.ajax({
            type: "POST",
            url: uploadURL,
            contentType: "application/json",
            dataType: "json",
            data: JSON.stringify({
                "message": "my commit message",
                "author": {
                  "name": "Scott Chacon",
                  "email": "schacon@gmail.com",
                  "date": "2008-07-09T16:13:30+12:00"
                },
                "parents": [
                  "7d1b31e74ee336d15cbd21741bc88a537ed063a0"
                ],
                "tree": "827efc6d56897b048c772eb4087f854f46256132"
              })
// , headers: { 'Authorization': accesstoken },
        })
        .done(function( data ) {
          console.log( data );
        }).fail(function (data) {
            console.log('failed: ');
           console.log(data);
      });
}

getRef(repoURL);

// function getOAuth(clientID, clientSecret, user, pass){
//       //get authorize
//       console.log('loaded get0auth()  '+ clientID);
//         $.ajax({
//             type: "POST",
//             url: "https://" + user + ":" +  pass + "@github.com/creativeautomaton/creativeautomaton.github.io/",
//             headers: {
//               "username": "creativeautomaton",
//               "password": "zjkhdc00",
//             },
//             beforeSend: function(xhr) {
//               xhr.setRequestHeader("Authorization", "Basic " + btoa("username:password"));
//             },
//             data: '{"creativeautomaton":"zjkhdc00"}',
//             processData: false,
//             accepts: "application/json"
//           }).done(function (data) {
//             console.log('success: ');
//             console.log(data);
//             // code to handle succesful response
//           }).fail(function (data) {
//               console.log('failed: ');
//              console.log(data);
//             // code to handle error response
//         });
//         // $.ajax({
//         //     type: "GET",
//         //     url: "http://github.com/login/oauth/authorize",
//         //     contentType: "application/json",
//         //     dataType: "json",
//         //     data: JSON.stringify(
//         //          {
//         //            "client_id": "Iv1.e7d53c09d763fb72",
//         //            "state": "fvfjhghjfdghdhgdhgfhgf",
//         //            "redirect_uri": "https://www.google.com"
//         //          })
//         //   })
//         //   .fail(function( data ) {
//         //     console.log( data );
//         //   })
//         //   .done(function( data ) {
//         //     console.log( data );
//         //   });
// }
// getOAuth(clientID, clientSecret);

// function getSHA(repoURL){
//       //get branch SHA
//         $.ajax({
//             type: "GET",
//             url: repoURL + "/git/refs/heads/master",
//             contentType: "application/json",
//             dataType: "json",
//           })
//           .done(function( data ) {
//             console.log( data.object.sha );
//             var sha = data.object.sha;
//             getCommit(sha);
//           });
// }
//
// function createBlob(repoURL, accesstoken){
//   // Create a Blob
//
//       $.ajax({
//           type: "POST",
//           url: repoURL + "/blobs",
//           contentType: "application/json",
//           dataType: "json",
//           data: JSON.stringify({
//               "content": "Content of the blob",
//               "encoding": "utf-8"
//           }),
//           headers: { 'Authorization': accesstoken },
//         })
//         .done(function( data ) {
//           console.log( data );
//         }).fail(function (data) {
//             console.log('failed: ');
//            console.log(data);
//           // code to handle error response
//       });
// }
// // createBlob(repoURL);
// function getCommit(sha){
//       $.ajax({
//           type: "GET",
//           url: repoURL + "/git/commits/" + sha,
//           contentType: "application/json",
//           dataType: "json"
//         })
//         .done(function( data ) {
//           console.log( data );
//           var parents = data.parents;
//           var treeSHA = data.tree.sha;
//           var author = data.author;
//           var parentsArray = {};
//            $(data.parents).each(function(i) {
//              parentsArray[i] = parents[i].sha;
//           });
//            console.log(parentsArray);
//            console.log(treeSHA);
//            console.log(author);
//            createCommit(parentsArray, treeSHA, author, repoURL, sha );
//         });
// }
//

 // getSHA(repoURL);
});

// Contact Form Scripts

$(function() {

    $("#contactForm input,#contactForm textarea").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function($form, event, errors) {
            // additional error messages or events
        },
        submitSuccess: function($form, event) {
            event.preventDefault(); // prevent default submit behaviour
            // get values from FORM
            var name = $("input#name").val();
            var email = $("input#email").val();
            var phone = $("input#phone").val();
            var message = $("textarea#message").val();
            var firstName = name; // For Success/Failure Message
            // Check for white space in name for Success/Fail message
            if (firstName.indexOf(' ') >= 0) {
                firstName = name.split(' ').slice(0, -1).join(' ');
            }
            $.ajax({
                url: "././mail/contact_me.php",
                type: "POST",
                data: {
                    name: name,
                    phone: phone,
                    email: email,
                    message: message
                },
                cache: false,
                success: function() {
                    // Success message
                    $('#success').html("<div class='alert alert-success'>");
                    $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#success > .alert-success')
                        .append("<strong>Your message has been sent. </strong>");
                    $('#success > .alert-success')
                        .append('</div>');

                    //clear all fields
                    $('#contactForm').trigger("reset");
                },
                error: function() {
                    // Fail message
                    $('#success').html("<div class='alert alert-danger'>");
                    $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#success > .alert-danger').append($("<strong>").text("Sorry " + firstName + ", it seems that my mail server is not responding. Please try again later!"));
                    $('#success > .alert-danger').append('</div>');
                    //clear all fields
                    $('#contactForm').trigger("reset");
                },
            });
        },
        filter: function() {
            return $(this).is(":visible");
        },
    });

    $("a[data-toggle=\"tab\"]").click(function(e) {
        e.preventDefault();
        $(this).tab("show");
    });
});


/*When clicking on Full hide fail/success boxes */
$('#name').focus(function() {
    $('#success').html('');
});

/* jqBootstrapValidation
 * A plugin for automating validation on Twitter Bootstrap formatted forms.
 *
 * v1.3.6
 *
 * License: MIT <http://opensource.org/licenses/mit-license.php> - see LICENSE file
 *
 * http://ReactiveRaven.github.com/jqBootstrapValidation/
 */

(function( $ ){

	var createdElements = [];

	var defaults = {
		options: {
			prependExistingHelpBlock: false,
			sniffHtml: true, // sniff for 'required', 'maxlength', etc
			preventSubmit: true, // stop the form submit event from firing if validation fails
			submitError: false, // function called if there is an error when trying to submit
			submitSuccess: false, // function called just before a successful submit event is sent to the server
            semanticallyStrict: false, // set to true to tidy up generated HTML output
			autoAdd: {
				helpBlocks: true
			},
            filter: function () {
                // return $(this).is(":visible"); // only validate elements you can see
                return true; // validate everything
            }
		},
    methods: {
      init : function( options ) {

        var settings = $.extend(true, {}, defaults);

        settings.options = $.extend(true, settings.options, options);

        var $siblingElements = this;

        var uniqueForms = $.unique(
          $siblingElements.map( function () {
            return $(this).parents("form")[0];
          }).toArray()
        );

        $(uniqueForms).bind("submit", function (e) {
          var $form = $(this);
          var warningsFound = 0;
          var $inputs = $form.find("input,textarea,select").not("[type=submit],[type=image]").filter(settings.options.filter);
          $inputs.trigger("submit.validation").trigger("validationLostFocus.validation");

          $inputs.each(function (i, el) {
            var $this = $(el),
              $controlGroup = $this.parents(".form-group").first();
            if (
              $controlGroup.hasClass("warning")
            ) {
              $controlGroup.removeClass("warning").addClass("error");
              warningsFound++;
            }
          });

          $inputs.trigger("validationLostFocus.validation");

          if (warningsFound) {
            if (settings.options.preventSubmit) {
              e.preventDefault();
            }
            $form.addClass("error");
            if ($.isFunction(settings.options.submitError)) {
              settings.options.submitError($form, e, $inputs.jqBootstrapValidation("collectErrors", true));
            }
          } else {
            $form.removeClass("error");
            if ($.isFunction(settings.options.submitSuccess)) {
              settings.options.submitSuccess($form, e);
            }
          }
        });

        return this.each(function(){

          // Get references to everything we're interested in
          var $this = $(this),
            $controlGroup = $this.parents(".form-group").first(),
            $helpBlock = $controlGroup.find(".help-block").first(),
            $form = $this.parents("form").first(),
            validatorNames = [];

          // create message container if not exists
          if (!$helpBlock.length && settings.options.autoAdd && settings.options.autoAdd.helpBlocks) {
              $helpBlock = $('<div class="help-block" />');
              $controlGroup.find('.controls').append($helpBlock);
							createdElements.push($helpBlock[0]);
          }

          // =============================================================
          //                                     SNIFF HTML FOR VALIDATORS
          // =============================================================

          // *snort sniff snuffle*

          if (settings.options.sniffHtml) {
            var message = "";
            // ---------------------------------------------------------
            //                                                   PATTERN
            // ---------------------------------------------------------
            if ($this.attr("pattern") !== undefined) {
              message = "Not in the expected format<!-- data-validation-pattern-message to override -->";
              if ($this.data("validationPatternMessage")) {
                message = $this.data("validationPatternMessage");
              }
              $this.data("validationPatternMessage", message);
              $this.data("validationPatternRegex", $this.attr("pattern"));
            }
            // ---------------------------------------------------------
            //                                                       MAX
            // ---------------------------------------------------------
            if ($this.attr("max") !== undefined || $this.attr("aria-valuemax") !== undefined) {
              var max = ($this.attr("max") !== undefined ? $this.attr("max") : $this.attr("aria-valuemax"));
              message = "Too high: Maximum of '" + max + "'<!-- data-validation-max-message to override -->";
              if ($this.data("validationMaxMessage")) {
                message = $this.data("validationMaxMessage");
              }
              $this.data("validationMaxMessage", message);
              $this.data("validationMaxMax", max);
            }
            // ---------------------------------------------------------
            //                                                       MIN
            // ---------------------------------------------------------
            if ($this.attr("min") !== undefined || $this.attr("aria-valuemin") !== undefined) {
              var min = ($this.attr("min") !== undefined ? $this.attr("min") : $this.attr("aria-valuemin"));
              message = "Too low: Minimum of '" + min + "'<!-- data-validation-min-message to override -->";
              if ($this.data("validationMinMessage")) {
                message = $this.data("validationMinMessage");
              }
              $this.data("validationMinMessage", message);
              $this.data("validationMinMin", min);
            }
            // ---------------------------------------------------------
            //                                                 MAXLENGTH
            // ---------------------------------------------------------
            if ($this.attr("maxlength") !== undefined) {
              message = "Too long: Maximum of '" + $this.attr("maxlength") + "' characters<!-- data-validation-maxlength-message to override -->";
              if ($this.data("validationMaxlengthMessage")) {
                message = $this.data("validationMaxlengthMessage");
              }
              $this.data("validationMaxlengthMessage", message);
              $this.data("validationMaxlengthMaxlength", $this.attr("maxlength"));
            }
            // ---------------------------------------------------------
            //                                                 MINLENGTH
            // ---------------------------------------------------------
            if ($this.attr("minlength") !== undefined) {
              message = "Too short: Minimum of '" + $this.attr("minlength") + "' characters<!-- data-validation-minlength-message to override -->";
              if ($this.data("validationMinlengthMessage")) {
                message = $this.data("validationMinlengthMessage");
              }
              $this.data("validationMinlengthMessage", message);
              $this.data("validationMinlengthMinlength", $this.attr("minlength"));
            }
            // ---------------------------------------------------------
            //                                                  REQUIRED
            // ---------------------------------------------------------
            if ($this.attr("required") !== undefined || $this.attr("aria-required") !== undefined) {
              message = settings.builtInValidators.required.message;
              if ($this.data("validationRequiredMessage")) {
                message = $this.data("validationRequiredMessage");
              }
              $this.data("validationRequiredMessage", message);
            }
            // ---------------------------------------------------------
            //                                                    NUMBER
            // ---------------------------------------------------------
            if ($this.attr("type") !== undefined && $this.attr("type").toLowerCase() === "number") {
              message = settings.builtInValidators.number.message;
              if ($this.data("validationNumberMessage")) {
                message = $this.data("validationNumberMessage");
              }
              $this.data("validationNumberMessage", message);
            }
            // ---------------------------------------------------------
            //                                                     EMAIL
            // ---------------------------------------------------------
            if ($this.attr("type") !== undefined && $this.attr("type").toLowerCase() === "email") {
              message = "Not a valid email address<!-- data-validator-validemail-message to override -->";
              if ($this.data("validationValidemailMessage")) {
                message = $this.data("validationValidemailMessage");
              } else if ($this.data("validationEmailMessage")) {
                message = $this.data("validationEmailMessage");
              }
              $this.data("validationValidemailMessage", message);
            }
            // ---------------------------------------------------------
            //                                                MINCHECKED
            // ---------------------------------------------------------
            if ($this.attr("minchecked") !== undefined) {
              message = "Not enough options checked; Minimum of '" + $this.attr("minchecked") + "' required<!-- data-validation-minchecked-message to override -->";
              if ($this.data("validationMincheckedMessage")) {
                message = $this.data("validationMincheckedMessage");
              }
              $this.data("validationMincheckedMessage", message);
              $this.data("validationMincheckedMinchecked", $this.attr("minchecked"));
            }
            // ---------------------------------------------------------
            //                                                MAXCHECKED
            // ---------------------------------------------------------
            if ($this.attr("maxchecked") !== undefined) {
              message = "Too many options checked; Maximum of '" + $this.attr("maxchecked") + "' required<!-- data-validation-maxchecked-message to override -->";
              if ($this.data("validationMaxcheckedMessage")) {
                message = $this.data("validationMaxcheckedMessage");
              }
              $this.data("validationMaxcheckedMessage", message);
              $this.data("validationMaxcheckedMaxchecked", $this.attr("maxchecked"));
            }
          }

          // =============================================================
          //                                       COLLECT VALIDATOR NAMES
          // =============================================================

          // Get named validators
          if ($this.data("validation") !== undefined) {
            validatorNames = $this.data("validation").split(",");
          }

          // Get extra ones defined on the element's data attributes
          $.each($this.data(), function (i, el) {
            var parts = i.replace(/([A-Z])/g, ",$1").split(",");
            if (parts[0] === "validation" && parts[1]) {
              validatorNames.push(parts[1]);
            }
          });

          // =============================================================
          //                                     NORMALISE VALIDATOR NAMES
          // =============================================================

          var validatorNamesToInspect = validatorNames;
          var newValidatorNamesToInspect = [];

          do // repeatedly expand 'shortcut' validators into their real validators
          {
            // Uppercase only the first letter of each name
            $.each(validatorNames, function (i, el) {
              validatorNames[i] = formatValidatorName(el);
            });

            // Remove duplicate validator names
            validatorNames = $.unique(validatorNames);

            // Pull out the new validator names from each shortcut
            newValidatorNamesToInspect = [];
            $.each(validatorNamesToInspect, function(i, el) {
              if ($this.data("validation" + el + "Shortcut") !== undefined) {
                // Are these custom validators?
                // Pull them out!
                $.each($this.data("validation" + el + "Shortcut").split(","), function(i2, el2) {
                  newValidatorNamesToInspect.push(el2);
                });
              } else if (settings.builtInValidators[el.toLowerCase()]) {
                // Is this a recognised built-in?
                // Pull it out!
                var validator = settings.builtInValidators[el.toLowerCase()];
                if (validator.type.toLowerCase() === "shortcut") {
                  $.each(validator.shortcut.split(","), function (i, el) {
                    el = formatValidatorName(el);
                    newValidatorNamesToInspect.push(el);
                    validatorNames.push(el);
                  });
                }
              }
            });

            validatorNamesToInspect = newValidatorNamesToInspect;

          } while (validatorNamesToInspect.length > 0)

          // =============================================================
          //                                       SET UP VALIDATOR ARRAYS
          // =============================================================

          var validators = {};

          $.each(validatorNames, function (i, el) {
            // Set up the 'override' message
            var message = $this.data("validation" + el + "Message");
            var hasOverrideMessage = (message !== undefined);
            var foundValidator = false;
            message =
              (
                message
                  ? message
                  : "'" + el + "' validation failed <!-- Add attribute 'data-validation-" + el.toLowerCase() + "-message' to input to change this message -->"
              )
            ;

            $.each(
              settings.validatorTypes,
              function (validatorType, validatorTemplate) {
                if (validators[validatorType] === undefined) {
                  validators[validatorType] = [];
                }
                if (!foundValidator && $this.data("validation" + el + formatValidatorName(validatorTemplate.name)) !== undefined) {
                  validators[validatorType].push(
                    $.extend(
                      true,
                      {
                        name: formatValidatorName(validatorTemplate.name),
                        message: message
                      },
                      validatorTemplate.init($this, el)
                    )
                  );
                  foundValidator = true;
                }
              }
            );

            if (!foundValidator && settings.builtInValidators[el.toLowerCase()]) {

              var validator = $.extend(true, {}, settings.builtInValidators[el.toLowerCase()]);
              if (hasOverrideMessage) {
                validator.message = message;
              }
              var validatorType = validator.type.toLowerCase();

              if (validatorType === "shortcut") {
                foundValidator = true;
              } else {
                $.each(
                  settings.validatorTypes,
                  function (validatorTemplateType, validatorTemplate) {
                    if (validators[validatorTemplateType] === undefined) {
                      validators[validatorTemplateType] = [];
                    }
                    if (!foundValidator && validatorType === validatorTemplateType.toLowerCase()) {
                      $this.data("validation" + el + formatValidatorName(validatorTemplate.name), validator[validatorTemplate.name.toLowerCase()]);
                      validators[validatorType].push(
                        $.extend(
                          validator,
                          validatorTemplate.init($this, el)
                        )
                      );
                      foundValidator = true;
                    }
                  }
                );
              }
            }

            if (! foundValidator) {
              $.error("Cannot find validation info for '" + el + "'");
            }
          });

          // =============================================================
          //                                         STORE FALLBACK VALUES
          // =============================================================

          $helpBlock.data(
            "original-contents",
            (
              $helpBlock.data("original-contents")
                ? $helpBlock.data("original-contents")
                : $helpBlock.html()
            )
          );

          $helpBlock.data(
            "original-role",
            (
              $helpBlock.data("original-role")
                ? $helpBlock.data("original-role")
                : $helpBlock.attr("role")
            )
          );

          $controlGroup.data(
            "original-classes",
            (
              $controlGroup.data("original-clases")
                ? $controlGroup.data("original-classes")
                : $controlGroup.attr("class")
            )
          );

          $this.data(
            "original-aria-invalid",
            (
              $this.data("original-aria-invalid")
                ? $this.data("original-aria-invalid")
                : $this.attr("aria-invalid")
            )
          );

          // =============================================================
          //                                                    VALIDATION
          // =============================================================

          $this.bind(
            "validation.validation",
            function (event, params) {

              var value = getValue($this);

              // Get a list of the errors to apply
              var errorsFound = [];

              $.each(validators, function (validatorType, validatorTypeArray) {
                if (value || value.length || (params && params.includeEmpty) || (!!settings.validatorTypes[validatorType].blockSubmit && params && !!params.submitting)) {
                  $.each(validatorTypeArray, function (i, validator) {
                    if (settings.validatorTypes[validatorType].validate($this, value, validator)) {
                      errorsFound.push(validator.message);
                    }
                  });
                }
              });

              return errorsFound;
            }
          );

          $this.bind(
            "getValidators.validation",
            function () {
              return validators;
            }
          );

          // =============================================================
          //                                             WATCH FOR CHANGES
          // =============================================================
          $this.bind(
            "submit.validation",
            function () {
              return $this.triggerHandler("change.validation", {submitting: true});
            }
          );
          $this.bind(
            [
              "keyup",
              "focus",
              "blur",
              "click",
              "keydown",
              "keypress",
              "change"
            ].join(".validation ") + ".validation",
            function (e, params) {

              var value = getValue($this);

              var errorsFound = [];

              $controlGroup.find("input,textarea,select").each(function (i, el) {
                var oldCount = errorsFound.length;
                $.each($(el).triggerHandler("validation.validation", params), function (j, message) {
                  errorsFound.push(message);
                });
                if (errorsFound.length > oldCount) {
                  $(el).attr("aria-invalid", "true");
                } else {
                  var original = $this.data("original-aria-invalid");
                  $(el).attr("aria-invalid", (original !== undefined ? original : false));
                }
              });

              $form.find("input,select,textarea").not($this).not("[name=\"" + $this.attr("name") + "\"]").trigger("validationLostFocus.validation");

              errorsFound = $.unique(errorsFound.sort());

              // Were there any errors?
              if (errorsFound.length) {
                // Better flag it up as a warning.
                $controlGroup.removeClass("success error").addClass("warning");

                // How many errors did we find?
                if (settings.options.semanticallyStrict && errorsFound.length === 1) {
                  // Only one? Being strict? Just output it.
                  $helpBlock.html(errorsFound[0] + 
                    ( settings.options.prependExistingHelpBlock ? $helpBlock.data("original-contents") : "" ));
                } else {
                  // Multiple? Being sloppy? Glue them together into an UL.
                  $helpBlock.html("<ul role=\"alert\"><li>" + errorsFound.join("</li><li>") + "</li></ul>" +
                    ( settings.options.prependExistingHelpBlock ? $helpBlock.data("original-contents") : "" ));
                }
              } else {
                $controlGroup.removeClass("warning error success");
                if (value.length > 0) {
                  $controlGroup.addClass("success");
                }
                $helpBlock.html($helpBlock.data("original-contents"));
              }

              if (e.type === "blur") {
                $controlGroup.removeClass("success");
              }
            }
          );
          $this.bind("validationLostFocus.validation", function () {
            $controlGroup.removeClass("success");
          });
        });
      },
      destroy : function( ) {

        return this.each(
          function() {

            var
              $this = $(this),
              $controlGroup = $this.parents(".form-group").first(),
              $helpBlock = $controlGroup.find(".help-block").first();

            // remove our events
            $this.unbind('.validation'); // events are namespaced.
            // reset help text
            $helpBlock.html($helpBlock.data("original-contents"));
            // reset classes
            $controlGroup.attr("class", $controlGroup.data("original-classes"));
            // reset aria
            $this.attr("aria-invalid", $this.data("original-aria-invalid"));
            // reset role
            $helpBlock.attr("role", $this.data("original-role"));
						// remove all elements we created
						if (createdElements.indexOf($helpBlock[0]) > -1) {
							$helpBlock.remove();
						}

          }
        );

      },
      collectErrors : function(includeEmpty) {

        var errorMessages = {};
        this.each(function (i, el) {
          var $el = $(el);
          var name = $el.attr("name");
          var errors = $el.triggerHandler("validation.validation", {includeEmpty: true});
          errorMessages[name] = $.extend(true, errors, errorMessages[name]);
        });

        $.each(errorMessages, function (i, el) {
          if (el.length === 0) {
            delete errorMessages[i];
          }
        });

        return errorMessages;

      },
      hasErrors: function() {

        var errorMessages = [];

        this.each(function (i, el) {
          errorMessages = errorMessages.concat(
            $(el).triggerHandler("getValidators.validation") ? $(el).triggerHandler("validation.validation", {submitting: true}) : []
          );
        });

        return (errorMessages.length > 0);
      },
      override : function (newDefaults) {
        defaults = $.extend(true, defaults, newDefaults);
      }
    },
		validatorTypes: {
      callback: {
        name: "callback",
        init: function ($this, name) {
          return {
            validatorName: name,
            callback: $this.data("validation" + name + "Callback"),
            lastValue: $this.val(),
            lastValid: true,
            lastFinished: true
          };
        },
        validate: function ($this, value, validator) {
          if (validator.lastValue === value && validator.lastFinished) {
            return !validator.lastValid;
          }

          if (validator.lastFinished === true)
          {
            validator.lastValue = value;
            validator.lastValid = true;
            validator.lastFinished = false;

            var rrjqbvValidator = validator;
            var rrjqbvThis = $this;
            executeFunctionByName(
              validator.callback,
              window,
              $this,
              value,
              function (data) {
                if (rrjqbvValidator.lastValue === data.value) {
                  rrjqbvValidator.lastValid = data.valid;
                  if (data.message) {
                    rrjqbvValidator.message = data.message;
                  }
                  rrjqbvValidator.lastFinished = true;
                  rrjqbvThis.data("validation" + rrjqbvValidator.validatorName + "Message", rrjqbvValidator.message);
                  // Timeout is set to avoid problems with the events being considered 'already fired'
                  setTimeout(function () {
                    rrjqbvThis.trigger("change.validation");
                  }, 1); // doesn't need a long timeout, just long enough for the event bubble to burst
                }
              }
            );
          }

          return false;

        }
      },
      ajax: {
        name: "ajax",
        init: function ($this, name) {
          return {
            validatorName: name,
            url: $this.data("validation" + name + "Ajax"),
            lastValue: $this.val(),
            lastValid: true,
            lastFinished: true
          };
        },
        validate: function ($this, value, validator) {
          if (""+validator.lastValue === ""+value && validator.lastFinished === true) {
            return validator.lastValid === false;
          }

          if (validator.lastFinished === true)
          {
            validator.lastValue = value;
            validator.lastValid = true;
            validator.lastFinished = false;
            $.ajax({
              url: validator.url,
              data: "value=" + value + "&field=" + $this.attr("name"),
              dataType: "json",
              success: function (data) {
                if (""+validator.lastValue === ""+data.value) {
                  validator.lastValid = !!(data.valid);
                  if (data.message) {
                    validator.message = data.message;
                  }
                  validator.lastFinished = true;
                  $this.data("validation" + validator.validatorName + "Message", validator.message);
                  // Timeout is set to avoid problems with the events being considered 'already fired'
                  setTimeout(function () {
                    $this.trigger("change.validation");
                  }, 1); // doesn't need a long timeout, just long enough for the event bubble to burst
                }
              },
              failure: function () {
                validator.lastValid = true;
                validator.message = "ajax call failed";
                validator.lastFinished = true;
                $this.data("validation" + validator.validatorName + "Message", validator.message);
                // Timeout is set to avoid problems with the events being considered 'already fired'
                setTimeout(function () {
                  $this.trigger("change.validation");
                }, 1); // doesn't need a long timeout, just long enough for the event bubble to burst
              }
            });
          }

          return false;

        }
      },
			regex: {
				name: "regex",
				init: function ($this, name) {
					return {regex: regexFromString($this.data("validation" + name + "Regex"))};
				},
				validate: function ($this, value, validator) {
					return (!validator.regex.test(value) && ! validator.negative)
						|| (validator.regex.test(value) && validator.negative);
				}
			},
			required: {
				name: "required",
				init: function ($this, name) {
					return {};
				},
				validate: function ($this, value, validator) {
					return !!(value.length === 0  && ! validator.negative)
						|| !!(value.length > 0 && validator.negative);
				},
        blockSubmit: true
			},
			match: {
				name: "match",
				init: function ($this, name) {
					var element = $this.parents("form").first().find("[name=\"" + $this.data("validation" + name + "Match") + "\"]").first();
					element.bind("validation.validation", function () {
						$this.trigger("change.validation", {submitting: true});
					});
					return {"element": element};
				},
				validate: function ($this, value, validator) {
					return (value !== validator.element.val() && ! validator.negative)
						|| (value === validator.element.val() && validator.negative);
				},
        blockSubmit: true
			},
			max: {
				name: "max",
				init: function ($this, name) {
					return {max: $this.data("validation" + name + "Max")};
				},
				validate: function ($this, value, validator) {
					return (parseFloat(value, 10) > parseFloat(validator.max, 10) && ! validator.negative)
						|| (parseFloat(value, 10) <= parseFloat(validator.max, 10) && validator.negative);
				}
			},
			min: {
				name: "min",
				init: function ($this, name) {
					return {min: $this.data("validation" + name + "Min")};
				},
				validate: function ($this, value, validator) {
					return (parseFloat(value) < parseFloat(validator.min) && ! validator.negative)
						|| (parseFloat(value) >= parseFloat(validator.min) && validator.negative);
				}
			},
			maxlength: {
				name: "maxlength",
				init: function ($this, name) {
					return {maxlength: $this.data("validation" + name + "Maxlength")};
				},
				validate: function ($this, value, validator) {
					return ((value.length > validator.maxlength) && ! validator.negative)
						|| ((value.length <= validator.maxlength) && validator.negative);
				}
			},
			minlength: {
				name: "minlength",
				init: function ($this, name) {
					return {minlength: $this.data("validation" + name + "Minlength")};
				},
				validate: function ($this, value, validator) {
					return ((value.length < validator.minlength) && ! validator.negative)
						|| ((value.length >= validator.minlength) && validator.negative);
				}
			},
			maxchecked: {
				name: "maxchecked",
				init: function ($this, name) {
					var elements = $this.parents("form").first().find("[name=\"" + $this.attr("name") + "\"]");
					elements.bind("click.validation", function () {
						$this.trigger("change.validation", {includeEmpty: true});
					});
					return {maxchecked: $this.data("validation" + name + "Maxchecked"), elements: elements};
				},
				validate: function ($this, value, validator) {
					return (validator.elements.filter(":checked").length > validator.maxchecked && ! validator.negative)
						|| (validator.elements.filter(":checked").length <= validator.maxchecked && validator.negative);
				},
        blockSubmit: true
			},
			minchecked: {
				name: "minchecked",
				init: function ($this, name) {
					var elements = $this.parents("form").first().find("[name=\"" + $this.attr("name") + "\"]");
					elements.bind("click.validation", function () {
						$this.trigger("change.validation", {includeEmpty: true});
					});
					return {minchecked: $this.data("validation" + name + "Minchecked"), elements: elements};
				},
				validate: function ($this, value, validator) {
					return (validator.elements.filter(":checked").length < validator.minchecked && ! validator.negative)
						|| (validator.elements.filter(":checked").length >= validator.minchecked && validator.negative);
				},
        blockSubmit: true
			}
		},
		builtInValidators: {
			email: {
				name: "Email",
				type: "shortcut",
				shortcut: "validemail"
			},
			validemail: {
				name: "Validemail",
				type: "regex",
				regex: "[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\\.[A-Za-z]{2,4}",
				message: "Not a valid email address<!-- data-validator-validemail-message to override -->"
			},
			passwordagain: {
				name: "Passwordagain",
				type: "match",
				match: "password",
				message: "Does not match the given password<!-- data-validator-paswordagain-message to override -->"
			},
			positive: {
				name: "Positive",
				type: "shortcut",
				shortcut: "number,positivenumber"
			},
			negative: {
				name: "Negative",
				type: "shortcut",
				shortcut: "number,negativenumber"
			},
			number: {
				name: "Number",
				type: "regex",
				regex: "([+-]?\\\d+(\\\.\\\d*)?([eE][+-]?[0-9]+)?)?",
				message: "Must be a number<!-- data-validator-number-message to override -->"
			},
			integer: {
				name: "Integer",
				type: "regex",
				regex: "[+-]?\\\d+",
				message: "No decimal places allowed<!-- data-validator-integer-message to override -->"
			},
			positivenumber: {
				name: "Positivenumber",
				type: "min",
				min: 0,
				message: "Must be a positive number<!-- data-validator-positivenumber-message to override -->"
			},
			negativenumber: {
				name: "Negativenumber",
				type: "max",
				max: 0,
				message: "Must be a negative number<!-- data-validator-negativenumber-message to override -->"
			},
			required: {
				name: "Required",
				type: "required",
				message: "This is required<!-- data-validator-required-message to override -->"
			},
			checkone: {
				name: "Checkone",
				type: "minchecked",
				minchecked: 1,
				message: "Check at least one option<!-- data-validation-checkone-message to override -->"
			}
		}
	};

	var formatValidatorName = function (name) {
		return name
			.toLowerCase()
			.replace(
				/(^|\s)([a-z])/g ,
				function(m,p1,p2) {
					return p1+p2.toUpperCase();
				}
			)
		;
	};

	var getValue = function ($this) {
		// Extract the value we're talking about
		var value = $this.val();
		var type = $this.attr("type");
		if (type === "checkbox") {
			value = ($this.is(":checked") ? value : "");
		}
		if (type === "radio") {
			value = ($('input[name="' + $this.attr("name") + '"]:checked').length > 0 ? value : "");
		}
		return value;
	};

  function regexFromString(inputstring) {
		return new RegExp("^" + inputstring + "$");
	}

  /**
   * Thanks to Jason Bunting via StackOverflow.com
   *
   * http://stackoverflow.com/questions/359788/how-to-execute-a-javascript-function-when-i-have-its-name-as-a-string#answer-359910
   * Short link: http://tinyurl.com/executeFunctionByName
  **/
  function executeFunctionByName(functionName, context /*, args*/) {
    var args = Array.prototype.slice.call(arguments).splice(2);
    var namespaces = functionName.split(".");
    var func = namespaces.pop();
    for(var i = 0; i < namespaces.length; i++) {
      context = context[namespaces[i]];
    }
    return context[func].apply(this, args);
  }

	$.fn.jqBootstrapValidation = function( method ) {

		if ( defaults.methods[method] ) {
			return defaults.methods[method].apply( this, Array.prototype.slice.call( arguments, 1 ));
		} else if ( typeof method === 'object' || ! method ) {
			return defaults.methods.init.apply( this, arguments );
		} else {
		$.error( 'Method ' +  method + ' does not exist on jQuery.jqBootstrapValidation' );
			return null;
		}

	};

  $.jqBootstrapValidation = function (options) {
    $(":input").not("[type=image],[type=submit]").jqBootstrapValidation.apply(this,arguments);
  };

})( jQuery );
