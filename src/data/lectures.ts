import type { Lecture, LecturePage, LocalizedList } from "../types/course";

const lectureImages = {
  esports: new URL("../assets/images/lectures/esports-arena.svg", import.meta.url).href,
  digitalTech: new URL("../assets/images/lectures/digital-tech.svg", import.meta.url).href,
  programmingGame: new URL("../assets/images/lectures/programming-game.svg", import.meta.url).href,
  learningPlatform: new URL("../assets/images/lectures/learning-platform.svg", import.meta.url).href,
  algorithmicThinking: new URL("../assets/images/lectures/algorithmic-thinking.svg", import.meta.url).href,
  csharpMiniGame: new URL("../assets/images/lectures/csharp-mini-game.svg", import.meta.url).href,
};

const page = (
  ruTitle: string,
  enTitle: string,
  ruParagraphs: string[],
  enParagraphs: string[],
  ruKeyPoints: string[],
  enKeyPoints: string[],
): LecturePage => ({
  title: { ru: ruTitle, en: enTitle },
  paragraphs: { ru: ruParagraphs, en: enParagraphs },
  keyPoints: { ru: ruKeyPoints, en: enKeyPoints },
});

const lectureAddenda: Record<string, LocalizedList> = {
  "digital-tech-esports": {
    ru: [
      "При научном рассмотрении цифровой игры важно учитывать, что она является не только программным продуктом, но и средой измерения поведения. Каждое действие игрока оставляет цифровой след, который может быть обработан, сохранен и сопоставлен с другими событиями. Поэтому компьютерный спорт становится областью, где инженерные методы напрямую связаны с анализом человеческой деятельности.",
      "В отличие от традиционного спорта, значительная часть соревновательной среды создается программно. Игровой движок определяет физические ограничения, сервер задает правила синхронизации, интерфейс управляет вниманием игрока, а система статистики формирует представление о результате. Это означает, что качество соревнования зависит от корректности технической реализации.",
      "С позиции информатики компьютерный спорт полезен тем, что объединяет несколько уровней абстракции. На нижнем уровне работают аппаратные ресурсы, операционная система и сеть. На среднем уровне находятся игровые алгоритмы и структуры данных. На верхнем уровне расположены пользовательский опыт, командная стратегия, трансляция и аналитика.",
      "Таким образом, изучение киберспорта позволяет перейти от бытового представления об игре к системному пониманию цифровой технологии. Студент учится видеть за визуальным интерфейсом формальные модели, протоколы обмена, алгоритмы принятия решений и механизмы обеспечения надежности.",
    ],
    en: [
      "From a scientific perspective, a digital game is not only a software product but also an environment for measuring behavior. Every player action leaves a digital trace that can be processed, stored, and compared with other events. Esports therefore becomes a field where engineering methods are directly connected with human activity analysis.",
      "Unlike traditional sport, a large part of the competitive environment is created by software. The game engine defines physical constraints, the server defines synchronization rules, the interface controls player attention, and the statistics system shapes the interpretation of results. Competitive quality depends on technical correctness.",
      "For computer science, esports is useful because it combines several abstraction levels. Hardware, the operating system, and the network operate at the lower level. Game algorithms and data structures occupy the middle level. User experience, team strategy, broadcasting, and analytics appear at the upper level.",
      "Studying esports therefore helps move from a casual idea of play to a systematic understanding of digital technology. Students learn to see formal models, exchange protocols, decision algorithms, and reliability mechanisms behind the visual interface.",
    ],
  },
  "it-role-in-esports": {
    ru: [
      "Информационные технологии в киберспорте выполняют функцию инфраструктурного основания. Они не просто обслуживают матч, а задают условия его существования: кто подключен к серверу, какие действия считаются допустимыми, как фиксируется результат и каким образом спорная ситуация может быть проверена после завершения игры.",
      "Особое значение имеет воспроизводимость данных. Если система хранит журнал событий матча, то судья или аналитик может восстановить последовательность действий и оценить, была ли ситуация следствием ошибки игрока, сетевой задержки, сбоя клиента или нарушения правил. Без таких данных соревнование теряет проверяемость.",
      "Техническая инфраструктура должна проектироваться с учетом нагрузки. Во время крупных турниров резко возрастает число зрителей, запросов к статистике, обращений к профилям игроков и потоков трансляции. Поэтому применяются масштабирование серверов, кэширование, балансировка нагрузки и мониторинг состояния сервисов.",
      "Для образовательного курса эта тема важна потому, что показывает практическую связь между сетями, базами данных, информационной безопасностью и пользовательским опытом. Студент видит, что IT-решение оценивается не изолированно, а по влиянию на честность, стабильность и доверие к соревнованию.",
    ],
    en: [
      "Information technologies in esports function as infrastructure. They do not merely support a match; they define the conditions of its existence: who is connected, which actions are valid, how the result is recorded, and how a disputed situation can be reviewed after the game.",
      "Data reproducibility is especially important. If the system stores an event log, a referee or analyst can reconstruct the action sequence and decide whether a situation resulted from player error, network delay, client failure, or rule violation. Without such data, competition loses verifiability.",
      "Technical infrastructure must be designed for load. During major tournaments, spectators, statistics requests, profile queries, and broadcast streams grow sharply. Server scaling, caching, load balancing, and service monitoring become essential.",
      "For education, this topic shows the practical connection between networks, databases, information security, and user experience. Students see that an IT solution is evaluated not in isolation but through its effect on fairness, stability, and trust.",
    ],
  },
  "games-and-programming": {
    ru: [
      "Игровой контекст усиливает обучение программированию потому, что связывает синтаксис с наблюдаемым эффектом. Команда языка перестает быть абстрактной строкой и превращается в изменение состояния игрового мира. Такой переход особенно важен для начинающих, которым сложно удерживать в памяти невидимые процессы выполнения программы.",
      "С научной точки зрения игра выступает как интерактивная модель, где студент может многократно проверять гипотезы. Изменение значения переменной, условия или порядка команд сразу порождает новое поведение. Это приближает обучение к экспериментальному методу: предположение, действие, наблюдение, корректировка.",
      "Важным педагогическим эффектом является формирование причинно-следственного мышления. Если персонаж не проходит через дверь, студент должен определить, связано ли это с флагом наличия ключа, проверкой координат, ошибкой в условии или неправильным обновлением состояния. Такая диагностика является основой будущей отладки.",
      "Поэтому игры не заменяют изучение теории программирования, а создают удобную среду для ее применения. Переменные, типы данных, ветвления, циклы и функции получают конкретный смысл, а студент быстрее понимает, зачем нужна строгость алгоритмического описания.",
    ],
    en: [
      "The game context strengthens programming education because it connects syntax with observable effects. A language command stops being an abstract line and becomes a state change in the game world. This transition is important for beginners who struggle with invisible execution processes.",
      "Scientifically, a game works as an interactive model where students can repeatedly test hypotheses. Changing a variable, condition, or command order immediately creates new behavior. This brings learning close to the experimental method: hypothesis, action, observation, correction.",
      "A key pedagogical effect is causal reasoning. If a character cannot pass through a door, the student must determine whether the cause is a key flag, coordinate check, conditional error, or incorrect state update. This diagnosis is the basis of future debugging.",
      "Games therefore do not replace programming theory; they provide a convenient environment for applying it. Variables, data types, branches, loops, and functions gain concrete meaning, and the student understands why algorithmic precision matters.",
    ],
  },
  "interactive-learning-platforms": {
    ru: [
      "Интерактивная образовательная платформа должна рассматриваться как учебная система, а не только как набор экранов. Ее задача состоит в том, чтобы управлять последовательностью познавательных действий студента: предъявить проблему, дать инструмент для решения, обеспечить обратную связь и показать направление дальнейшего развития.",
      "Научный подход к такой платформе требует анализа когнитивной нагрузки. Если интерфейс перегружен эффектами, студент тратит внимание на визуальные стимулы вместо понимания алгоритма. Если интерфейс слишком беден, он не помогает увидеть связь между кодом и результатом. Баланс достигается через ясную структуру задания и точную обратную связь.",
      "Автоматическая проверка должна быть расширяемой. На раннем этапе достаточно имитации запуска, но архитектура должна предусматривать будущий переход к реальному исполнению кода, тестовым сценариям, изоляции процессов и безопасной обработке ошибок. Поэтому runner, UI и данные задания не следует смешивать в одном компоненте.",
      "В образовательном проектировании важно учитывать не только правильность ответа, но и траекторию обучения. Число попыток, типичные ошибки, скорость прохождения и обращение к подсказкам могут использоваться для адаптации сложности и персонализации практики.",
    ],
    en: [
      "An interactive educational platform should be viewed as a learning system, not only as a set of screens. Its task is to manage the sequence of student cognitive actions: present a problem, provide a tool, deliver feedback, and show the direction for further development.",
      "A scientific approach requires analysis of cognitive load. If the interface is overloaded with effects, attention moves from algorithm understanding to visual stimuli. If it is too poor, it does not show the connection between code and result. Balance comes from clear task structure and precise feedback.",
      "Automatic checking should be extensible. At an early stage, execution simulation is enough, but the architecture should allow future real code execution, test scenarios, process isolation, and safe error handling. Runner, UI, and task data should not be mixed in one component.",
      "Educational design should consider not only answer correctness but also the learning trajectory. Attempts, typical errors, completion speed, and hint usage can support difficulty adaptation and personalized practice.",
    ],
  },
  "algorithmic-thinking": {
    ru: [
      "Алгоритмическое мышление в игровом контексте формируется через перевод неопределенной идеи в формальные правила. Пока правило выражено естественным языком, оно может быть неоднозначным. Программа же требует точного определения входных данных, допустимых операций, условий завершения и ожидаемого результата.",
      "Игровые механики позволяют показать, что алгоритм всегда работает с моделью, а не с реальностью напрямую. Карта уровня является моделью пространства, координаты являются моделью положения, логические переменные являются моделью фактов игрового мира. Чем точнее модель, тем предсказуемее поведение программы.",
      "Связь логики и механики особенно заметна в условиях взаимодействия. Нельзя просто сказать, что персонаж взял предмет; нужно определить, находится ли он на нужной клетке, существует ли предмет, не был ли он уже взят и какое состояние должно измениться после действия. Это учит последовательной проверке предпосылок.",
      "Таким образом, игровая задача становится способом освоения строгого рассуждения. Студент учится разделять описание цели, данные, алгоритм и проверку результата, что является фундаментом не только разработки игр, но и любой инженерной деятельности в программировании.",
    ],
    en: [
      "Algorithmic thinking in a game context develops through translating vague ideas into formal rules. As long as a rule is expressed in natural language, it may be ambiguous. A program requires precise input data, allowed operations, stopping conditions, and expected output.",
      "Game mechanics show that an algorithm works with a model, not with reality directly. A level map is a model of space, coordinates are a model of position, and boolean variables are a model of game-world facts. The more precise the model, the more predictable the program.",
      "The connection between logic and mechanics is clear in interactions. It is not enough to say that a character picked up an item; the program must check position, item existence, whether it was already collected, and which state should change afterward. This teaches systematic precondition checking.",
      "A game task therefore becomes a method for learning rigorous reasoning. Students learn to separate goal description, data, algorithm, and result checking, which is fundamental not only in game development but in software engineering generally.",
    ],
  },
  "csharp-adventure-game": {
    ru: [
      "Создание мини-игры на C# является завершающим этапом курса, потому что объединяет теоретические представления о данных, алгоритмах, интерфейсе и состоянии в один работающий прототип. Даже консольная игра показывает полный цикл разработки: постановку задачи, выбор структур данных, реализацию логики, тестирование и улучшение.",
      "С научно-методической точки зрения такой проект важен тем, что студент видит границы абстракции. Символьная карта не является настоящим трехмерным миром, но она достаточно точно моделирует препятствия, положение героя и цель. Это помогает понять, что программирование часто начинается с выбора подходящего уровня упрощения.",
      "Язык C# удобен для такого задания благодаря строгой типизации, понятному синтаксису условий и циклов, поддержке массивов и функций. Студент может постепенно перейти от линейной программы к структурированному проекту, где отдельные функции отвечают за отображение, движение, проверку столкновений и победу.",
      "После создания базовой версии важно обсудить расширение архитектуры. Добавление врагов, очков, таймера или сохранения прогресса не должно разрушать исходную структуру. Поэтому уже в учебном прототипе нужно различать данные уровня, правила игры, пользовательский ввод и вывод информации на экран.",
    ],
    en: [
      "Creating a C# mini-game is the final stage of the course because it combines theoretical ideas about data, algorithms, interface, and state into one working prototype. Even a console game shows the full development cycle: problem definition, data structure selection, logic implementation, testing, and improvement.",
      "Methodologically, this project is important because students see the limits of abstraction. A character map is not a real three-dimensional world, but it models obstacles, hero position, and goal accurately enough. This helps explain that programming often begins with choosing a useful simplification level.",
      "C# is suitable for this task because of static typing, clear condition and loop syntax, arrays, and functions. Students can gradually move from a linear program to a structured project where separate functions handle drawing, movement, collision checks, and victory.",
      "After the basic version, architecture extension should be discussed. Adding enemies, score, timers, or saving should not destroy the original structure. Even in a learning prototype, level data, game rules, user input, and screen output should be separated.",
    ],
  },
};

