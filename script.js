const tools=[
{name:'ChatGPT',cat:'writing study coding',icon:'✦',desc:'AI assistant for writing, learning, brainstorming and coding.',url:'https://chatgpt.com/',free:true},
{name:'Claude',cat:'writing coding study',icon:'C',desc:'AI assistant for analysis, writing, coding and long documents.',url:'https://claude.ai/',free:true},
{name:'Gemini',cat:'study writing coding',icon:'G',desc:'Google AI assistant for research, writing, learning and more.',url:'https://gemini.google.com/',free:true},
{name:'GitHub Copilot',cat:'coding',icon:'⌘',desc:'AI coding assistant that helps write, explain and complete code.',url:'https://github.com/features/copilot',free:false},
{name:'Perplexity',cat:'study writing',icon:'P',desc:'AI search and answer engine designed for research.',url:'https://www.perplexity.ai/',free:true},
{name:'Canva AI',cat:'image writing',icon:'Ca',desc:'Design platform with AI-powered image, text and creative tools.',url:'https://www.canva.com/ai-image-generator/',free:true},
{name:'Adobe Firefly',cat:'image video',icon:'F',desc:'Generative AI tools for images, design and creative workflows.',url:'https://firefly.adobe.com/',free:true},
{name:'Runway',cat:'video image',icon:'R',desc:'Generative AI platform for creative video and visual content.',url:'https://runwayml.com/',free:true},
{name:'ElevenLabs',cat:'audio video',icon:'11',desc:'AI voice and audio generation platform for creators.',url:'https://elevenlabs.io/',free:true},
{name:'Hugging Face',cat:'coding image audio',icon:'🤗',desc:'Open AI community with models, datasets and demos.',url:'https://huggingface.co/',free:true},
{name:'Notion AI',cat:'writing study productivity',icon:'N',desc:'AI features for notes, documents, planning and knowledge work.',url:'https://www.notion.com/product/ai',free:true},
{name:'Grammarly',cat:'writing study',icon:'G',desc:'AI writing assistance for clarity, grammar and communication.',url:'https://www.grammarly.com/',free:true}
];
function render(list){const g=document.getElementById('toolGrid');g.innerHTML=list.map(t=>`<article class="tool"><div class="tool-top"><div class="logo">${t.icon}</div><div><h3>${t.name}</h3><small style="color:#77839b">${t.cat.split(' ')[0]}</small></div><span class="tag">${t.free?'FREE':'PRO'}</span></div><p>${t.desc}</p><div class="tool-actions"><a href="${t.url}" target="_blank" rel="noopener">Visit tool ↗</a><a href="#" onclick="copyTool('${t.name}');return false">Share</a></div></article>`).join('');document.getElementById('empty').hidden=list.length>0}
function filterTools(){const q=document.getElementById('search').value.toLowerCase().trim();const s=document.getElementById('sort').value;let list=tools.filter(t=>(!q||(t.name+' '+t.cat+' '+t.desc).toLowerCase().includes(q))&&(s!=='free'||t.free));render(list)}
function quick(cat){document.getElementById('search').value=cat==='all'?'':cat;document.getElementById('sort').value='all';filterTools();document.getElementById('tools').scrollIntoView({behavior:'smooth'})}
function copyTool(name){navigator.clipboard?.writeText(name+' — AI Tools Hub');alert('Tool name copied!')}
function toggleMenu(){const n=document.querySelector('nav');n.style.display=n.style.display==='flex'?'none':'flex';n.style.position='absolute';n.style.right='6%';n.style.top='60px';n.style.flexDirection='column';n.style.background='#0e1422';n.style.padding='18px';n.style.border='1px solid #202a3c';n.style.borderRadius='14px'}
document.addEventListener('keydown',e=>{if(e.key==='/'&&document.activeElement.tagName!=='INPUT'){e.preventDefault();document.getElementById('search').focus()}});render(tools);
