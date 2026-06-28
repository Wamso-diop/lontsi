export const articles = [
  {
    slug: "pourquoi-fastapi-est-devenu-mon-framework-backend",
    title: "Pourquoi FastAPI est devenu mon framework backend de prédilection",
    excerpt: "Après avoir longtemps travaillé avec Django, j'ai découvert FastAPI et sa philosophie orientée performance. Voici pourquoi ce framework a changé ma manière de concevoir des API.",
    category: "Développement",
    date: "15 Juin 2025",
    readTime: "8 min",
    gradient: "from-[#ff6b00] via-[#e85d00] to-[#c44d00]",
    icon: "⚡",
    content: [
      { type: "paragraph", text: "Quand j'ai commencé le développement backend, Django était mon allié naturel. Son ORM puissant, son admin intégré et son écosystème mature m'ont permis de livrer mes premiers projets professionnels. Mais en travaillant sur des API destinées à des applications mobiles et des microservices, j'ai ressenti les limites d'un framework pensé pour le rendu côté serveur." },
      { type: "quote", text: "Un bon framework ne vous impose pas une architecture — il vous donne les outils pour construire la vôtre." },
      { type: "heading", text: "Le déclic : la découverte du typage natif" },
      { type: "paragraph", text: "FastAPI repose sur les type hints de Python 3.6+. Ce n'est pas un détail cosmétique : le typage natif alimente la validation automatique des données, la sérialisation, et la génération de la documentation OpenAPI. Un seul fichier de route remplace ce qui nécessitait un serializer, un viewset et une configuration URL séparée sous Django REST Framework." },
      { type: "code", language: "python", code: `from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

class ProjectCreate(BaseModel):
    title: str
    description: str
    tech_stack: list[str]
    is_published: bool = False

@app.post("/api/projects/", response_model=ProjectCreate)
async def create_project(project: ProjectCreate):
    # La validation est automatique grâce à Pydantic
    # Si le body ne correspond pas au schéma, FastAPI
    # renvoie une erreur 422 détaillée sans code supplémentaire
    return project` },
      { type: "paragraph", text: "Avec Django REST Framework, le même endpoint nécessite un modèle, un serializer, une vue et une URL — quatre fichiers minimum. FastAPI concentre tout dans une fonction décorée, lisible d'un coup d'œil." },
      { type: "heading", text: "Performance : les chiffres parlent" },
      { type: "paragraph", text: "FastAPI est construit sur Starlette et utilise uvicorn comme serveur ASGI. En pratique, sur mes benchmarks avec un endpoint de lecture simple connecté à PostgreSQL, j'ai mesuré des temps de réponse 3 à 5 fois plus rapides qu'avec Django, et une capacité de requêtes concurrentes nettement supérieure grâce au support natif de l'async." },
      { type: "terminal", code: `$ uvicorn main:app --reload
INFO:     Uvicorn running on http://127.0.0.1:8000
INFO:     Started reloader process [28720]
INFO:     Application startup complete.

# Benchmark avec wrk
$ wrk -t12 -c400 -d30s http://127.0.0.1:8000/api/projects/
  Requests/sec:  12,847.23
  Avg Latency:   31.12ms` },
      { type: "heading", text: "La documentation auto-générée : un game changer" },
      { type: "paragraph", text: "Chaque endpoint que vous créez est automatiquement documenté dans une interface Swagger UI accessible sur /docs. Les développeurs frontend avec qui je collabore n'ont plus besoin de me demander le format d'un body ou les codes de retour possibles — tout est là, interactif, testable directement depuis le navigateur." },
      { type: "paragraph", text: "Ce n'est pas un gadget. Chez ADS Ltd, cette documentation auto-générée a réduit de moitié le temps d'intégration entre les équipes back et front. Les QA s'en servent aussi pour tester les endpoints sans Postman." },
      { type: "heading", text: "Quand je reste sur Django" },
      { type: "paragraph", text: "FastAPI n'est pas une solution universelle. Pour les projets qui nécessitent un admin puissant, un système d'authentification clé en main, ou un ORM avec migrations intégrées, Django reste imbattable. Mon approche : Django pour les applications web complètes, FastAPI pour les API pures et les microservices." },
      { type: "code", language: "python", code: `# Mon setup typique : Django + FastAPI en parallèle
# docker-compose.yml

services:
  django-app:
    build: ./django-service
    ports: ["8000:8000"]
    # Admin, auth, modèles complexes

  fastapi-service:
    build: ./fastapi-service
    ports: ["8001:8001"]
    # API haute performance, webhooks, temps réel` },
      { type: "quote", text: "Le meilleur framework est celui qui correspond au problème. Pas celui qui est à la mode." },
      { type: "paragraph", text: "En résumé, FastAPI m'a appris qu'un framework backend peut être à la fois rapide à développer et rapide à l'exécution. Si vous êtes développeur Python et que vous n'avez pas encore essayé FastAPI, je vous encourage fortement à construire un petit projet avec — vous ne reviendrez probablement pas en arrière pour vos API." },
    ],
    relatedSlugs: ["structurer-projet-django-scalabilite", "concevoir-api-restful-bonnes-pratiques"],
  },
  {
    slug: "structurer-projet-django-scalabilite",
    title: "Structurer un projet Django pour la scalabilité : leçons du terrain",
    excerpt: "Un projet qui démarre bien peut vite devenir un cauchemar à maintenir. Les patterns d'architecture que j'applique systématiquement.",
    category: "Architecture",
    date: "02 Juin 2025",
    readTime: "12 min",
    gradient: "from-[#7c3aed] via-[#6d28d9] to-[#5b21b6]",
    icon: "🏗️",
    content: [
      { type: "paragraph", text: "Après plusieurs projets Django livrés en production, j'ai accumulé un ensemble de conventions qui m'évitent de réécrire la même architecture à chaque fois. Cet article est un condensé de ce que j'aurais aimé savoir dès mon premier projet sérieux." },
      { type: "quote", text: "L'architecture d'un projet ne se voit pas dans les fonctionnalités — elle se ressent dans la vitesse à laquelle vous pouvez en ajouter de nouvelles." },
      { type: "heading", text: "Le problème de l'app monolithique" },
      { type: "paragraph", text: "La tentation naturelle avec Django est de tout mettre dans une seule app. Au début, c'est rapide. Mais dès que le projet dépasse 10 modèles et 30 vues, la navigation dans le code devient pénible, les fichiers models.py et views.py deviennent des monstres, et les tests sont difficiles à isoler." },
      { type: "heading", text: "Ma structure de projet standard" },
      { type: "code", language: "bash", code: `project/
├── config/              # Settings, URLs racine, ASGI/WSGI
│   ├── settings/
│   │   ├── base.py      # Settings communs
│   │   ├── dev.py       # Overrides développement
│   │   ├── prod.py      # Overrides production
│   │   └── test.py      # Overrides tests
│   ├── urls.py
│   └── wsgi.py
├── apps/
│   ├── users/           # Authentification, profils
│   ├── projects/        # Logique métier principale
│   ├── notifications/   # Emails, webhooks
│   └── common/          # Mixins, utils partagés
├── services/            # Logique métier complexe
├── tests/
├── manage.py
└── requirements/
    ├── base.txt
    ├── dev.txt
    └── prod.txt` },
      { type: "heading", text: "Le Services Layer : séparer la logique métier" },
      { type: "paragraph", text: "La règle la plus importante que j'applique : les vues ne contiennent pas de logique métier. Elles reçoivent la requête, appellent un service, et renvoient la réponse. Toute la logique complexe vit dans des fonctions de service dédiées." },
      { type: "code", language: "python", code: `# apps/projects/services.py

from django.db import transaction
from .models import Project
from apps.notifications.services import notify_team

@transaction.atomic
def create_project(*, title: str, owner, tech_stack: list) -> Project:
    """Crée un projet et notifie l'équipe."""
    project = Project.objects.create(
        title=title,
        owner=owner,
        tech_stack=tech_stack,
    )
    notify_team(
        event="project_created",
        project=project,
    )
    return project


# apps/projects/views.py — reste minimal

class ProjectCreateView(CreateAPIView):
    def perform_create(self, serializer):
        create_project(
            title=serializer.validated_data["title"],
            owner=self.request.user,
            tech_stack=serializer.validated_data["tech_stack"],
        )` },
      { type: "paragraph", text: "Ce pattern a un avantage énorme : les services sont testables unitairement sans avoir besoin de simuler des requêtes HTTP. Et quand un même service est appelé depuis une vue API et depuis une commande management, la logique n'est écrite qu'une seule fois." },
      { type: "heading", text: "Settings par environnement" },
      { type: "paragraph", text: "Un fichier settings.py unique qui gère dev, staging et prod avec des conditions if/else est une bombe à retardement. Je sépare systématiquement en fichiers distincts qui héritent d'une base commune." },
      { type: "terminal", code: `# Lancer en développement
$ DJANGO_SETTINGS_MODULE=config.settings.dev python manage.py runserver

# Lancer les tests
$ DJANGO_SETTINGS_MODULE=config.settings.test python manage.py test

# En production (via Gunicorn)
$ DJANGO_SETTINGS_MODULE=config.settings.prod gunicorn config.wsgi` },
      { type: "paragraph", text: "Ces conventions ne sont pas révolutionnaires. Mais appliquées avec discipline dès le jour 1, elles font la différence entre un projet maintenable à 6 mois et un projet qu'on redoute d'ouvrir." },
    ],
    relatedSlugs: ["pourquoi-fastapi-est-devenu-mon-framework-backend", "concevoir-api-restful-bonnes-pratiques"],
  },
  {
    slug: "deployer-react-fastapi-docker-compose",
    title: "Déployer une application React + FastAPI avec Docker Compose",
    excerpt: "Comment conteneuriser un projet full-stack, configurer les volumes, le réseau interne, et automatiser le build.",
    category: "DevOps",
    date: "20 Mai 2025",
    readTime: "10 min",
    gradient: "from-[#0ea5e9] via-[#0284c7] to-[#0369a1]",
    icon: "🐳",
    content: [
      { type: "paragraph", text: "Déployer une application full-stack ne devrait pas être un parcours du combattant. Docker Compose permet de définir l'ensemble de votre stack — frontend, backend, base de données — dans un seul fichier, et de tout lancer avec une commande." },
      { type: "heading", text: "L'architecture cible" },
      { type: "paragraph", text: "Notre stack se compose de trois services : une application React servie par Nginx en production, une API FastAPI avec Uvicorn, et une base de données PostgreSQL. Le tout communique via un réseau Docker interne." },
      { type: "code", language: "yaml", code: `# docker-compose.yml
version: "3.8"

services:
  frontend:
    build:
      context: ./frontend
      dockerfile: Dockerfile
    ports:
      - "80:80"
    depends_on:
      - backend
    networks:
      - app-network

  backend:
    build:
      context: ./backend
      dockerfile: Dockerfile
    ports:
      - "8000:8000"
    environment:
      - DATABASE_URL=postgresql://user:pass@db:5432/appdb
      - SECRET_KEY=\${SECRET_KEY}
    depends_on:
      db:
        condition: service_healthy
    networks:
      - app-network

  db:
    image: postgres:15-alpine
    environment:
      - POSTGRES_DB=appdb
      - POSTGRES_USER=user
      - POSTGRES_PASSWORD=pass
    volumes:
      - postgres_data:/var/lib/postgresql/data
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U user -d appdb"]
      interval: 5s
      timeout: 5s
      retries: 5
    networks:
      - app-network

volumes:
  postgres_data:

networks:
  app-network:
    driver: bridge` },
      { type: "heading", text: "Le Dockerfile du backend FastAPI" },
      { type: "code", language: "dockerfile", code: `# backend/Dockerfile
FROM python:3.11-slim

WORKDIR /app

# Installer les dépendances en premier (cache Docker)
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

EXPOSE 8000

CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]` },
      { type: "heading", text: "Le Dockerfile du frontend React" },
      { type: "paragraph", text: "Pour le frontend, on utilise un build multi-stage : Node.js pour le build, puis Nginx pour servir les fichiers statiques. Le résultat est une image finale légère, sans les dépendances de développement." },
      { type: "code", language: "dockerfile", code: `# frontend/Dockerfile
FROM node:18-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80` },
      { type: "heading", text: "Lancement et vérification" },
      { type: "terminal", code: `$ docker compose up --build -d
[+] Building 45.2s (23/23) FINISHED
[+] Running 3/3
 ✔ Container app-db-1        Healthy
 ✔ Container app-backend-1   Started
 ✔ Container app-frontend-1  Started

$ docker compose ps
NAME                STATUS          PORTS
app-db-1            running         5432/tcp
app-backend-1       running         0.0.0.0:8000->8000/tcp
app-frontend-1      running         0.0.0.0:80->80/tcp

$ curl http://localhost:8000/health
{"status": "ok", "database": "connected"}` },
      { type: "quote", text: "Si ça marche sur ma machine, ça marchera partout — à condition que 'ma machine' soit un conteneur Docker." },
      { type: "paragraph", text: "Docker Compose est un outil essentiel dans ma boîte à outils. Même en phase de développement, je l'utilise pour garantir que mon environnement local est identique à la production. Plus de 'ça marche chez moi' — si le compose up passe, le déploiement passera aussi." },
    ],
    relatedSlugs: ["structurer-projet-django-scalabilite", "git-avance-commandes-production"],
  },
  {
    slug: "authentification-jwt-vs-sessions",
    title: "Authentification JWT vs Sessions : quel choix pour votre API ?",
    excerpt: "Deux approches, deux philosophies. Quand privilégier les tokens JWT, quand les sessions côté serveur restent la meilleure option.",
    category: "Sécurité",
    date: "08 Mai 2025",
    readTime: "9 min",
    gradient: "from-[#10b981] via-[#059669] to-[#047857]",
    icon: "🔐",
    content: [
      { type: "paragraph", text: "L'authentification est le fondement de toute application sécurisée, et pourtant c'est souvent le sujet sur lequel les développeurs font les choix les plus arbitraires. 'On met du JWT parce que c'est moderne' — sans comprendre les implications en termes de sécurité, de scalabilité et de complexité." },
      { type: "heading", text: "Sessions côté serveur : le classique éprouvé" },
      { type: "paragraph", text: "Le principe est simple : à la connexion, le serveur crée une session stockée en base de données (ou en mémoire avec Redis), et renvoie un identifiant dans un cookie HttpOnly. À chaque requête, le navigateur renvoie automatiquement ce cookie." },
      { type: "code", language: "python", code: `# Avec Django, c'est natif et sécurisé
# settings.py
SESSION_ENGINE = "django.contrib.sessions.backends.cache"
SESSION_CACHE_ALIAS = "default"
SESSION_COOKIE_HTTPONLY = True    # Inaccessible au JavaScript
SESSION_COOKIE_SECURE = True      # HTTPS uniquement
SESSION_COOKIE_SAMESITE = "Lax"   # Protection CSRF` },
      { type: "heading", text: "JWT : la flexibilité du stateless" },
      { type: "paragraph", text: "Les JSON Web Tokens sont auto-contenus : ils portent les informations de l'utilisateur dans le token lui-même, signé cryptographiquement. Le serveur n'a pas besoin de stocker quoi que ce soit — il vérifie simplement la signature." },
      { type: "code", language: "python", code: `# Avec FastAPI et python-jose
from datetime import datetime, timedelta
from jose import jwt

SECRET_KEY = "votre-clé-secrète-très-longue"
ALGORITHM = "HS256"

def create_access_token(user_id: int) -> str:
    expire = datetime.utcnow() + timedelta(minutes=30)
    payload = {
        "sub": str(user_id),
        "exp": expire,
        "type": "access"
    }
    return jwt.encode(payload, SECRET_KEY, algorithm=ALGORITHM)

def create_refresh_token(user_id: int) -> str:
    expire = datetime.utcnow() + timedelta(days=7)
    payload = {
        "sub": str(user_id),
        "exp": expire,
        "type": "refresh"
    }
    return jwt.encode(payload, SECRET_KEY, algorithm=ALGORITHM)` },
      { type: "heading", text: "Mon verdict : ça dépend du contexte" },
      { type: "paragraph", text: "Après avoir implémenté les deux approches sur des projets réels chez ADS Ltd, voici ma règle :" },
      { type: "paragraph", text: "Sessions pour les applications web classiques (site avec navigateur, admin Django, rendu côté serveur). JWT pour les API consommées par des applications mobiles ou des services tiers où les cookies ne sont pas pratiques." },
      { type: "quote", text: "La sécurité n'est pas un feature — c'est un prérequis. Le choix de l'authentification doit être guidé par votre architecture, pas par les tendances." },
    ],
    relatedSlugs: ["pourquoi-fastapi-est-devenu-mon-framework-backend", "concevoir-api-restful-bonnes-pratiques"],
  },
  {
    slug: "mon-parcours-universite-developpement-professionnel",
    title: "Mon parcours : de l'université au développement professionnel",
    excerpt: "De mes premiers pas en programmation jusqu'à l'ENSPD et mes missions en entreprise. Les étapes clés, les échecs et les découvertes.",
    category: "Carrière",
    date: "25 Avr 2025",
    readTime: "7 min",
    gradient: "from-[#f59e0b] via-[#d97706] to-[#b45309]",
    icon: "🎓",
    content: [
      { type: "paragraph", text: "On me demande souvent comment je suis devenu développeur. La réponse honnête : par curiosité, par obstination, et avec beaucoup de projets ratés qui m'ont appris plus que n'importe quel cours." },
      { type: "heading", text: "Les débuts : Mbouda et la découverte du code" },
      { type: "paragraph", text: "Tout a commencé au Lycée Bilingue de Mbouda, en filière Technologie de l'Informatique. C'est là que j'ai écrit mes premières lignes de code — du HTML basique et du Pascal. Ce n'était pas glamour, mais le déclic était là : je pouvais créer quelque chose à partir de rien." },
      { type: "paragraph", text: "Mon baccalauréat en poche en 2020, j'ai rejoint l'Université de Yaoundé 1 en informatique. Les cours de systèmes d'exploitation et de réseaux m'ont donné les fondamentaux théoriques, mais c'est en dehors des cours que j'ai vraiment appris à programmer — sur des projets personnels, des tutoriels YouTube, et beaucoup d'essais-erreurs." },
      { type: "heading", text: "L'ENSPD : la rigueur de l'ingénierie" },
      { type: "paragraph", text: "Intégrer l'École Nationale Polytechnique de Douala en Génie Logiciel a été un tournant. Ici, on ne code pas juste pour que ça marche — on conçoit des systèmes. L'algorithmique, l'architecture logicielle, la gestion de projets : chaque matière m'a poussé à penser au-delà du code." },
      { type: "quote", text: "L'école m'a appris à penser en systèmes. Le terrain m'a appris à livrer." },
      { type: "heading", text: "Les premières missions professionnelles" },
      { type: "paragraph", text: "Ma mission chez Unilym Service (2023-2024) m'a confronté à la réalité du développement frontend : des interfaces qui doivent être belles, rapides et accessibles. C'est là que j'ai maîtrisé React et Tailwind CSS." },
      { type: "paragraph", text: "Puis est arrivée ADS Ltd (2025), où j'ai basculé côté backend. Concevoir des API pour des compagnies d'assurance m'a appris la rigueur : la sécurité n'est pas optionnelle, la performance est mesurée, et chaque endpoint doit être documenté." },
      { type: "heading", text: "Ce que je retiens" },
      { type: "paragraph", text: "Le développement n'est pas un sprint — c'est un marathon d'apprentissage. Chaque projet raté m'a appris quelque chose. Chaque mission m'a fait progresser. Et je suis convaincu que les meilleures années sont devant moi." },
    ],
    relatedSlugs: ["structurer-projet-django-scalabilite", "creer-interfaces-react-tailwind"],
  },
  {
    slug: "creer-interfaces-react-tailwind",
    title: "Créer des interfaces React performantes avec Tailwind CSS",
    excerpt: "Mes conventions de travail : organisation des classes, composants réutilisables, responsive design, et les pièges à éviter.",
    category: "Design",
    date: "10 Avr 2025",
    readTime: "6 min",
    gradient: "from-[#ec4899] via-[#db2777] to-[#be185d]",
    icon: "🎨",
    content: [
      { type: "paragraph", text: "Quand j'ai découvert Tailwind CSS, ma première réaction a été le scepticisme. Des classes utilitaires directement dans le JSX ? Ça ressemblait à du CSS inline avec des étapes en plus. Puis je l'ai utilisé sur un vrai projet — et je n'ai plus jamais ouvert un fichier CSS séparé pour du styling de composants." },
      { type: "heading", text: "Pourquoi Tailwind fonctionne avec React" },
      { type: "paragraph", text: "React est basé sur les composants. Tailwind est basé sur la composition de classes utilitaires. Les deux partagent la même philosophie : de petites unités composables plutôt que de grandes abstractions monolithiques." },
      { type: "code", language: "jsx", code: `// Un bouton réutilisable avec des variants
const Button = ({ variant = "primary", children, ...props }) => {
  const base = "px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-300";

  const variants = {
    primary: "bg-[#ff6b00] text-white hover:bg-[#e85d00] shadow-lg shadow-[#ff6b00]/20",
    outline: "border-2 border-white/20 text-white hover:bg-white/5",
    ghost: "text-gray-400 hover:text-white hover:bg-white/5",
  };

  return (
    <button className={\`\${base} \${variants[variant]}\`} {...props}>
      {children}
    </button>
  );
};` },
      { type: "heading", text: "Le responsive sans media queries" },
      { type: "paragraph", text: "L'approche mobile-first de Tailwind est intuitive. Au lieu d'écrire des media queries complexes, je préfixe simplement les classes avec le breakpoint cible. Mon portfolio utilise cette approche partout." },
      { type: "code", language: "jsx", code: `// Grille responsive : 1 colonne mobile, 2 tablette, 3 desktop
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {projects.map(project => (
    <ProjectCard key={project.id} {...project} />
  ))}
</div>

// Texte adaptatif
<h1 className="text-3xl sm:text-4xl lg:text-6xl font-black">
  Ingénieur logiciel
</h1>` },
      { type: "heading", text: "Les pièges à éviter" },
      { type: "paragraph", text: "Le piège numéro un : des className de 200 caractères. Si une ligne de classes devient illisible, c'est le signe qu'il faut extraire un composant. Le piège numéro deux : ne pas utiliser les tokens de design (@theme dans Tailwind v4). Sans eux, les couleurs et espacements deviennent incohérents à travers le projet." },
      { type: "quote", text: "Tailwind ne remplace pas la connaissance du CSS — il la suppose. Apprenez Flexbox et Grid avant d'apprendre Tailwind." },
    ],
    relatedSlugs: ["pourquoi-fastapi-est-devenu-mon-framework-backend", "mon-parcours-universite-developpement-professionnel"],
  },
  {
    slug: "postgresql-optimiser-requetes-api",
    title: "PostgreSQL : optimiser ses requêtes pour des API ultra-rapides",
    excerpt: "Comment j'ai réduit les temps de réponse de 3 secondes à 200ms grâce aux index et au select_related.",
    category: "Développement",
    date: "28 Mars 2025",
    readTime: "11 min",
    gradient: "from-[#6366f1] via-[#4f46e5] to-[#4338ca]",
    icon: "🗄️",
    content: [
      { type: "paragraph", text: "Une API lente est presque toujours une base de données mal interrogée. J'ai appris cette leçon de la manière dure : un endpoint qui mettait 3 secondes à répondre en production, à cause de requêtes N+1 que je n'avais pas détectées en développement." },
      { type: "heading", text: "Le problème N+1 : l'ennemi silencieux" },
      { type: "paragraph", text: "Le problème N+1 se produit quand une requête initiale retourne N résultats, et que pour chacun, une requête supplémentaire est exécutée. Avec 100 projets ayant chacun un propriétaire, c'est 101 requêtes au lieu d'une seule." },
      { type: "code", language: "python", code: `# ❌ MAUVAIS : génère N+1 requêtes
projects = Project.objects.all()
for project in projects:
    print(project.owner.username)  # 1 requête par projet !

# ✅ BON : 1 seule requête avec JOIN
projects = Project.objects.select_related("owner").all()
for project in projects:
    print(project.owner.username)  # Aucune requête supplémentaire

# Pour les relations ManyToMany, utiliser prefetch_related
projects = Project.objects.prefetch_related("tags", "contributors").all()` },
      { type: "heading", text: "Les index : l'accélérateur invisible" },
      { type: "paragraph", text: "Un index bien placé peut transformer une requête de 2 secondes en 5 millisecondes. La règle : indexez les colonnes que vous utilisez dans les clauses WHERE, ORDER BY et les jointures fréquentes." },
      { type: "terminal", code: `-- Avant l'index
EXPLAIN ANALYZE SELECT * FROM projects WHERE status = 'published';
-- Seq Scan on projects  (cost=0.00..1520.00 rows=750)
-- Execution Time: 2340.521 ms

-- Création de l'index
CREATE INDEX idx_projects_status ON projects(status);

-- Après l'index
EXPLAIN ANALYZE SELECT * FROM projects WHERE status = 'published';
-- Index Scan using idx_projects_status  (cost=0.29..8.31 rows=750)
-- Execution Time: 4.892 ms` },
      { type: "quote", text: "Mesurez avant d'optimiser. Django Debug Toolbar et EXPLAIN ANALYZE sont vos meilleurs alliés." },
      { type: "paragraph", text: "L'optimisation des requêtes n'est pas un luxe — c'est une responsabilité. Chaque milliseconde compte pour l'expérience utilisateur, et la plupart des gains viennent de corrections simples : select_related, index, et pagination." },
    ],
    relatedSlugs: ["structurer-projet-django-scalabilite", "pourquoi-fastapi-est-devenu-mon-framework-backend"],
  },
  {
    slug: "concevoir-api-restful-bonnes-pratiques",
    title: "Concevoir une API RESTful qui respecte les bonnes pratiques",
    excerpt: "Nommage des endpoints, gestion des erreurs, pagination, versioning — un guide basé sur mon expérience chez ADS Ltd.",
    category: "Architecture",
    date: "15 Mars 2025",
    readTime: "14 min",
    gradient: "from-[#8b5cf6] via-[#7c3aed] to-[#6d28d9]",
    icon: "📐",
    content: [
      { type: "paragraph", text: "Une API bien conçue est un plaisir à consommer. Une API mal conçue est un cauchemar à maintenir. Après avoir construit des API pour des compagnies d'assurance chez ADS Ltd, voici les règles que j'applique systématiquement." },
      { type: "heading", text: "Nommage des endpoints : des noms, pas des verbes" },
      { type: "code", language: "bash", code: `# ❌ MAUVAIS
GET  /getUsers
POST /createProject
PUT  /updateProject/123

# ✅ BON — les verbes HTTP suffisent
GET    /api/v1/users/           # Liste
POST   /api/v1/projects/        # Création
GET    /api/v1/projects/123/    # Détail
PATCH  /api/v1/projects/123/    # Modification partielle
DELETE /api/v1/projects/123/    # Suppression` },
      { type: "heading", text: "Réponses d'erreur structurées" },
      { type: "paragraph", text: "Ne renvoyez jamais une erreur 500 avec un message vague. Chaque erreur doit être explicite, avec un code machine-readable et un message humain." },
      { type: "code", language: "json", code: `{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Les données envoyées sont invalides.",
    "details": [
      {
        "field": "email",
        "message": "Ce format d'email n'est pas valide."
      },
      {
        "field": "tech_stack",
        "message": "Au moins une technologie est requise."
      }
    ]
  }
}` },
      { type: "heading", text: "Pagination : ne jamais tout renvoyer" },
      { type: "code", language: "python", code: `# FastAPI avec pagination cursor-based
@app.get("/api/v1/projects/")
async def list_projects(
    cursor: str | None = None,
    limit: int = Query(default=20, le=100),
):
    query = Project.select()
    if cursor:
        query = query.where(Project.id > decode_cursor(cursor))

    items = await query.limit(limit + 1).all()
    has_next = len(items) > limit

    return {
        "data": items[:limit],
        "pagination": {
            "next_cursor": encode_cursor(items[-1].id) if has_next else None,
            "has_next": has_next,
        }
    }` },
      { type: "quote", text: "Une bonne API est comme une bonne interface utilisateur : intuitive, prévisible, et bien documentée." },
    ],
    relatedSlugs: ["pourquoi-fastapi-est-devenu-mon-framework-backend", "authentification-jwt-vs-sessions"],
  },
  {
    slug: "git-avance-commandes-production",
    title: "Git avancé : les commandes qui m'ont sauvé en production",
    excerpt: "Au-delà de add, commit, push. Les commandes Git qui m'ont réellement aidé en situation critique.",
    category: "DevOps",
    date: "01 Mars 2025",
    readTime: "8 min",
    gradient: "from-[#f97316] via-[#ea580c] to-[#c2410c]",
    icon: "🔀",
    content: [
      { type: "paragraph", text: "Git est un outil que la plupart des développeurs utilisent à 10% de ses capacités. J'étais pareil — jusqu'au jour où j'ai dû retrouver un commit perdu en production et où git reflog m'a littéralement sauvé la mise." },
      { type: "heading", text: "git bisect : trouver le commit coupable" },
      { type: "paragraph", text: "Quand un bug apparaît et que vous ne savez pas quel commit l'a introduit, git bisect effectue une recherche binaire dans l'historique. En quelques étapes, vous identifiez le commit exact." },
      { type: "terminal", code: `$ git bisect start
$ git bisect bad                    # Le commit actuel a le bug
$ git bisect good v1.2.0            # Cette version marchait

# Git checkout un commit au milieu
Bisecting: 15 revisions left to test after this
[abc1234] Refactor user authentication

# Testez, puis dites à git :
$ git bisect good                   # Pas de bug ici
# ou
$ git bisect bad                    # Bug présent

# Après ~4 étapes sur 30 commits :
abc5678 is the first bad commit
Author: Boris <blontsi00@gmail.com>
Date:   Mon Mar 10 14:32:11 2025

    Update password validation logic

$ git bisect reset` },
      { type: "heading", text: "git stash : jongler entre les contextes" },
      { type: "code", language: "bash", code: `# Sauvegarder le travail en cours sans committer
$ git stash push -m "WIP: nouveau filtre de recherche"

# Passer sur une autre branche pour un hotfix
$ git checkout hotfix/api-timeout
# ... corriger le bug, committer ...

# Revenir et récupérer le travail
$ git checkout feature/search
$ git stash pop` },
      { type: "heading", text: "git reflog : le filet de sécurité ultime" },
      { type: "paragraph", text: "Vous avez fait un reset --hard par erreur ? Un rebase qui a mal tourné ? git reflog enregistre chaque mouvement de HEAD. Vous pouvez revenir à n'importe quel état précédent." },
      { type: "terminal", code: `$ git reflog
a1b2c3d HEAD@{0}: reset: moving to HEAD~3    # Oops...
f4e5d6c HEAD@{1}: commit: Add pagination
8g7h9i0 HEAD@{2}: commit: Fix auth middleware

# Restaurer l'état avant le reset destructif
$ git reset --hard f4e5d6c
HEAD is now at f4e5d6c Add pagination
# Sauvé !` },
      { type: "quote", text: "Git n'est pas juste un outil de versioning — c'est votre machine à remonter le temps. Apprenez à l'utiliser." },
    ],
    relatedSlugs: ["deployer-react-fastapi-docker-compose", "structurer-projet-django-scalabilite"],
  },
  {
    slug: "ia-va-t-elle-remplacer-homme",
    title: "L'IA va-t-elle remplacer l'homme ? Ma réponse de développeur",
    excerpt: "Entre fantasme dystopique et réalité du terrain, j'explore la vraie question derrière la peur de l'intelligence artificielle — et pourquoi je pense que le débat est mal posé.",
    category: "Réflexion",
    date: "22 Juin 2025",
    readTime: "15 min",
    gradient: "from-[#dc2626] via-[#b91c1c] to-[#991b1b]",
    icon: "",
    content: [
      { type: "paragraph", text: "Cette question revient dans chaque conversation depuis l'explosion de ChatGPT. À la fac, en famille, entre collègues développeurs. « Boris, toi qui codes, tu penses pas que l'IA va tous nous remplacer ? » Ma réponse courte : non. Ma réponse longue : c'est plus compliqué que ça, et surtout, c'est la mauvaise question." },
      { type: "heading", text: "Le malentendu fondamental sur l'intelligence artificielle" },
      { type: "paragraph", text: "Quand les gens disent « IA », ils imaginent un cerveau numérique qui pense, qui ressent, qui décide. La réalité est radicalement différente. Ce qu'on appelle IA aujourd'hui — les LLM comme GPT, les modèles de vision comme DALL-E — ce sont des machines statistiques extraordinairement puissantes. Elles prédisent le prochain mot le plus probable dans une séquence. C'est tout." },
      { type: "paragraph", text: "Un LLM ne « comprend » pas votre question. Il calcule une distribution de probabilités sur des milliards de paramètres entraînés sur des téraoctets de texte humain. Le résultat est bluffant, parfois même troublant de justesse. Mais il n'y a personne derrière le rideau. Pas de conscience, pas d'intention, pas de compréhension au sens humain." },
      { type: "quote", text: "L'IA ne pense pas — elle calcule. Et il y a un gouffre entre calculer et penser." },
      { type: "heading", text: "Ce que l'IA fait mieux que nous" },
      { type: "paragraph", text: "Soyons honnêtes : il y a des domaines où l'IA nous écrase déjà. Le traitement de données massives, la reconnaissance de patterns dans des millions d'images médicales, l'optimisation logistique, la traduction instantanée, la génération de code boilerplate. Sur ces tâches répétitives, volumineuses et basées sur des patterns, l'IA est non seulement meilleure — elle est incomparablement plus rapide." },
      { type: "paragraph", text: "En tant que développeur, je l'utilise quotidiennement. Quand je dois écrire un serializer Django pour un modèle avec 15 champs, l'IA me fait gagner 10 minutes. Quand je cherche un bug dans 200 lignes de code, elle me pointe souvent dans la bonne direction. C'est un outil formidable — le meilleur assistant que j'aie jamais eu." },
      { type: "heading", text: "Ce que l'IA ne fera jamais" },
      { type: "paragraph", text: "Mais voilà où le bât blesse. L'IA ne sait pas pourquoi elle fait ce qu'elle fait. Elle ne comprend pas le contexte métier de votre client. Elle ne ressent pas la frustration d'un utilisateur face à une interface mal conçue. Elle ne prend pas de décisions éthiques. Elle ne négocie pas un deadline avec un chef de projet. Elle ne motive pas une équipe un vendredi soir quand la production est en feu." },
      { type: "paragraph", text: "L'IA génère du code. Un développeur résout des problèmes. L'IA produit du texte. Un écrivain raconte une histoire qui touche. L'IA analyse des données médicales. Un médecin regarde son patient dans les yeux et lui dit ce que ces données signifient pour sa vie." },
      { type: "quote", text: "L'IA remplacera les tâches, pas les métiers. Elle remplacera la routine, pas la créativité. Elle remplacera l'exécution mécanique, pas le jugement humain." },
      { type: "heading", text: "Les métiers qui vont évoluer, pas disparaître" },
      { type: "paragraph", text: "Le développeur de demain ne sera pas remplacé par l'IA — il sera augmenté par elle. Comme la calculatrice n'a pas remplacé le mathématicien, comme Excel n'a pas remplacé le comptable, comme Google n'a pas remplacé le chercheur. Ces outils ont transformé ces métiers, les ont rendus plus efficaces, plus ambitieux." },
      { type: "paragraph", text: "Le développeur qui refuse d'utiliser l'IA sera dépassé — pas par l'IA, mais par le développeur qui l'utilise. C'est la vraie menace : pas la machine qui vous remplace, mais l'humain qui maîtrise la machine mieux que vous." },
      { type: "heading", text: "Le vrai danger de l'IA" },
      { type: "paragraph", text: "Le danger n'est pas que l'IA devienne trop intelligente. Le danger est qu'on la croie intelligente alors qu'elle ne l'est pas. Qu'on lui délègue des décisions critiques — médicales, judiciaires, financières — sans comprendre qu'elle n'a aucune notion de responsabilité, d'éthique ou de conséquence." },
      { type: "paragraph", text: "Le danger, c'est aussi la paresse intellectuelle. Si une génération entière apprend à coder en copiant-collant les réponses de ChatGPT sans comprendre ce qu'elle fait, nous aurons des systèmes fragiles construits sur de l'incompréhension. L'IA doit amplifier notre intelligence, pas la remplacer." },
      { type: "heading", text: "Ma position" },
      { type: "paragraph", text: "Je suis développeur. Je construis des choses avec du code. L'IA est devenue une partie intégrante de mon workflow, et je refuse de la diaboliser autant que de la déifier. C'est un outil — le plus puissant que notre génération ait connu, certes — mais un outil quand même." },
      { type: "paragraph", text: "L'homme ne sera pas remplacé par l'IA. L'homme sera remplacé par l'homme qui sait utiliser l'IA. Et ça, ce n'est pas un scénario de science-fiction. C'est déjà en train de se passer." },
      { type: "quote", text: "La question n'est pas « l'IA va-t-elle me remplacer ? » La question est « est-ce que je suis prêt à évoluer avec elle ? »" },
    ],
    relatedSlugs: ["entre-homme-et-ia-qui-est-plus-intelligent", "mon-parcours-universite-developpement-professionnel"],
  },
  {
    slug: "entre-homme-et-ia-qui-est-plus-intelligent",
    title: "Entre l'homme et l'IA, qui est réellement plus intelligent ?",
    excerpt: "On compare souvent l'IA à l'intelligence humaine. Mais compare-t-on vraiment la même chose ? Une exploration des différentes formes d'intelligence.",
    category: "Réflexion",
    date: "18 Juin 2025",
    readTime: "13 min",
    gradient: "from-[#7c3aed] via-[#6d28d9] to-[#4c1d95]",
    icon: "",
    content: [
      { type: "paragraph", text: "En 1997, Deep Blue bat Kasparov aux échecs. En 2016, AlphaGo bat Lee Sedol au Go, un jeu qu'on pensait hors de portée des machines pour encore des décennies. En 2023, GPT-4 réussit l'examen du barreau américain dans le top 10%. À chaque étape, la même question revient : l'IA est-elle plus intelligente que nous ?" },
      { type: "paragraph", text: "Ma réponse, après des mois à travailler avec ces outils au quotidien : la question est biaisée. On compare une fusée à un oiseau et on demande qui vole le mieux. Ça dépend de ce qu'on entend par « voler »." },
      { type: "heading", text: "L'intelligence computationnelle : avantage IA" },
      { type: "paragraph", text: "Sur le plan du calcul pur, il n'y a pas de débat. Un processeur moderne effectue des milliards d'opérations par seconde. Le cerveau humain, environ 10 à la puissance 16 opérations par seconde — impressionnant, mais sur des tâches spécifiques (multiplication de matrices, parcours de graphes, recherche dans des bases de données), la machine est imbattable." },
      { type: "paragraph", text: "GPT-4 a « lu » l'équivalent de millions de livres. Aucun humain ne pourra jamais accumuler autant de connaissances factuelles. Quand je lui demande les différences entre ASGI et WSGI en Python, sa réponse est instantanée, détaillée et généralement correcte. Pour moi, chercher cette info prendrait 15 minutes de documentation." },
      { type: "quote", text: "L'IA sait tout et ne comprend rien. L'humain sait peu et comprend beaucoup." },
      { type: "heading", text: "L'intelligence émotionnelle : avantage humain" },
      { type: "paragraph", text: "Demandez à GPT-4 de vous consoler après une rupture. Il produira un texte techniquement empathique, avec les bons mots, la bonne structure. Mais vous sentirez que c'est creux. Parce que l'empathie n'est pas une séquence de mots — c'est la capacité de ressentir ce que l'autre ressent. Et ça, aucune machine ne le fait." },
      { type: "paragraph", text: "En tant que développeur, cette dimension émotionnelle est fondamentale. Quand un client me décrit son besoin, je ne capte pas seulement les mots — je capte les hésitations, les priorités implicites, la frustration avec l'ancien système. Je lis entre les lignes. L'IA lit les lignes." },
      { type: "heading", text: "L'intelligence créative : le vrai champ de bataille" },
      { type: "paragraph", text: "C'est ici que le débat devient fascinant. L'IA peut-elle être créative ? Elle peut certainement produire des résultats qui ressemblent à de la créativité. DALL-E génère des images originales. GPT écrit des poèmes, des histoires, du code inventif. Mais est-ce de la créativité ou de la recombinaison statistique de patterns existants ?" },
      { type: "paragraph", text: "Quand Picasso invente le cubisme, il ne recombine pas des styles existants — il brise les règles de la représentation. Quand Einstein imagine la relativité, il ne prolonge pas la physique newtonienne — il la renverse. La vraie créativité humaine est disruptive. Elle vient de l'intuition, de l'expérience vécue, de la capacité à voir ce qui n'existe pas encore." },
      { type: "paragraph", text: "L'IA, elle, est une créativité par interpolation : elle produit du nouveau à partir de l'existant, mais elle ne peut pas concevoir un paradigme qu'elle n'a jamais rencontré dans ses données d'entraînement." },
      { type: "heading", text: "L'intelligence adaptative : le joker humain" },
      { type: "paragraph", text: "Mettez un humain dans un environnement complètement nouveau — une culture inconnue, un problème jamais rencontré, une situation de survie. Il s'adaptera. Lentement, maladroitement peut-être, mais il s'adaptera. C'est ce qu'on appelle l'intelligence générale." },
      { type: "paragraph", text: "L'IA actuelle est étroite. GPT-4 est brillant en langage, mais ne peut pas conduire une voiture. AlphaGo écrase les humains au Go, mais ne sait pas jouer aux dames à moins d'être réentraîné spécifiquement. Un enfant de 5 ans, lui, peut apprendre n'importe quel jeu de société en 10 minutes avec une explication simple." },
      { type: "quote", text: "L'intelligence humaine est un couteau suisse. L'intelligence artificielle est un scalpel laser. L'un est polyvalent, l'autre est chirurgicalement précis." },
      { type: "heading", text: "Le verdict : des intelligences complémentaires" },
      { type: "paragraph", text: "Poser la question « qui est plus intelligent » entre l'homme et l'IA, c'est comme demander qui est « meilleur » entre un marteau et un tournevis. Ce sont des outils d'intelligence différents, optimisés pour des problèmes différents." },
      { type: "paragraph", text: "L'IA excelle dans le traitement massif, la vitesse, la précision répétitive. L'humain excelle dans la compréhension, l'adaptation, l'empathie, la créativité disruptive et le jugement éthique." },
      { type: "paragraph", text: "Le futur n'appartient ni à l'IA seule, ni à l'humain seul. Il appartient à la symbiose des deux. Le développeur qui code avec l'IA est plus productif que le développeur seul et plus créatif que l'IA seule. C'est cette complémentarité qui me passionne — et c'est pour ça que j'apprends à maîtriser ces outils plutôt qu'à les craindre." },
    ],
    relatedSlugs: ["ia-va-t-elle-remplacer-homme", "mon-parcours-universite-developpement-professionnel"],
  },
  {
    slug: "mon-envie-folle-apprendre-anglais",
    title: "Mon envie folle d'apprendre l'anglais — et pourquoi c'est devenu une obsession",
    excerpt: "En tant que développeur camerounais francophone, l'anglais n'était pas une option — c'était une nécessité. Voici comment cette contrainte est devenue une passion dévorante.",
    category: "Carrière",
    date: "10 Juin 2025",
    readTime: "11 min",
    gradient: "from-[#0891b2] via-[#0e7490] to-[#155e75]",
    icon: "",
    content: [
      { type: "paragraph", text: "Il y a un moment précis où j'ai compris que l'anglais n'était pas juste « utile » — il était vital. J'étais bloqué sur un bug FastAPI à 2 heures du matin. La seule ressource pertinente était un thread Stack Overflow en anglais, avec 47 réponses détaillées. La documentation officielle ? En anglais. Les tutoriels avancés sur YouTube ? En anglais. Le README du package qui résolvait mon problème ? En anglais." },
      { type: "paragraph", text: "Ce soir-là, j'ai compris que chaque minute passée à ne pas maîtriser l'anglais était une minute où je me privais de 90% des connaissances disponibles dans mon domaine." },
      { type: "heading", text: "Le mur de la langue dans le développement" },
      { type: "paragraph", text: "Le monde du développement est anglophone. Ce n'est pas une opinion — c'est un fait structurel. Les langages de programmation sont en anglais (if, else, function, return, class, import). La documentation de chaque framework majeur est rédigée d'abord en anglais. Les conférences qui comptent — PyCon, DjangoCon, React Conf — sont en anglais. GitHub, Stack Overflow, les forums, les podcasts techniques : anglais." },
      { type: "paragraph", text: "En tant que développeur francophone camerounais, j'avais accès à peut-être 10% de l'écosystème de connaissances. Les 90% restants étaient derrière un mur linguistique que je devais franchir." },
      { type: "quote", text: "Dans le développement, ne pas parler anglais, c'est comme coder avec un seul moniteur quand tout le monde en a trois. Tu peux faire le travail, mais tu te bats avec un handicap permanent." },
      { type: "heading", text: "Comment l'obsession a commencé" },
      { type: "paragraph", text: "Tout a commencé par la documentation. Lire de la doc technique en anglais, c'est paradoxalement plus facile que lire un roman, parce que le vocabulaire est restreint et contextuel. « Request handler », « middleware », « authentication flow » — ces termes, je les connaissais déjà en contexte. C'est le premier territoire que j'ai conquis." },
      { type: "paragraph", text: "Ensuite, j'ai commencé à regarder des tutoriels YouTube en anglais. Au début, je mettais les sous-titres anglais (pas français — anglais). Je ne comprenais pas tout, mais je comprenais le code. Et progressivement, le code et la langue se sont entremêlés dans mon cerveau. Quand quelqu'un disait « let's destructure this object and pass it as props », je visualisais le code avant même de traduire les mots." },
      { type: "heading", text: "Ma méthode (pas de cours, pas d'appli miracle)" },
      { type: "paragraph", text: "Je n'ai jamais pris de cours d'anglais formel pour le développement. Ma méthode a été brutalement simple : immersion totale dans mon domaine." },
      { type: "paragraph", text: "Étape 1 : J'ai changé la langue de mon téléphone, de mon ordinateur, de VS Code, de tous mes outils en anglais. Du jour au lendemain, plus un seul menu en français. Les premiers jours étaient déstabilisants. Au bout d'une semaine, c'était naturel." },
      { type: "paragraph", text: "Étape 2 : J'ai commencé à écrire mes commentaires de code en anglais. Puis mes commit messages. Puis mes README. C'était du mauvais anglais au début — « this function is make the user to login » — mais c'était de l'anglais, et ça s'améliorait à chaque commit." },
      { type: "paragraph", text: "Étape 3 : J'ai rejoint des communautés Discord de développeurs anglophones. Au début, je lisais sans écrire. Puis j'ai commencé à répondre aux questions des débutants — expliquer un concept à quelqu'un d'autre est le meilleur test de compréhension, dans n'importe quelle langue." },
      { type: "paragraph", text: "Étape 4 : Les podcasts techniques en anglais pendant les trajets. « Talk Python to Me », « Syntax.fm », « The Changelog ». Même quand je ne comprenais que 60%, les 60% comptaient." },
      { type: "heading", text: "Le déclic : penser en anglais" },
      { type: "paragraph", text: "Il y a un moment magique dans l'apprentissage d'une langue : le moment où vous arrêtez de traduire mentalement. Vous entendez « deployment pipeline » et vous ne pensez plus « pipeline de déploiement » — vous pensez directement au concept, sans passer par le français." },
      { type: "paragraph", text: "Pour moi, ce déclic est arrivé au bout d'environ 8 mois d'immersion. Un matin, j'ai réalisé que je rêvais en anglais. Pas couramment, pas parfaitement — mais en anglais. Mon cerveau avait basculé." },
      { type: "quote", text: "L'anglais n'est pas une matière scolaire — c'est un outil professionnel. Apprenez-le comme vous avez appris Python : en construisant des choses avec, pas en mémorisant de la grammaire." },
      { type: "heading", text: "Ce que l'anglais m'a ouvert" },
      { type: "paragraph", text: "Depuis que je lis, écris et pense en anglais technique, ma progression en développement s'est accélérée de manière exponentielle. Je lis directement les RFC, les PEP Python, les discussions sur les design decisions des frameworks. Je comprends les conférences en direct. Je peux contribuer à des projets open source internationaux. J'ai accès à des freelances et des opportunités d'emploi qui n'existaient tout simplement pas dans ma bulle francophone." },
      { type: "paragraph", text: "Et surtout, je ne me sens plus limité. Avant, quand je tombais sur un problème, ma recherche s'arrêtait aux résultats français — souvent pauvres, souvent datés. Maintenant, j'ai accès à l'ensemble de la connaissance collective des développeurs du monde entier. C'est libérateur." },
      { type: "heading", text: "Mon conseil aux développeurs francophones" },
      { type: "paragraph", text: "Si vous êtes développeur francophone et que vous hésitez encore à investir dans l'anglais, arrêtez d'hésiter. Vous n'avez pas besoin d'être parfait. Vous n'avez pas besoin d'un accent britannique. Vous avez besoin de comprendre la documentation, de lire Stack Overflow, d'écrire des messages clairs sur GitHub." },
      { type: "paragraph", text: "Commencez aujourd'hui. Changez la langue de votre IDE. Écrivez votre prochain commit en anglais. Regardez un tutoriel sans sous-titres français. Ce sera inconfortable. Ce sera lent. Et dans 6 mois, vous vous demanderez comment vous avez pu coder sans." },
      { type: "quote", text: "L'anglais n'est pas la langue des Anglais — c'est la langue du code. Et si vous codez, vous la parlez déjà un peu." },
    ],
    relatedSlugs: ["mon-parcours-universite-developpement-professionnel", "ia-va-t-elle-remplacer-homme"],
  },
];