const lectureResearchAppendix: Record<string, LocalizedList> = {
  "digital-tech-esports": {
    ru: [
      "Если рассматривать компьютерный спорт в исторической перспективе, становится заметно, что его развитие напрямую связано с ростом вычислительных мощностей, распространением широкополосных сетей и совершенствованием средств визуализации. Ранние соревновательные игры были ограничены локальными сетями и простыми графическими средами, тогда как современные дисциплины требуют распределенной серверной инфраструктуры, сложных игровых движков и постоянного анализа данных.",
      "Понятие цифровой технологии в этом контексте не сводится к наличию компьютера. Оно означает, что ключевые элементы деятельности представлены в форме данных и могут быть обработаны алгоритмически. Позиция игрока, состояние персонажа, результат выстрела, время реакции, рейтинг команды и даже поведение зрителей на трансляции становятся информационными объектами.",
      "Важной особенностью киберспорта является измеримость. В традиционной игре многое остается на уровне наблюдения, тогда как цифровая среда позволяет фиксировать события с высокой точностью. Это открывает возможности для статистического анализа, машинного обучения, построения рейтинговых моделей и разработки тренировочных систем, которые основаны не на впечатлениях, а на данных.",
      "При этом измеримость не означает полной объективности. Любая система сбора данных зависит от того, какие события разработчик решил регистрировать и как они интерпретируются. Например, количество убийств в матче не всегда отражает вклад игрока в командную победу, потому что стратегия может включать контроль пространства, поддержку союзников или экономическое преимущество.",
      "Компьютерная игра как объект исследования находится на пересечении информатики, психологии, педагогики, дизайна интерфейсов и теории коммуникации. Игрок взаимодействует не с кодом напрямую, а с представлением, которое создано разработчиком. Поэтому качество интерфейса влияет на скорость восприятия, принятие решений и вероятность ошибки.",
      "Для учебного курса особенно важно показать, что киберспорт не является только развлекательной областью. Он демонстрирует реальные инженерные проблемы: надежность сетевого соединения, проектирование пользовательского опыта, защиту от недобросовестного поведения, хранение больших объемов данных и разработку алгоритмов принятия решений.",
      "На уровне программной архитектуры игра обычно разделяется на несколько подсистем. Графическая подсистема отвечает за вывод изображения, физическая — за моделирование движения и столкновений, сетевая — за обмен данными, аудиосистема — за звуковую обратную связь, а игровая логика связывает эти элементы правилами.",
      "Такое разделение полезно для понимания любого сложного IT-проекта. Студент видит, что большая система не создается как один монолитный файл, а строится из модулей с разной ответственностью. Именно этот принцип позднее используется при разработке сайтов, мобильных приложений, серверных систем и образовательных платформ.",
      "Киберспорт также показывает значение стандартизации. Для проведения турнира необходимо единообразно определять версии игры, настройки сервера, правила подключения, параметры оборудования и порядок фиксации результата. Без стандартов невозможно обеспечить сравнимость матчей и равные условия для участников.",
      "Отдельного внимания заслуживает роль зрителя. Современный киберспорт существует не только как игра участников, но и как медиасобытие. Интерфейсы наблюдателя, повторы, статистические панели и визуализация карты превращают внутренние данные игры в понятный нарратив для аудитории.",
      "Таким образом, компьютерный спорт можно рассматривать как лабораторию цифрового общества в миниатюре. В нем присутствуют данные, алгоритмы, коммуникация, конкуренция, право, безопасность, экономика внимания и образовательный потенциал. Поэтому его изучение помогает сформировать целостное представление о современных информационных технологиях.",
      "Для дальнейшего обучения важно удерживать именно системный взгляд. Когда студент будет изучать программирование на примере мини-игры, он должен понимать, что даже небольшой проект повторяет основные принципы больших цифровых систем: данные описывают состояние, алгоритмы изменяют состояние, интерфейс делает состояние видимым, а пользовательские действия запускают события.",
    ],
    en: [
      "Historically, esports development is directly connected with increased computing power, broadband networks, and improved visualization tools. Early competitive games were limited by local networks and simple graphics, while modern disciplines require distributed server infrastructure, complex engines, and constant data analysis.",
      "Digital technology in this context does not simply mean the presence of a computer. It means that key elements of activity are represented as data and can be processed algorithmically. Player position, character state, shot result, reaction time, team rating, and even viewer behavior become information objects.",
      "A key feature of esports is measurability. In traditional play, many events remain observational, while digital environments can record them precisely. This enables statistical analysis, machine learning, rating models, and training systems based on data rather than impressions.",
      "However, measurability does not guarantee full objectivity. Any data collection system depends on which events developers record and how those events are interpreted. For example, kill count does not always represent a player's contribution to victory because strategy may involve space control, support, or economic advantage.",
      "A computer game as a research object intersects computer science, psychology, pedagogy, interface design, and communication theory. The player does not interact with code directly but with a representation created by developers. Interface quality affects perception speed, decision making, and error probability.",
      "For this course, it is important to show that esports is not only entertainment. It demonstrates real engineering problems: network reliability, user experience design, protection against dishonest behavior, large-scale data storage, and decision algorithm development.",
      "At the software architecture level, a game is usually divided into subsystems. The graphics subsystem renders images, physics models movement and collisions, networking exchanges data, audio provides sound feedback, and game logic connects these elements through rules.",
      "This separation helps explain any complex IT project. Students see that a large system is not built as one monolithic file but as modules with different responsibilities. The same principle later appears in websites, mobile applications, server systems, and educational platforms.",
      "Esports also demonstrates the value of standardization. Tournaments must define game versions, server settings, connection rules, hardware parameters, and result recording procedures. Without standards, matches cannot be compared fairly.",
      "The spectator role also deserves attention. Modern esports exists not only as player activity but also as a media event. Observer interfaces, replays, statistics panels, and map visualization turn internal game data into a readable narrative for the audience.",
      "Esports can therefore be viewed as a miniature laboratory of digital society. It contains data, algorithms, communication, competition, law, security, attention economics, and educational potential. Studying it helps form a holistic view of modern information technology.",
      "For further learning, students should keep this systemic view. When they later study programming through a mini-game, they should understand that even a small project repeats the principles of large digital systems: data describes state, algorithms change state, interfaces make state visible, and user actions trigger events.",
    ],
  },
  "it-role-in-esports": {
    ru: [
      "Сетевая инфраструктура киберспорта строится вокруг необходимости синхронизировать множество клиентов в условиях ограниченного времени. Игрок должен ощущать, что его действие выполнено немедленно, но сервер обязан проверить это действие и передать результат другим участникам. Эта двойственность порождает сложные инженерные решения.",
      "В реальных системах используются разные модели сетевого взаимодействия. Авторитетный сервер уменьшает возможность мошенничества, потому что окончательное решение принимает не клиент игрока, а центральная система. Однако такая модель требует качественных каналов связи и продуманной компенсации задержек.",
      "Компенсация задержек является важной темой для понимания честности. Если два игрока видят ситуацию с небольшой временной разницей, система должна решить, какое состояние считать истинным. Для этого применяются временные метки, буферизация, интерполяция и повторное вычисление событий на сервере.",
      "Базы данных в киберспорте выполняют не только функцию хранения профилей. Они поддерживают историю матчей, таблицы лидеров, статистику поведения, настройки пользователя, покупки внутриигровых предметов и результаты дисциплинарных проверок. Ошибки в таких данных могут иметь социальные и экономические последствия.",
      "Рейтинговые системы требуют аккуратного проектирования. Слишком резкое изменение рейтинга демотивирует игроков, слишком медленное делает систему нечувствительной к росту навыка, а неверная оценка силы соперника нарушает подбор матчей. Поэтому рейтинг является примером практического применения математической модели.",
      "Античит нельзя понимать как одну программу, которая гарантированно находит нарушение. Это комплекс мер, включающий технические проверки, анализ поведения, серверную валидацию, работу модераторов, санкции и прозрачные правила. Чем сложнее игра, тем труднее отличить необычный навык от недопустимого вмешательства.",
      "Информационная безопасность затрагивает и персональные данные. Аккаунты игроков, платежная информация, история матчей и коммуникации требуют защиты от несанкционированного доступа. Поэтому киберспортивная платформа должна учитывать аутентификацию, разграничение прав, шифрование и аудит действий.",
      "Отказоустойчивость является критически важной для турниров. Сбой сервера во время финального матча может повлиять на результат, репутацию организатора и доверие зрителей. Поэтому применяются резервирование, мониторинг, журналирование, планы восстановления и предварительное нагрузочное тестирование.",
      "Аналитические системы превращают поток событий в знания. Они могут показывать, какие карты чаще приводят к победе, какие стратегии эффективны против конкретного соперника, как меняется точность игрока под давлением и какие ошибки повторяются в ключевых раундах.",
      "Визуализация данных важна не меньше сбора. Тренеру, игроку и зрителю нужны разные представления одной и той же информации. Тренеру полезна подробная статистика, игроку — краткая обратная связь, зрителю — понятный визуальный сюжет матча.",
      "Таким образом, роль IT в киберспорте заключается не в обслуживании внешней оболочки, а в создании самой возможности честного цифрового соревнования. Без сетей, баз данных, безопасности и аналитики матч был бы нестабильным, непрозрачным и трудно проверяемым.",
      "Для студента эта тема особенно полезна тем, что показывает прикладное единство разных разделов информатики. Одна игровая ситуация может требовать знаний о протоколах передачи данных, проектировании API, хранении информации, анализе логов, защите от атак и представлении статистики в интерфейсе.",
    ],
    en: [
      "Esports network infrastructure is built around synchronizing many clients under time constraints. The player must feel that an action happens immediately, while the server must validate the action and send the result to others. This tension creates complex engineering solutions.",
      "Real systems use different networking models. An authoritative server reduces cheating because the final decision is made by the central system, not the player client. However, this model requires quality network channels and carefully designed latency compensation.",
      "Latency compensation is central to fairness. If two players see a situation with a small time difference, the system must decide which state is authoritative. Timestamps, buffering, interpolation, and server-side event replay are used for this purpose.",
      "Databases in esports do more than store profiles. They support match histories, leaderboards, behavioral statistics, user settings, in-game purchases, and disciplinary results. Errors in such data can have social and economic consequences.",
      "Rating systems require careful design. Rating changes that are too sharp demotivate players, changes that are too slow fail to reflect skill growth, and incorrect opponent strength estimates damage matchmaking. Rating is therefore a practical mathematical model.",
      "Anti-cheat should not be understood as one program that always detects violations. It is a set of measures including technical checks, behavior analysis, server validation, moderation, sanctions, and transparent rules. The more complex the game, the harder it is to distinguish unusual skill from forbidden interference.",
      "Information security also concerns personal data. Player accounts, payment information, match histories, and communications require protection from unauthorized access. Esports platforms must consider authentication, authorization, encryption, and audit trails.",
      "Fault tolerance is critical for tournaments. A server failure during a final match can affect the result, organizer reputation, and audience trust. Redundancy, monitoring, logging, recovery plans, and load testing are therefore essential.",
      "Analytics systems turn event streams into knowledge. They can show which maps lead to victory, which strategies work against specific opponents, how player accuracy changes under pressure, and which mistakes repeat in key rounds.",
      "Data visualization is as important as collection. Coaches, players, and viewers need different representations of the same information. Coaches need detailed statistics, players need concise feedback, and viewers need a readable match narrative.",
      "The role of IT in esports is therefore not external support but the creation of the possibility of fair digital competition. Without networks, databases, security, and analytics, a match would be unstable, opaque, and hard to verify.",
      "For students, this topic is useful because it shows the applied unity of many computer science areas. One game situation may require knowledge of data protocols, API design, storage, log analysis, attack protection, and statistical interface design.",
    ],
  },
  "games-and-programming": {
    ru: [
      "Обучение программированию через игры имеет особую ценность на начальном этапе, потому что снижает разрыв между формальной записью алгоритма и личным опытом студента. Когда команда изменяет положение персонажа, результат становится не только логическим, но и визуально наблюдаемым.",
      "Психологически это поддерживает мотивацию, потому что студент видит последствия своей работы быстрее, чем в большинстве абстрактных задач. Однако важно, чтобы игровая мотивация не заменяла понимание. Преподаватель должен постоянно связывать эффект на экране с конкретной конструкцией языка.",
      "Переменная в игре может быть представлена как ресурс. Здоровье, скорость, количество очков, запас энергии или координата являются разными способами хранения состояния. Через такие примеры студент легче понимает, почему важно выбирать тип данных и контролировать изменение значения.",
      "Условные операторы становятся способом описания правил. Если игрок касается врага, здоровье уменьшается; если собран ключ, дверь открывается; если счет достиг порога, уровень завершается. Игровой контекст показывает, что условие не является формальностью, а определяет допустимое поведение системы.",
      "Циклы естественно возникают в повторяющихся процессах. Игровой цикл повторяет чтение ввода, обновление состояния и вывод результата. Цикл перебора выводит элементы инвентаря или строки карты. Цикл генерации создает серию препятствий или противников.",
      "Функции позволяют перейти от набора команд к осмысленной структуре. Если студент выделяет функции MovePlayer, DrawMap и CheckVictory, он начинает мыслить не строками, а действиями системы. Это является важным шагом к архитектурному мышлению.",
      "Событийная модель помогает понять, почему современные программы не всегда выполняются строго сверху вниз. Пользователь может нажать клавишу, закрыть окно, выбрать пункт меню или столкнуться с объектом, и программа должна ответить на это событие корректным изменением состояния.",
      "Ошибки в игровом коде часто имеют наглядную форму. Персонаж проходит сквозь стену, счет не увеличивается, враг появляется за пределами карты, победа не засчитывается. Такая наглядность делает отладку более понятной, потому что симптом ошибки виден сразу.",
      "При этом студент должен учиться не только исправлять конкретный сбой, но и искать его причину системно. Для этого полезно выводить промежуточные значения, проверять входные данные, читать условия, анализировать порядок команд и разделять ошибку в данных от ошибки в алгоритме.",
      "Игры также помогают объяснять тестирование. Можно проверить, что герой не выходит за границы карты, что дверь не открывается без ключа, что счет увеличивается после победы и что программа корректно реагирует на недопустимую команду.",
      "На более высоком уровне игровой проект показывает, зачем нужна читаемость кода. Если вся логика записана в одном длинном блоке, добавление новой механики становится трудным. Если код разделен на функции и понятные данные, проект можно расширять без полного переписывания.",
      "Таким образом, игры являются не упрощением программирования, а педагогически удобной моделью. Они позволяют постепенно перейти от синтаксиса к алгоритмам, от алгоритмов к архитектуре и от архитектуры к осознанному созданию интерактивных систем.",
    ],
    en: [
      "Learning programming through games is valuable at the beginning because it reduces the gap between formal algorithm notation and student experience. When a command changes character position, the result becomes both logical and visually observable.",
      "Psychologically, this supports motivation because students see the consequences of their work faster than in many abstract tasks. However, game motivation should not replace understanding. The teacher must connect screen effects with specific language constructs.",
      "A variable in a game can be represented as a resource. Health, speed, score, energy, or coordinate are different ways of storing state. Such examples help students understand why data type selection and value control matter.",
      "Conditional operators become a way to describe rules. If the player touches an enemy, health decreases; if a key is collected, the door opens; if the score reaches a threshold, the level ends. Conditions define system behavior.",
      "Loops naturally appear in repeated processes. The game loop repeats input reading, state updating, and output rendering. A traversal loop prints inventory items or map rows. A generation loop creates obstacles or enemies.",
      "Functions help move from commands to meaningful structure. When students create MovePlayer, DrawMap, and CheckVictory, they begin thinking in system actions rather than isolated lines. This is an important step toward architectural thinking.",
      "The event model explains why modern programs do not always execute strictly from top to bottom. The user may press a key, close a window, choose a menu item, or collide with an object, and the program must react with a correct state change.",
      "Bugs in game code often have visible form. A character passes through a wall, score does not increase, an enemy appears outside the map, or victory is not counted. This visibility makes debugging easier because the symptom is immediate.",
      "Students should learn not only to fix a particular failure but also to search systematically for its cause. Printing intermediate values, checking input data, reading conditions, analyzing command order, and separating data errors from algorithm errors are useful practices.",
      "Games also help explain testing. One can test that the hero does not leave the map, the door does not open without a key, score increases after victory, and invalid commands are handled correctly.",
      "At a higher level, a game project shows why code readability matters. If all logic is written in one long block, adding a new mechanic becomes difficult. If code is separated into functions and clear data, the project can grow without being rewritten.",
      "Games are therefore not a simplification of programming but a pedagogically convenient model. They support movement from syntax to algorithms, from algorithms to architecture, and from architecture to conscious interactive system design.",
    ],
  },
  "interactive-learning-platforms": {
    ru: [
      "Интерактивные платформы для обучения программированию становятся особенно эффективными тогда, когда они соединяют практическое действие с объяснением. Студенту недостаточно просто написать код; он должен понять, почему система приняла или отклонила решение.",
      "Архитектурно такая платформа может рассматриваться как совокупность модулей. Модуль контента хранит задания и теорию, модуль редактора обеспечивает ввод кода, модуль запуска выполняет или имитирует выполнение, модуль проверки анализирует результат, а модуль прогресса сохраняет историю обучения.",
      "Даже если на первом этапе backend отсутствует, полезно проектировать интерфейс так, будто реальный запуск появится позже. Это означает, что компонент редактора не должен знать детали исполнения C#, а должен обращаться к отдельному runner-интерфейсу.",
      "Песочница кода выполняет важную педагогическую функцию. Она снижает риск эксперимента: студент может менять код, запускать его несколько раз, видеть результат и возвращаться к предыдущей идее. Такая свобода особенно важна при формировании исследовательского отношения к программированию.",
      "Однако песочница должна иметь границы. Если студент получает полностью свободный редактор без цели, обучение может стать хаотичным. Поэтому рядом с песочницей нужны конкретная задача, ожидаемый результат, критерий проверки и объяснение типичных ошибок.",
      "Автоматическая обратная связь должна быть многоуровневой. На первом уровне система сообщает, выполнено ли задание. На втором объясняет, какая часть решения требует внимания. На третьем предлагает подсказку, не раскрывая полностью ответ. Такой подход поддерживает самостоятельность.",
      "Геймификация в платформе должна быть связана с образовательными действиями. Достижение должно выдаваться не просто за посещение страницы, а за осмысленное завершение лекции, успешное применение цикла, исправление ошибки или выполнение лабораторного задания.",
      "С точки зрения UX важна предсказуемость. Студент должен понимать, где находится теория, где практика, где результат запуска, где прогресс и как перейти к следующему заданию. Непредсказуемая навигация увеличивает когнитивную нагрузку.",
      "Системы прогресса полезны не только для мотивации, но и для саморегуляции. Когда студент видит, какие темы пройдены и какие требуют внимания, он может планировать обучение. Это приближает платформу к инструменту самостоятельной образовательной траектории.",
      "Двуязычность образовательного сайта также имеет методическое значение. Английская версия помогает освоить профессиональную терминологию IT, а русская снижает барьер входа при изучении сложных понятий. Переключение языка делает курс гибким для разных групп студентов.",
      "Сбор пользовательских данных в учебной системе должен быть минимальным и осмысленным. Даже локальный прогресс в браузере показывает принцип: данные используются для помощи студенту, а не ради самого факта сбора. В реальных системах к этому добавляются вопросы приватности и согласия.",
      "В результате интерактивная платформа становится не просто витриной материалов, а учебной средой. Она соединяет содержание, практику, обратную связь, мотивацию и данные о прогрессе в единую систему, которая может развиваться вместе с курсом.",
    ],
    en: [
      "Interactive programming platforms become effective when they connect practical action with explanation. It is not enough for a student to write code; the student must understand why the system accepted or rejected a solution.",
      "Architecturally, such a platform can be viewed as a set of modules. The content module stores tasks and theory, the editor module handles code input, the runner executes or simulates execution, the checker analyzes results, and the progress module stores learning history.",
      "Even without a backend at the first stage, the interface should be designed as if real execution will appear later. The editor component should not know C# execution details; it should call a separate runner interface.",
      "The code sandbox has an important pedagogical function. It reduces experiment risk: students can change code, run it several times, observe results, and return to previous ideas. This freedom supports an investigative attitude toward programming.",
      "However, the sandbox needs boundaries. A fully free editor without a goal can make learning chaotic. It should be accompanied by a concrete task, expected result, checking criterion, and explanation of typical errors.",
      "Automatic feedback should be multilayered. At the first level, the system reports whether the task is completed. At the second, it explains which part needs attention. At the third, it gives a hint without fully revealing the answer.",
      "Gamification should be connected with educational actions. An achievement should not be granted merely for visiting a page, but for meaningful lecture completion, successful loop usage, bug fixing, or lab completion.",
      "From a UX perspective, predictability matters. Students should know where theory, practice, run output, progress, and next tasks are located. Unpredictable navigation increases cognitive load.",
      "Progress systems support not only motivation but also self-regulation. When students see completed topics and topics needing attention, they can plan learning. The platform becomes a tool for an independent educational trajectory.",
      "Bilingual course design also has methodological value. The English version helps students learn professional IT terminology, while the Russian version lowers the entry barrier for complex concepts. Language switching makes the course flexible.",
      "User data collection in a learning system should be minimal and meaningful. Even local browser progress shows the principle: data is used to help the student, not for collection itself. Real systems also involve privacy and consent.",
      "As a result, an interactive platform is not merely a display of materials but a learning environment. It combines content, practice, feedback, motivation, and progress data into a system that can grow with the course.",
    ],
  },
  "algorithmic-thinking": {
    ru: [
      "Алгоритмическое мышление развивается тогда, когда студент учится видеть задачу не как единое действие, а как структуру взаимосвязанных операций. Игровая механика удобна для этого, потому что каждое правило должно быть превращено в проверяемую последовательность шагов.",
      "Понятие состояния занимает центральное место. Пока состояние не определено явно, программа зависит от неформального представления разработчика. Когда состояние описано переменными, массивами и объектами, его можно проверять, изменять и передавать между частями программы.",
      "В играх особенно заметна проблема допустимости действия. Игрок может захотеть сделать ход, но программа должна проверить, разрешен ли он правилами. Такая проверка включает границы карты, наличие препятствий, текущее состояние персонажа и последствия взаимодействия.",
      "Логические выражения позволяют объединять несколько условий. Победа может требовать, чтобы игрок находился у выхода, имел ключ и не был побежден. Ошибка в одном операторе AND или OR полностью меняет механику, поэтому логика должна быть записана внимательно.",
      "Клеточная карта является хорошим мостом между программированием и математикой. Ее можно рассматривать как массив, координатную плоскость или граф. В зависимости от задачи студент выбирает модель, которая проще всего описывает нужное поведение.",
      "Поиск пути показывает, что не всякая игровая задача решается простым условием. Иногда программа должна рассмотреть множество возможных вариантов, оценить ограничения и выбрать последовательность действий. Это подводит к идеям графовых алгоритмов.",
      "Счетчики и таймеры формируют представление о времени в программе. В пошаговой игре время может измеряться количеством ходов, в динамической игре — кадрами или миллисекундами. Разные модели времени требуют разных алгоритмов обновления.",
      "Декомпозиция механики помогает избежать чрезмерной сложности. Вместо одной функции, которая делает все, лучше выделять чтение ввода, проверку хода, изменение состояния, обработку предметов и проверку победы. Каждая часть становится понятной и тестируемой.",
      "Алгоритмическая ошибка часто возникает из-за неполного учета случаев. Например, студент проверил движение вправо, но забыл левую границу карты; учел наличие ключа, но не учел повторный подбор; сделал победу возможной без выхода. Работа с такими случаями развивает строгость мышления.",
      "Научный стиль анализа требует описывать не только решение, но и предпосылки. Нужно объяснять, какие данные доступны, какие ограничения действуют, какие случаи считаются допустимыми и как программа должна вести себя при ошибочном вводе.",
      "Игровые механики также показывают важность инвариантов. Если герой всегда должен находиться внутри карты, программа обязана сохранять это свойство после любого действия. Инварианты помогают рассуждать о корректности алгоритма.",
      "В результате студент начинает понимать программирование как формальное моделирование поведения. Это знание переносится за пределы игр: на интерфейсы сайтов, обработку форм, маршрутизацию, бизнес-логику и любые системы, где состояние меняется по правилам.",
    ],
    en: [
      "Algorithmic thinking develops when students learn to see a task not as one action but as a structure of connected operations. Game mechanics are convenient because every rule must become a verifiable sequence of steps.",
      "State is central. Until state is explicit, the program depends on the developer's informal idea. When state is described by variables, arrays, and objects, it can be checked, changed, and passed between program parts.",
      "Games clearly show action validity. A player may want to move, but the program must check whether rules allow it. This includes map boundaries, obstacles, current character state, and interaction consequences.",
      "Logical expressions combine several conditions. Victory may require the player to be at the exit, have the key, and not be defeated. One wrong AND or OR operator can change the whole mechanic, so logic must be written carefully.",
      "A grid map is a bridge between programming and mathematics. It can be viewed as an array, coordinate plane, or graph. Depending on the task, students choose the model that describes behavior most simply.",
      "Pathfinding shows that not every game task is solved by a simple condition. Sometimes a program must consider many possible options, evaluate constraints, and choose an action sequence. This leads to graph algorithm ideas.",
      "Counters and timers form the idea of time in a program. In a turn-based game, time may be measured by turns; in a dynamic game, by frames or milliseconds. Different time models require different update algorithms.",
      "Mechanic decomposition prevents excessive complexity. Instead of one function doing everything, input reading, move checking, state changing, item handling, and victory checking should be separated. Each part becomes understandable and testable.",
      "Algorithmic errors often appear because cases are incomplete. A student may check right movement but forget the left boundary, handle key pickup but not repeated pickup, or allow victory without reaching the exit. Such cases develop rigor.",
      "Scientific analysis requires describing not only the solution but also assumptions. We must explain available data, active constraints, valid cases, and expected behavior for incorrect input.",
      "Game mechanics also show the importance of invariants. If the hero must always remain inside the map, the program must preserve this property after every action. Invariants support reasoning about algorithm correctness.",
      "Students therefore begin to understand programming as formal modeling of behavior. This knowledge transfers beyond games: to website interfaces, form handling, routing, business logic, and any system where state changes by rules.",
    ],
  },
  "csharp-adventure-game": {
    ru: [
      "Мини-игра-бродилка на C# удобна как итоговый проект, потому что она достаточно проста для начинающего уровня и одновременно содержит основные элементы интерактивной системы. В ней есть данные, ввод, обработка, вывод, условие завершения и возможность расширения.",
      "Проектирование следует начинать не с кода, а с описания модели. Нужно определить, какие символы используются на карте, где находится игрок, какие клетки считаются препятствиями, какой предмет нужен для победы и какие команды доступны пользователю.",
      "Двумерный массив char[,] является наглядным способом хранения карты. Каждая ячейка массива соответствует клетке игрового поля. Такое представление помогает понять связь между индексами массива и координатами на экране.",
      "Координаты игрока можно хранить отдельно от карты. Это позволяет не перезаписывать структуру уровня при каждом движении, а выводить символ игрока в нужной позиции во время отрисовки. Такой подход показывает различие между данными уровня и динамическим состоянием.",
      "Функция отрисовки должна отвечать только за вывод. Она не должна принимать решение о победе или изменять координаты. Это важный архитектурный принцип: функция становится понятнее, если у нее одна ответственность.",
      "Обработка ввода преобразует символ команды в предполагаемое изменение координат. Команда W уменьшает вертикальную координату, S увеличивает ее, A сдвигает влево, D сдвигает вправо. После этого программа еще не должна двигать героя, пока не проверит допустимость новой позиции.",
      "Проверка движения защищает программу от ошибок. Она должна убедиться, что координата находится внутри массива, новая клетка не является стеной и действие соответствует правилам. Только после такой проверки можно обновлять состояние.",
      "Подбор ключа является примером изменения логического состояния. Когда игрок попадает на клетку с ключом, переменная hasKey становится true, а клетка карты может очищаться. Это показывает, как событие меняет данные сразу в нескольких местах.",
      "Условие победы должно быть выделено явно. Если проверка победы спрятана внутри обработки движения, код становится труднее читать и тестировать. Отдельная функция CheckVictory делает правило понятным и пригодным для изменения.",
      "Игровой цикл обеспечивает повторение. Пока игра не завершена, программа выводит карту, читает команду, проверяет движение, обновляет состояние и снова выводит результат. Такая структура встречается не только в играх, но и во многих интерактивных приложениях.",
      "Тестирование мини-игры должно включать обычные и граничные случаи. Нужно проверить движение к стене, выход за границы, подбор ключа, попытку выйти без ключа, победу с ключом и реакцию на неизвестную команду. Это формирует профессиональную привычку проверять программу системно.",
      "Расширение проекта может идти постепенно. Можно добавить несколько уровней, врагов, счетчик ходов, очки, ловушки, сохранение результата или генерацию карты. Если базовая архитектура разделяет карту, состояние, ввод и правила, такие изменения не потребуют полного переписывания.",
    ],
    en: [
      "A C# mini adventure game is a useful final project because it is simple enough for beginners while containing the main elements of an interactive system: data, input, processing, output, completion condition, and extensibility.",
      "Design should begin not with code but with the model. We must define map symbols, player position, obstacle cells, the item needed for victory, and available commands.",
      "A char[,] two-dimensional array is a clear way to store the map. Each array cell corresponds to a field cell. This representation helps connect array indices with screen coordinates.",
      "Player coordinates can be stored separately from the map. This avoids rewriting the level structure on every move and allows the player symbol to be drawn at the current position. It shows the difference between level data and dynamic state.",
      "The drawing function should only handle output. It should not decide victory or change coordinates. This is an important architectural principle: a function is clearer when it has one responsibility.",
      "Input processing converts a command character into a proposed coordinate change. W decreases vertical coordinate, S increases it, A moves left, and D moves right. The program should not move the hero until it validates the new position.",
      "Movement checking protects the program from errors. It must ensure that the coordinate is inside the array, the new cell is not a wall, and the action follows the rules. Only then can state be updated.",
      "Key pickup is an example of logical state change. When the player reaches the key cell, hasKey becomes true and the map cell may be cleared. This shows how one event changes data in several places.",
      "The victory condition should be explicit. If the check is hidden inside movement handling, the code becomes harder to read and test. A separate CheckVictory function makes the rule understandable and changeable.",
      "The game loop provides repetition. Until the game is over, the program draws the map, reads a command, checks movement, updates state, and displays the result again. This structure appears not only in games but in many interactive applications.",
      "Testing the mini-game should include normal and boundary cases. We should test wall movement, map boundary attempts, key pickup, trying to exit without the key, victory with the key, and unknown commands. This forms a professional habit of systematic testing.",
      "The project can grow gradually. Several levels, enemies, move counters, score, traps, saving results, or map generation can be added. If the base architecture separates map, state, input, and rules, such changes do not require rewriting everything.",
    ],
  },
};

