const tools = [
  {
    name: 'ChatGPT',
    cat: 'writing study coding',
    icon: '✦',
    desc: 'AI assistant for writing, learning, brainstorming and coding.',
    url: 'https://chatgpt.com/',
    free: true
  },
  {
    name: 'Claude',
    cat: 'writing coding study',
    icon: 'C',
    desc: 'AI assistant for analysis, writing, coding and long documents.',
    url: 'https://claude.ai/',
    free: true
  },
  {
    name: 'Gemini',
    cat: 'study writing coding',
    icon: 'G',
    desc: 'Google AI assistant for research, writing, learning and more.',
    url: 'https://gemini.google.com/',
    free: true
  },
  {
    name: 'GitHub Copilot',
    cat: 'coding',
    icon: '⌘',
    desc: 'AI coding assistant that helps write, explain and complete code.',
    url: 'https://github.com/features/copilot',
    free: false
  },
  {
    name: 'Perplexity',
    cat: 'study writing',
    icon: 'P',
    desc: 'AI search and answer engine designed for research.',
    url: 'https://www.perplexity.ai/',
    free: true
  },
  {
    name: 'Canva AI',
    cat: 'image writing',
    icon: 'Ca',
    desc: 'Design platform with AI-powered image, text and creative tools.',
    url: 'https://www.canva.com/ai-image-generator/',
    free: true
  },
  {
    name: 'Adobe Firefly',
    cat: 'image video',
    icon: 'F',
    desc: 'Generative AI tools for images, design and creative workflows.',
    url: 'https://firefly.adobe.com/',
    free: true
  },
  {
    name: 'Runway',
    cat: 'video image',
    icon: 'R',
    desc: 'Generative AI platform for creative video and visual content.',
    url: 'https://runwayml.com/',
    free: true
  },
  {
    name: 'ElevenLabs',
    cat: 'audio video',
    icon: '11',
    desc: 'AI voice and audio generation platform for creators.',
    url: 'https://elevenlabs.io/',
    free: true
  },
  {
    name: 'Hugging Face',
    cat: 'coding image audio',
    icon: '🤗',
    desc: 'Open AI community with models, datasets and demos.',
    url: 'https://huggingface.co/',
    free: true
  },
  {
    name: 'Notion AI',
    cat: 'writing study productivity',
    icon: 'N',
    desc: 'AI features for notes, documents, planning and knowledge work.',
    url: 'https://www.notion.com/product/ai',
    free: true
  },
  {
    name: 'Grammarly',
    cat: 'writing study',
    icon: 'G',
    desc: 'AI writing assistance for clarity, grammar and communication.',
    url: 'https://www.grammarly.com/',
    free: true
  }
];

function render(list) {
  const grid = document.getElementById('toolGrid');
  const empty = document.getElementById('empty');

  if (!grid) return;

  if (list.length === 0) {
    grid.innerHTML = '';
    if (empty) empty.hidden = false;
    return;
  }

  if (empty) empty.hidden = true;

  grid.innerHTML = list.map(tool => `
    <article class="tool">
      <div class="tool-top">
        <div class="logo">${tool.icon}</div>
        <div>
          <h3>${tool.name}</h3>
          <small style="color:#77839b">
            ${tool.cat.split(' ')[0]}
          </small>
        </div>
        <span class="tag">${tool.free ? 'FREE' : 'PRO'}</span>
      </div>

      <p>${tool.desc}</p>

      <div class="tool-actions">
        <a href="${tool.url}" target="_blank" rel="noopener noreferrer">
          Visit tool ↗
        </a>

        <a href="#" onclick="copyTool('${tool.name.replace(/'/g, "\\'")}'); return false;">
          Share
        </a>
      </div>
    </article>
  `).join('');
}

function filterTools() {
  const searchInput = document.getElementById('search');
  const sortSelect = document.getElementById('sort');

  const query = searchInput
    ? searchInput.value.toLowerCase().trim()
    : '';

  const filter = sortSelect
    ? sortSelect.value
    : 'popular';

  let list = tools.filter(tool => {
    const searchable =
      `${tool.name} ${tool.cat} ${tool.desc}`.toLowerCase();

    const matchesSearch = !query || searchable.includes(query);

    const matchesFree =
      filter !== 'free' || tool.free === true;

    return matchesSearch && matchesFree;
  });

  render(list);
}

function quick(category) {
  const searchInput = document.getElementById('search');
  const sortSelect = document.getElementById('sort');

  if (searchInput) {
    searchInput.value = category === 'all' ? '' : category;
  }

  if (sortSelect) {
    sortSelect.value = 'popular';
  }

  filterTools();

  const toolsSection = document.getElementById('tools');

  if (toolsSection) {
    toolsSection.scrollIntoView({
      behavior: 'smooth'
    });
  }
}

function copyTool(name) {
  const text = `${name} — AI Tools Hub`;

  if (navigator.clipboard) {
    navigator.clipboard.writeText(text)
      .then(() => alert('Tool name copied!'))
      .catch(() => alert(text));
  } else {
    alert(text);
  }
}

function toggleMenu() {
  const nav = document.querySelector('nav');

  if (!nav) return;

  nav.style.display =
    nav.style.display === 'flex' ? 'none' : 'flex';

  nav.style.position = 'absolute';
  nav.style.right = '6%';
  nav.style.top = '60px';
  nav.style.flexDirection = 'column';
  nav.style.background = '#0e1422';
  nav.style.padding = '18px';
  nav.style.border = '1px solid #202a3c';
  nav.style.borderRadius = '14px';
}

document.addEventListener('keydown', function(event) {
  if (
    event.key === '/' &&
    document.activeElement &&
    document.activeElement.tagName !== 'INPUT'
  ) {
    event.preventDefault();

    const search = document.getElementById('search');

    if (search) {
      search.focus();
    }
  }
});

document.addEventListener('DOMContentLoaded', function() {
  render(tools);
});