const withExtendedLectureText = (lecture: Lecture): Lecture => ({
  ...lecture,
  extendedParagraphs: {
    ru: [
      ...(lectureAddenda[lecture.id]?.ru ?? []),
      ...(lectureResearchAppendix[lecture.id]?.ru ?? []),
    ],
    en: [
      ...(lectureAddenda[lecture.id]?.en ?? []),
      ...(lectureResearchAppendix[lecture.id]?.en ?? []),
    ],
  },
});

const baseLectures: Lecture[] = [
  {
    id: "digital-tech-esports",
    order: 1,
    title: {
      ru: "Введение в цифровые технологии и компьютерный спорт",
      en: "Introduction to Digital Technologies and Esports",
    },
    summary: {
      ru: "Базовые понятия цифровой среды: данные, интерфейсы, игровые жанры, соревнования и роль вычислительных систем.",
      en: "Core concepts of the digital environment: data, interfaces, game genres, competitions, and computing systems.",
    },
    image: lectureImages.esports,
    content: {
      ru: "Компьютерный спорт рассматривается как технологическая экосистема, где игровая механика, сеть, данные и пользовательский интерфейс образуют единую интерактивную систему.",
      en: "Esports is studied as a technological ecosystem where game mechanics, networks, data, and user interfaces form one interactive system.",
    },
    blocks: [
      {
        title: { ru: "Цифровая среда", en: "Digital environment" },
        body: {
          ru: "Игра работает как программная модель мира: она хранит состояния объектов, принимает ввод игрока, применяет правила и отображает результат через интерфейс.",
          en: "A game works as a software model of a world: it stores object states, receives player input, applies rules, and shows results through an interface.",
        },
      },
      {
        title: { ru: "Киберспорт как система", en: "Esports as a system" },
        body: {
          ru: "Турнир включает игроков, серверы, античит, судейство, трансляцию, статистику и зрительский слой. Все эти части связаны информационными технологиями.",
          en: "A tournament includes players, servers, anti-cheat, refereeing, broadcasting, statistics, and a spectator layer. All these parts are connected by IT.",
        },
      },
    ],
    pages: [
      page(
        "Страница 1. Цифровые технологии как основа современной игры",
        "Page 1. Digital Technologies as the Foundation of Modern Games",
        [
          "Цифровые технологии в широком смысле включают методы хранения, обработки, передачи и визуализации информации. В компьютерной игре эти методы проявляются одновременно: движок рассчитывает физику, клиент отображает кадры, сервер проверяет события, а интерфейс превращает данные в понятные игроку сигналы.",
          "Любая соревновательная игра является формальной системой. В ней есть правила, набор допустимых действий, пространство состояний и механизм оценки результата. Научный интерес здесь состоит в том, что игровая ситуация может быть описана как модель: объекты имеют параметры, действия изменяют параметры, а алгоритмы определяют последствия.",
          "Для студента важно видеть разницу между визуальной оболочкой и информационной структурой. Красивый эффект выстрела на экране связан с координатами, скоростью, проверкой попадания, звуком, сетевой синхронизацией и записью события в статистику матча.",
        ],
        [
          "Digital technologies include methods for storing, processing, transmitting, and visualizing information. In a computer game these methods work together: the engine calculates physics, the client renders frames, the server validates events, and the interface turns data into readable signals.",
          "Every competitive game is a formal system. It has rules, allowed actions, a state space, and a way to evaluate results. From a scientific point of view, a game situation can be modeled: objects have parameters, actions change parameters, and algorithms define consequences.",
          "Students should separate visual presentation from information structure. A shot effect on screen is connected with coordinates, velocity, hit detection, sound, network synchronization, and match statistics.",
        ],
        [
          "Игра состоит из данных, алгоритмов и интерфейса.",
          "Киберспортивный матч можно анализировать как формальную систему.",
          "Визуальное событие почти всегда имеет скрытую вычислительную структуру.",
        ],
        [
          "A game consists of data, algorithms, and interface.",
          "An esports match can be analyzed as a formal system.",
          "A visual event almost always has hidden computational structure.",
        ],
      ),
      page(
        "Страница 2. Компьютерный спорт как информационная экосистема",
        "Page 2. Esports as an Information Ecosystem",
        [
          "Компьютерный спорт отличается от обычной игры тем, что результат должен быть воспроизводимым, проверяемым и признанным участниками соревнования. Поэтому вокруг игры строится инфраструктура: серверы, рейтинговые системы, античит, протоколы проведения матчей, средства трансляции и инструменты аналитики.",
          "Информационный поток матча начинается с действий игрока и заканчивается статистикой для тренера, зрителя или судьи. Нажатие клавиши превращается в пакет данных, пакет проходит через сеть, сервер принимает решение, клиент получает обновленное состояние, а система логирования сохраняет событие.",
          "Такой подход делает киберспорт хорошей учебной областью для IT. На одном примере можно изучать сети, базы данных, безопасность, визуализацию, UX-дизайн, алгоритмы и программирование интерактивных систем.",
        ],
        [
          "Esports differs from casual play because the result must be reproducible, verifiable, and accepted by participants. That is why games are surrounded by infrastructure: servers, rating systems, anti-cheat, match protocols, broadcasting tools, and analytics.",
          "The match information flow starts with player actions and ends with statistics for coaches, spectators, or referees. A key press becomes a data packet, the packet moves through the network, the server makes a decision, the client receives an updated state, and logging stores the event.",
          "This makes esports a strong learning domain for IT. One example can cover networks, databases, security, visualization, UX design, algorithms, and interactive programming.",
        ],
        [
          "Киберспорт требует проверяемой цифровой инфраструктуры.",
          "Матч можно представить как непрерывный поток данных.",
          "Одна игровая сцена связывает множество IT-дисциплин.",
        ],
        [
          "Esports requires verifiable digital infrastructure.",
          "A match can be represented as a continuous data flow.",
          "One game scene connects many IT disciplines.",
        ],
      ),
      page(
        "Страница 3. Жанры, интерфейсы и учебная ценность киберспорта",
        "Page 3. Genres, Interfaces, and Educational Value",
        [
          "Разные жанры киберспорта по-разному используют технологии. В шутерах критичны задержка, точность регистрации попаданий и синхронизация позиций. В стратегиях важны управление большим количеством объектов, туман войны и обработка команд. В MOBA-играх особенно заметны состояния персонажей, способности, экономика и командная координация.",
          "Интерфейс в киберспорте выполняет не декоративную, а когнитивную функцию. Он должен быстро передавать игроку состояние здоровья, ресурсов, времени, карты и угроз. Хороший интерфейс снижает когнитивную нагрузку: студент может связать это с принципами человеко-компьютерного взаимодействия.",
          "Образовательная ценность темы в том, что она близка студентам и одновременно достаточно сложна для научного анализа. Через киберспорт удобно объяснять абстрактные понятия: модель, алгоритм, событие, состояние, протокол, задержка, надежность и безопасность.",
        ],
        [
          "Different esports genres use technologies differently. Shooters depend on latency, hit registration, and position synchronization. Strategy games rely on many controlled objects, fog of war, and command processing. MOBA games highlight character states, abilities, economy, and team coordination.",
          "The esports interface is not just decorative; it has a cognitive function. It must quickly communicate health, resources, time, map state, and threats. A good interface reduces cognitive load, which connects the topic with human-computer interaction.",
          "The educational value is that esports feels familiar to students while still being complex enough for scientific analysis. It helps explain models, algorithms, events, states, protocols, latency, reliability, and security.",
        ],
        [
          "Жанр игры определяет ключевые технологические требования.",
          "Интерфейс помогает принимать решения под ограничением времени.",
          "Киберспорт удобен для объяснения базовых научных понятий IT.",
        ],
        [
          "Game genre defines key technological requirements.",
          "Interface helps make decisions under time pressure.",
          "Esports is useful for explaining core IT concepts.",
        ],
      ),
    ],
    outcomes: {
      ru: [
        "Понимает игру как цифровую модель с данными и алгоритмами",
        "Объясняет киберспорт как информационную экосистему",
        "Связывает жанры игр с технологическими требованиями",
      ],
      en: [
        "Understand a game as a digital model with data and algorithms",
        "Explain esports as an information ecosystem",
        "Connect game genres with technological requirements",
      ],
    },
  },
  {
    id: "it-role-in-esports",
    order: 2,
    title: {
      ru: "Роль информационных технологий в киберспорте",
      en: "The Role of Information Technology in Esports",
    },
    summary: {
      ru: "Сети, серверы, базы данных, античит и аналитика как фундамент честной и быстрой игры.",
      en: "Networks, servers, databases, anti-cheat, and analytics as the foundation of fair and fast gameplay.",
    },
    image: lectureImages.digitalTech,
    content: {
      ru: "Во второй лекции изучается техническая инфраструктура матча: передача данных, серверная логика, безопасность, хранение рейтингов и анализ игровых событий.",
      en: "The second lecture studies match infrastructure: data transmission, server logic, security, rating storage, and event analytics.",
    },
    blocks: [
      {
        title: { ru: "Сетевая задержка", en: "Network latency" },
        body: {
          ru: "Пинг показывает время обмена данными между клиентом и сервером. Для соревнований важны не только низкие значения, но и стабильность.",
          en: "Ping shows the data exchange time between client and server. Competitive play needs not only low latency but also stability.",
        },
      },
      {
        title: { ru: "Данные и честность", en: "Data and fairness" },
        body: {
          ru: "Античит, серверная валидация и логи событий помогают отличать честную игру от вмешательства.",
          en: "Anti-cheat, server-side validation, and event logs help distinguish fair play from interference.",
        },
      },
    ],
    pages: [
      page(
        "Страница 1. Сетевые технологии и задержка",
        "Page 1. Network Technologies and Latency",
        [
          "Сетевая игра основана на постоянном обмене сообщениями между клиентами и сервером. Клиент передает действия игрока, сервер проверяет их допустимость, обновляет состояние мира и возвращает результат участникам. Такая архитектура позволяет сделать матч управляемым и проверяемым.",
          "Задержка возникает из-за времени прохождения пакетов, обработки на сетевом оборудовании, очередей, расстояния до сервера и нагрузки. В киберспорте важны ping, jitter и packet loss: первый показывает среднюю задержку, второй — нестабильность задержки, третий — потерю данных.",
          "Научная проблема состоит в поиске баланса между отзывчивостью и достоверностью. Если клиенту дать слишком много свободы, появляется риск читерства. Если все решения ждать от сервера, управление может ощущаться медленным. Поэтому используются предсказание на клиенте, интерполяция и серверная коррекция.",
        ],
        [
          "An online game relies on constant message exchange between clients and a server. The client sends player actions, the server validates them, updates world state, and returns the result. This architecture makes the match controllable and verifiable.",
          "Latency appears because packets need time to travel, be processed by network equipment, wait in queues, cross distance, and handle load. Esports cares about ping, jitter, and packet loss: average delay, delay instability, and lost data.",
          "The scientific challenge is balancing responsiveness and correctness. Too much client authority creates cheating risks; waiting for every server decision can feel slow. Client prediction, interpolation, and server correction solve part of this problem.",
        ],
        [
          "Серверная архитектура повышает проверяемость матча.",
          "Jitter и packet loss могут быть важнее среднего ping.",
          "Предсказание и коррекция нужны для баланса скорости и честности.",
        ],
        [
          "Server architecture improves match verifiability.",
          "Jitter and packet loss can matter more than average ping.",
          "Prediction and correction balance speed and fairness.",
        ],
      ),
      page(
        "Страница 2. Хранение данных, рейтинги и аналитика",
        "Page 2. Data Storage, Ratings, and Analytics",
        [
          "Киберспортивная платформа хранит учетные записи, историю матчей, рейтинги, настройки, достижения и дисциплинарные события. Эти данные должны быть целостными: потеря или изменение рейтинга без причины разрушает доверие к системе.",
          "Рейтинговые модели используют статистику побед, поражений, силы соперников и иногда индивидуальные показатели. Важно понимать, что рейтинг — это не просто число, а вычисленная оценка, основанная на модели. Такая модель может иметь погрешности и должна анализироваться критически.",
          "Аналитика помогает тренерам и игрокам находить закономерности: частые ошибки, удачные карты, эффективность ролей, темп принятия решений. На уровне IT это задача сбора, очистки, агрегации и визуализации данных.",
        ],
        [
          "An esports platform stores accounts, match history, ratings, settings, achievements, and disciplinary events. This data must remain consistent because unexplained rating changes damage trust.",
          "Rating models use wins, losses, opponent strength, and sometimes individual metrics. A rating is not just a number; it is a computed estimate based on a model. Such models can be imperfect and must be analyzed critically.",
          "Analytics helps coaches and players find patterns: common mistakes, strong maps, role efficiency, and decision tempo. In IT terms, this is about collecting, cleaning, aggregating, and visualizing data.",
        ],
        [
          "Рейтинг является результатом модели, а не абсолютной истиной.",
          "Целостность данных влияет на доверие игроков.",
          "Аналитика превращает события матча в учебные выводы.",
        ],
        [
          "Rating is a model output, not absolute truth.",
          "Data integrity affects player trust.",
          "Analytics turns match events into learning insights.",
        ],
      ),
      page(
        "Страница 3. Безопасность и античит",
        "Page 3. Security and Anti-Cheat",
        [
          "Безопасность в киберспорте включает защиту аккаунтов, серверов, клиентского приложения и турнирной инфраструктуры. Нарушение безопасности может привести к нечестному преимуществу, утечке персональных данных или срыву соревнования.",
          "Античит-системы используют разные подходы: проверку целостности файлов, анализ поведения, сигнатуры известных программ, серверную валидацию невозможных действий. Современный подход не опирается на один признак, а сравнивает множество сигналов.",
          "Этическая сторона тоже важна. Система безопасности должна защищать соревнование, но не нарушать права пользователя сверх необходимого. Поэтому проектирование античита связано не только с программированием, но и с правом, приватностью и управлением рисками.",
        ],
        [
          "Security in esports includes protection of accounts, servers, client applications, and tournament infrastructure. A security failure may create unfair advantage, leak personal data, or disrupt competition.",
          "Anti-cheat systems use several approaches: file integrity checks, behavior analysis, signatures of known tools, and server validation of impossible actions. Modern systems combine many signals instead of relying on one indicator.",
          "Ethics also matters. Security should protect competition without violating user rights beyond necessity. Anti-cheat design is connected not only with programming but also with law, privacy, and risk management.",
        ],
        [
          "Античит сочетает технические и организационные меры.",
          "Серверная проверка уменьшает доверие к потенциально измененному клиенту.",
          "Безопасность должна учитывать приватность пользователя.",
        ],
        [
          "Anti-cheat combines technical and organizational measures.",
          "Server validation reduces trust in a potentially modified client.",
          "Security must consider user privacy.",
        ],
      ),
    ],
    outcomes: {
      ru: [
        "Объясняет сетевую архитектуру матча",
        "Понимает роль баз данных и рейтинговых моделей",
        "Различает технические и этические аспекты античита",
      ],
      en: [
        "Explain online match architecture",
        "Understand databases and rating models",
        "Distinguish technical and ethical aspects of anti-cheat",
      ],
    },
  },
  {
    id: "games-and-programming",
    order: 3,
    title: {
      ru: "Как игры помогают изучать программирование",
      en: "How Games Help Learn Programming",
    },
    summary: {
      ru: "Переменные, условия, циклы и события становятся понятнее через игровые задачи и мгновенную обратную связь.",
      en: "Variables, conditions, loops, and events become clearer through game tasks and immediate feedback.",
    },
    image: lectureImages.programmingGame,
    content: {
      ru: "Игры позволяют увидеть, как абстрактная инструкция превращается в поведение объекта: герой движется, дверь открывается, счет изменяется, уровень завершается.",
      en: "Games show how an abstract instruction becomes object behavior: a hero moves, a door opens, score changes, and a level ends.",
    },
    blocks: [
      {
        title: { ru: "Событийность", en: "Events" },
        body: {
          ru: "Игровой код часто реагирует на события: нажатие клавиши, столкновение, таймер, победу или поражение.",
          en: "Game code often reacts to events: a key press, collision, timer, victory, or defeat.",
        },
      },
      {
        title: { ru: "Мгновенный результат", en: "Instant result" },
        body: {
          ru: "Изменение числа в коде сразу меняет скорость, урон или количество очков, поэтому связь между кодом и поведением становится очевидной.",
          en: "Changing a number in code immediately changes speed, damage, or score, making the code-behavior connection obvious.",
        },
      },
    ],
    pages: [
      page(
        "Страница 1. Конструктивизм и обучение через действие",
        "Page 1. Constructivism and Learning by Doing",
        [
          "Игровое обучение хорошо согласуется с идеей конструктивизма: знание формируется активным действием, а не только чтением правил. Студент пробует гипотезу, получает результат, исправляет ошибку и постепенно строит внутреннюю модель языка программирования.",
          "В программировании сложность часто связана с невидимостью процессов. Переменная, условие или цикл не имеют естественной формы. Игра делает их наблюдаемыми: переменная становится здоровьем героя, условие — закрытой дверью, цикл — повторяющейся волной противников.",
          "Мгновенная обратная связь снижает страх ошибки. Ошибка превращается в эксперимент: если герой не двигается, студент ищет причину в вводе, координатах или проверке границ. Это формирует инженерное мышление.",
        ],
        [
          "Game-based learning fits constructivism: knowledge is built through active action, not only by reading rules. The student tests a hypothesis, receives a result, fixes mistakes, and builds an internal model of the programming language.",
          "Programming is difficult partly because processes are invisible. A variable, condition, or loop has no natural shape. Games make them observable: a variable becomes health, a condition becomes a locked door, and a loop becomes a repeating enemy wave.",
          "Immediate feedback reduces fear of errors. A bug becomes an experiment: if the hero does not move, the student checks input, coordinates, or boundary validation. This builds engineering thinking.",
        ],
        [
          "Игровая задача делает абстрактный код наблюдаемым.",
          "Ошибка становится источником обратной связи.",
          "Студент учится строить и проверять гипотезы.",
        ],
        [
          "A game task makes abstract code observable.",
          "An error becomes a source of feedback.",
          "The student learns to build and test hypotheses.",
        ],
      ),
      page(
        "Страница 2. Базовые конструкции языка в игровых ситуациях",
        "Page 2. Basic Language Constructs in Game Situations",
        [
          "Переменные удобно объяснять через параметры персонажа: здоровье, скорость, координаты, количество патронов или очков. Тип данных определяет, какие операции возможны: число можно сравнить, строку вывести, логическое значение использовать как флаг.",
          "Условия if/else описывают развилки правил. Если здоровье меньше нуля — игрок проиграл; если найден ключ — дверь открыта; если команда недопустима — позиция не меняется. Такие примеры показывают, что условие является формальным выражением правила.",
          "Циклы позволяют описывать повторение: вывод карты, обработку ходов, генерацию врагов, подсчет очков. Важно объяснять не только синтаксис цикла, но и условие остановки, иначе программа может зависнуть в бесконечном повторении.",
        ],
        [
          "Variables are easy to explain through character parameters: health, speed, coordinates, ammo, or score. Data type defines possible operations: a number can be compared, a string printed, and a boolean used as a flag.",
          "If/else conditions describe rule branches. If health is below zero, the player loses; if a key is found, the door opens; if a command is invalid, position stays unchanged. These examples show that a condition is a formal rule expression.",
          "Loops describe repetition: drawing a map, processing turns, generating enemies, counting points. It is important to explain not only loop syntax but also the stopping condition, otherwise the program may repeat forever.",
        ],
        [
          "Переменная хранит состояние игрового объекта.",
          "Условие формализует игровое правило.",
          "Цикл задает повторение и требует условия остановки.",
        ],
        [
          "A variable stores game object state.",
          "A condition formalizes a game rule.",
          "A loop defines repetition and needs a stopping condition.",
        ],
      ),
      page(
        "Страница 3. События, состояние и отладка",
        "Page 3. Events, State, and Debugging",
        [
          "Интерактивная программа отличается от линейной тем, что она реагирует на события. В игре событием может быть нажатие клавиши, столкновение объектов, истечение времени или получение предмета. Программист должен определить, какие данные меняются после события.",
          "Состояние — это текущий набор значений, описывающих программу. В мини-игре состояние включает координаты героя, карту, наличие ключа, счет, здоровье и флаг победы. От правильного управления состоянием зависит предсказуемость поведения.",
          "Отладка в игровом контексте становится естественной: студент видит неправильное поведение и ищет участок кода, который изменил состояние неверно. Полезно выводить промежуточные значения, проверять границы массива и тестировать отдельные функции.",
        ],
        [
          "An interactive program differs from a linear one because it reacts to events. In a game, an event may be a key press, collision, timer expiration, or item pickup. The programmer must define which data changes after the event.",
          "State is the current set of values describing the program. In a mini-game it includes hero coordinates, map, key possession, score, health, and victory flag. Predictable behavior depends on correct state management.",
          "Debugging becomes natural in a game context: the student sees wrong behavior and searches for the code section that changed state incorrectly. It is useful to print intermediate values, check array boundaries, and test separate functions.",
        ],
        [
          "Событие запускает изменение состояния.",
          "Состояние должно быть явным и проверяемым.",
          "Отладка связывает видимый сбой с причиной в коде.",
        ],
        [
          "An event triggers state change.",
          "State should be explicit and verifiable.",
          "Debugging connects visible failure with a code cause.",
        ],
      ),
    ],
    outcomes: {
      ru: [
        "Связывает базовые конструкции языка с игровыми ситуациями",
        "Понимает роль обратной связи в обучении программированию",
        "Использует состояние и события для объяснения интерактивного кода",
      ],
      en: [
        "Connect language basics with game situations",
        "Understand feedback in programming education",
        "Use state and events to explain interactive code",
      ],
    },
  },
  {
    id: "interactive-learning-platforms",
    order: 4,
    title: {
      ru: "Интерактивные игровые платформы для обучения программированию",
      en: "Interactive Game Platforms for Learning Programming",
    },
    summary: {
      ru: "Как образовательные платформы используют миссии, уровни, автоматическую проверку, песочницы и геймификацию.",
      en: "How educational platforms use missions, levels, automatic checks, sandboxes, and gamification.",
    },
    image: lectureImages.learningPlatform,
    content: {
      ru: "Интерактивная платформа превращает обучение в последовательность задач, где студент пишет код, получает проверку, видит результат и открывает следующий уровень сложности.",
      en: "An interactive platform turns learning into a sequence of tasks where the student writes code, receives checks, sees results, and unlocks the next difficulty level.",
    },
    blocks: [
      {
        title: { ru: "Песочница", en: "Sandbox" },
        body: {
          ru: "Песочница позволяет безопасно экспериментировать с кодом и быстро получать демонстрационный результат.",
          en: "A sandbox allows safe code experiments and quick demonstration results.",
        },
      },
      {
        title: { ru: "Геймификация", en: "Gamification" },
        body: {
          ru: "Очки, бейджи и уровни работают лучше, когда поддерживают учебную цель, а не заменяют ее.",
          en: "Points, badges, and levels work best when they support the learning goal instead of replacing it.",
        },
      },
    ],
    pages: [
      page(
        "Страница 1. Архитектура образовательной платформы",
        "Page 1. Educational Platform Architecture",
        [
          "Интерактивная платформа обычно состоит из интерфейса задания, редактора кода, системы запуска, проверяющего модуля, базы прогресса и панели обратной связи. Даже без backend можно проектировать эти части отдельно, чтобы позже заменить имитацию реальным исполнением.",
          "С педагогической точки зрения важна постепенность. Задание должно иметь ясную цель, ограниченный объем и критерий успешности. Если студент не понимает, что именно проверяется, автоматическая система превращается в черный ящик и снижает мотивацию.",
          "Хорошая платформа хранит не только результат, но и путь обучения: какие темы открыты, где были ошибки, сколько попыток потребовалось, какие подсказки использовались. Эти данные помогают адаптировать сложность.",
        ],
        [
          "An interactive platform usually consists of a task interface, code editor, runner, checking module, progress database, and feedback panel. Even without a backend, these parts can be designed separately so simulation can later be replaced by real execution.",
          "From a pedagogical point of view, progression is important. A task needs a clear goal, limited scope, and success criterion. If the student does not understand what is checked, automation becomes a black box and lowers motivation.",
          "A good platform stores not only the result but also the learning path: opened topics, mistakes, attempts, and used hints. This data helps adapt difficulty.",
        ],
        [
          "Платформа должна разделять UI, запуск кода и проверку.",
          "Критерий успешности задания должен быть понятен студенту.",
          "Прогресс обучения является ценным источником данных.",
        ],
        [
          "A platform should separate UI, code execution, and checking.",
          "Task success criteria must be clear to the student.",
          "Learning progress is a valuable data source.",
        ],
      ),
      page(
        "Страница 2. Автоматическая проверка и обратная связь",
        "Page 2. Automatic Checking and Feedback",
        [
          "Автоматическая проверка может быть синтаксической, функциональной и поведенческой. Синтаксическая проверка ищет ошибки языка, функциональная сравнивает вывод с ожидаемым, поведенческая анализирует стратегию решения или последовательность действий.",
          "Для начинающих особенно важна объясняющая обратная связь. Сообщение вида «неверно» почти не помогает. Лучше указать, какая часть правила нарушена: переменная не обновляется, условие не учитывает границу, цикл не завершается.",
          "В игровой платформе обратная связь может быть визуальной: герой не проходит через стену, дверь остается закрытой, уровень не завершается. Однако визуальный эффект нужно дополнять текстовой подсказкой, чтобы студент понял причину.",
        ],
        [
          "Automatic checking can be syntactic, functional, and behavioral. Syntax checks find language errors, functional checks compare output with expected results, and behavioral checks analyze the strategy or action sequence.",
          "Beginners need explanatory feedback. A message like 'wrong' is almost useless. It is better to show which rule failed: a variable is not updated, a condition ignores a boundary, or a loop does not stop.",
          "In a game platform, feedback can be visual: the hero does not pass through a wall, the door remains closed, or the level does not end. Visual effects should be paired with text hints so the student understands the cause.",
        ],
        [
          "Проверка может анализировать синтаксис, результат и поведение.",
          "Обратная связь должна объяснять причину ошибки.",
          "Визуальная реакция усиливает, но не заменяет текстовую подсказку.",
        ],
        [
          "Checking can analyze syntax, output, and behavior.",
          "Feedback should explain the cause of an error.",
          "Visual reaction strengthens but does not replace text hints.",
        ],
      ),
      page(
        "Страница 3. Геймификация и мотивация",
        "Page 3. Gamification and Motivation",
        [
          "Геймификация использует игровые элементы вне полноценной игры: очки, уровни, бейджи, рейтинги, серии занятий и миссии. Ее задача — не развлечь любой ценой, а сделать учебный прогресс видимым и эмоционально ощутимым.",
          "Научная проблема геймификации состоит в балансе внешней и внутренней мотивации. Если студент учится только ради бейджа, интерес к теме может снизиться. Поэтому награда должна подчеркивать реальное освоение навыка: например, «написал первый цикл» или «самостоятельно отладил ошибку».",
          "В киберспортивной тематике геймификация особенно естественна: уровень студента, достижения и прогресс-бар похожи на игровые системы. Но интерфейс должен оставаться учебным инструментом, а не отвлекать от практики.",
        ],
        [
          "Gamification uses game elements outside a full game: points, levels, badges, ratings, streaks, and missions. Its goal is not entertainment at any cost, but making learning progress visible and emotionally noticeable.",
          "The scientific problem is balancing external and internal motivation. If a student learns only for a badge, interest may decrease. Rewards should highlight real skill acquisition: writing the first loop or debugging an error independently.",
          "In esports education gamification feels natural: student level, achievements, and progress bars resemble game systems. But the interface must remain a learning tool, not a distraction from practice.",
        ],
        [
          "Геймификация должна показывать реальное развитие навыка.",
          "Награды не должны заменять учебный смысл.",
          "Игровой интерфейс обязан поддерживать концентрацию.",
        ],
        [
          "Gamification should show real skill growth.",
          "Rewards should not replace learning meaning.",
          "A game-like interface must support focus.",
        ],
      ),
    ],
    outcomes: {
      ru: [
        "Понимает архитектуру интерактивной учебной платформы",
        "Различает типы автоматической проверки",
        "Оценивает геймификацию с позиции педагогической пользы",
      ],
      en: [
        "Understand interactive learning platform architecture",
        "Distinguish automatic checking types",
        "Evaluate gamification through pedagogical value",
      ],
    },
  },
  {
    id: "algorithmic-thinking",
    order: 5,
    title: {
      ru: "Алгоритмическое мышление, логика и игровые механики",
      en: "Algorithmic Thinking, Logic, and Game Mechanics",
    },
    summary: {
      ru: "От правил уровня к алгоритмам: состояния, условия победы, поиск пути, счетчики и логика взаимодействий.",
      en: "From level rules to algorithms: states, win conditions, pathfinding, counters, and interaction logic.",
    },
    image: lectureImages.algorithmicThinking,
    content: {
      ru: "Алгоритмическое мышление помогает переводить игровую идею в последовательность точных операций, которые может выполнить программа.",
      en: "Algorithmic thinking helps translate a game idea into a sequence of precise operations a program can execute.",
    },
    blocks: [
      {
        title: { ru: "Состояния", en: "States" },
        body: {
          ru: "Игровой объект может быть активным, заблокированным, уничтоженным или завершенным. Управление состояниями делает механику предсказуемой.",
          en: "A game object may be active, locked, destroyed, or completed. State management makes mechanics predictable.",
        },
      },
      {
        title: { ru: "Алгоритм движения", en: "Movement algorithm" },
        body: {
          ru: "Даже простое движение по клеткам требует проверки границ, препятствий и условий взаимодействия.",
          en: "Even simple grid movement requires checking borders, obstacles, and interaction conditions.",
        },
      },
    ],
    pages: [
      page(
        "Страница 1. Алгоритм как описание действия",
        "Page 1. Algorithm as a Description of Action",
        [
          "Алгоритм — это конечное и однозначное описание шагов, ведущих к результату. В игровой механике алгоритм может описывать движение, атаку, подбор предмета, проверку победы или генерацию уровня.",
          "Хороший алгоритм должен быть дискретным, определенным и завершаться за конечное число шагов. Если правило сформулировано расплывчато, программа не сможет выполнить его корректно. Например, фраза «персонаж идет к выходу» должна быть превращена в координаты, направление, проверку препятствий и обновление состояния.",
          "Алгоритмическое мышление начинается с декомпозиции. Вместо «сделать игру» студент выделяет задачи: хранить карту, прочитать команду, проверить клетку, переместить героя, вывести результат, проверить победу.",
        ],
        [
          "An algorithm is a finite and unambiguous description of steps leading to a result. In game mechanics, an algorithm can describe movement, attack, item pickup, victory checking, or level generation.",
          "A good algorithm should be discrete, defined, and finish in a finite number of steps. If a rule is vague, the program cannot execute it correctly. 'The character goes to the exit' must become coordinates, direction, obstacle checks, and state updates.",
          "Algorithmic thinking starts with decomposition. Instead of 'make a game', the student separates tasks: store a map, read a command, check a cell, move the hero, print the result, and check victory.",
        ],
        [
          "Алгоритм превращает идею в точные шаги.",
          "Декомпозиция снижает сложность задачи.",
          "Игровое правило должно быть формальным.",
        ],
        [
          "An algorithm turns an idea into precise steps.",
          "Decomposition reduces task complexity.",
          "A game rule must be formal.",
        ],
      ),
      page(
        "Страница 2. Логика состояний и конечные автоматы",
        "Page 2. State Logic and Finite-State Machines",
        [
          "Многие игровые объекты удобно описывать через состояния. Дверь может быть закрыта, открыта или заблокирована; квест — не начат, активен или завершен; игрок — жив, ранен или побежден. Каждое состояние ограничивает допустимые действия.",
          "Конечный автомат — модель, в которой система находится в одном из конечного набора состояний и переходит между ними по событиям. Для учебной игры это понятная научная схема: событие «найден ключ» переводит дверь из состояния «закрыта» в состояние «открыта».",
          "Такой подход помогает избегать хаотичных условий. Вместо десятков несвязанных флагов программист задает понятную структуру переходов: какие события разрешены, что они меняют и какие состояния невозможны.",
        ],
        [
          "Many game objects are conveniently described through states. A door may be closed, open, or locked; a quest may be new, active, or completed; a player may be alive, wounded, or defeated. Each state limits allowed actions.",
          "A finite-state machine is a model where a system is in one of a finite set of states and transitions between them by events. For an educational game, this is clear: the event 'key found' moves the door from 'closed' to 'open'.",
          "This approach helps avoid chaotic conditions. Instead of many unrelated flags, the programmer defines a clear transition structure: which events are allowed, what they change, and which states are impossible.",
        ],
        [
          "Состояние ограничивает допустимые действия объекта.",
          "Конечный автомат описывает переходы между состояниями.",
          "Явная модель состояний уменьшает количество ошибок.",
        ],
        [
          "State limits allowed object actions.",
          "A finite-state machine describes state transitions.",
          "An explicit state model reduces errors.",
        ],
      ),
      page(
        "Страница 3. Игровые механики как алгоритмические задачи",
        "Page 3. Game Mechanics as Algorithmic Tasks",
        [
          "Движение по клеточной карте требует проверки границ массива и типа клетки. Если новая координата выходит за пределы карты или содержит стену, перемещение запрещается. Если клетка содержит предмет, состояние инвентаря меняется.",
          "Поиск пути — более сложная механика, где программа должна найти последовательность шагов от начальной точки к цели. Даже если в курсе используется простая мини-игра, полезно понимать идею графа: клетки являются вершинами, а возможные переходы — ребрами.",
          "Условие победы объединяет несколько фактов состояния. Например, игрок находится у выхода и имеет ключ. Такая логика учит работать с булевыми выражениями, операторами AND/OR и проверкой нескольких критериев одновременно.",
        ],
        [
          "Movement on a grid map requires checking array boundaries and cell type. If the new coordinate is outside the map or contains a wall, movement is forbidden. If the cell contains an item, inventory state changes.",
          "Pathfinding is a more complex mechanic where the program must find a sequence of steps from start to goal. Even in a simple mini-game, it is useful to understand a graph: cells are vertices, possible moves are edges.",
          "A win condition combines several state facts. For example, the player is at the exit and has the key. This teaches boolean expressions, AND/OR operators, and checking several criteria at once.",
        ],
        [
          "Клеточная карта связана с массивами и графами.",
          "Движение требует проверки допустимости действия.",
          "Победа часто задается комбинацией логических условий.",
        ],
        [
          "A grid map connects arrays and graphs.",
          "Movement requires action validity checks.",
          "Victory is often defined by combined logical conditions.",
        ],
      ),
    ],
    outcomes: {
      ru: [
        "Переводит игровые правила в алгоритмы",
        "Использует состояния и конечные автоматы для описания механик",
        "Понимает связь карт, массивов, графов и условий победы",
      ],
      en: [
        "Translate game rules into algorithms",
        "Use states and finite-state machines for mechanics",
        "Understand maps, arrays, graphs, and win conditions",
      ],
    },
  },
  {
    id: "csharp-adventure-game",
    order: 6,
    title: {
      ru: "Создание мини-игры-бродилки на C#",
      en: "Creating a Mini Adventure Game in C#",
    },
    summary: {
      ru: "Финальная лекция: проектирование карты, героя, команд управления, инвентаря и условия победы в консольной игре.",
      en: "Final lecture: designing a map, hero, controls, inventory, and victory condition in a console game.",
    },
    image: lectureImages.csharpMiniGame,
    content: {
      ru: "Финальная тема соединяет идеи курса в небольшой консольной игре на C#: данные хранят карту и состояние, алгоритмы обрабатывают команды, интерфейс показывает результат.",
      en: "The final topic combines course ideas in a small C# console game: data stores map and state, algorithms process commands, and the interface shows results.",
    },
    blocks: [
      {
        title: { ru: "Карта как массив", en: "Map as an array" },
        body: {
          ru: "Двумерный массив хранит стены, свободные клетки, старт, предметы и выход. Это простой способ представить игровой уровень в коде.",
          en: "A two-dimensional array stores walls, empty cells, start, items, and exit. It is a simple way to represent a game level in code.",
        },
      },
      {
        title: { ru: "Игровой цикл", en: "Game loop" },
        body: {
          ru: "Цикл читает команду игрока, обновляет позицию, перерисовывает карту и проверяет победу.",
          en: "The loop reads player input, updates position, redraws the map, and checks victory.",
        },
      },
    ],
    pages: [
      page(
        "Страница 1. Проектирование мини-игры",
        "Page 1. Mini-Game Design",
        [
          "Перед написанием кода нужно описать минимальную игровую модель. В бродилке есть карта, герой, препятствия, предметы, цель и правила взаимодействия. Такая модель должна быть достаточно простой для реализации, но достаточно полной, чтобы показать связь данных и алгоритмов.",
          "В консольной версии графика заменяется символами. Например, # обозначает стену, . — пустую клетку, P — игрока, K — ключ, E — выход. Такой интерфейс ограничен, но он удобен для обучения, потому что студент видит структуру данных почти напрямую.",
          "Важно заранее определить условие победы. Например, игрок побеждает, если находится на клетке выхода и уже подобрал ключ. Это условие затем превращается в булево выражение в коде.",
        ],
        [
          "Before writing code, we need a minimal game model. An adventure game has a map, hero, obstacles, items, goal, and interaction rules. The model should be simple enough to implement but complete enough to show the link between data and algorithms.",
          "In a console version, graphics are replaced by characters. For example, # is a wall, . is an empty cell, P is the player, K is a key, and E is the exit. This interface is limited but useful for learning because students see data structure almost directly.",
          "The victory condition must be defined in advance. For example, the player wins when standing on the exit cell and already having the key. This condition becomes a boolean expression in code.",
        ],
        [
          "Мини-игра начинается с формальной модели.",
          "Символьная карта делает данные видимыми.",
          "Условие победы нужно определить до реализации.",
        ],
        [
          "A mini-game starts with a formal model.",
          "A character map makes data visible.",
          "The win condition should be defined before implementation.",
        ],
      ),
      page(
        "Страница 2. Структуры данных и функции",
        "Page 2. Data Structures and Functions",
        [
          "Карта может храниться в двумерном массиве char[,]. Координаты героя удобно хранить в двух переменных x и y. Наличие ключа — в логической переменной hasKey. Такой набор данных уже описывает большую часть состояния игры.",
          "Чтобы код не стал длинным и трудным для чтения, его стоит разделить на функции: DrawMap выводит карту, CanMove проверяет допустимость движения, MovePlayer обновляет координаты, CheckWin проверяет победу. Разделение функций помогает тестировать и расширять проект.",
          "При работе с массивами необходимо проверять границы. Если координата меньше нуля или больше размера карты, обращение к массиву приведет к ошибке. Поэтому проверка допустимости хода должна выполняться до чтения клетки.",
        ],
        [
          "The map can be stored in a char[,] two-dimensional array. Hero coordinates can be stored in x and y variables. Key possession fits a boolean variable hasKey. This data set already describes most of the game state.",
          "To keep code readable, it should be split into functions: DrawMap prints the map, CanMove checks movement validity, MovePlayer updates coordinates, and CheckWin checks victory. Functions help test and extend the project.",
          "Array boundaries must be checked. If a coordinate is below zero or greater than the map size, array access will cause an error. Therefore movement validity must be checked before reading the cell.",
        ],
        [
          "Двумерный массив подходит для карты.",
          "Функции делают код понятнее и расширяемее.",
          "Проверка границ защищает программу от ошибок выполнения.",
        ],
        [
          "A 2D array is suitable for a map.",
          "Functions make code clearer and easier to extend.",
          "Boundary checks protect the program from runtime errors.",
        ],
      ),
      page(
        "Страница 3. Игровой цикл и развитие проекта",
        "Page 3. Game Loop and Project Growth",
        [
          "Игровой цикл повторяет одни и те же этапы: вывести карту, прочитать команду, обработать действие, обновить состояние, проверить победу. В консольной игре цикл может работать до тех пор, пока переменная isGameOver равна false.",
          "Команды WASD можно преобразовать в изменения координат: W уменьшает y, S увеличивает y, A уменьшает x, D увеличивает x. Затем программа проверяет, можно ли перейти в новую клетку, и только после этого изменяет позицию героя.",
          "После базовой версии проект легко расширить: добавить врагов, очки, таймер, несколько ключей, разные типы клеток, сохранение прогресса или генерацию карты. Главное — сохранять архитектуру, где данные, логика и вывод не смешиваются хаотично.",
        ],
        [
          "The game loop repeats the same stages: draw the map, read a command, process action, update state, and check victory. In a console game, the loop can run while isGameOver is false.",
          "WASD commands can be converted into coordinate changes: W decreases y, S increases y, A decreases x, and D increases x. Then the program checks whether the new cell is valid before changing hero position.",
          "After the basic version, the project can grow: enemies, score, timer, several keys, different cell types, saving progress, or map generation. The key is to keep an architecture where data, logic, and output are not mixed chaotically.",
        ],
        [
          "Игровой цикл связывает ввод, обновление и вывод.",
          "Команды движения преобразуются в изменения координат.",
          "Проект можно расширять, если архитектура разделяет ответственность.",
        ],
        [
          "The game loop connects input, update, and output.",
          "Movement commands convert into coordinate changes.",
          "The project can grow if architecture separates responsibilities.",
        ],
      ),
    ],
    outcomes: {
      ru: [
        "Проектирует консольную мини-игру на C#",
        "Использует массивы, координаты, функции и игровой цикл",
        "Понимает, как расширять учебный прототип без хаоса в коде",
      ],
      en: [
        "Design a C# console mini-game",
        "Use arrays, coordinates, functions, and a game loop",
        "Understand how to extend a learning prototype without chaotic code",
      ],
    },
  },
];

export const lectures: Lecture[] = baseLectures.map(withExtendedLectureText);
