//Big Ball of Mud
function GeradorTrilhas() {

  var id = 1;

  var cursoLogica   = new Curso(id++, "Lógica de Programação" );
  var cursoPraticandoLogica   = new Curso(id++, "Praticando Lógica \nde Programação");
  var cursoBancoSql = new Curso(id++, "Banco De Dados \nE SQL"); 
  var cursoBancoSqlComplexo = new Curso(id++, "Banco De Dados \nE SQL Complexas"); 
  var cursoPrimeirosPassosHtmlCss = new Curso(id++, "Primeiros passos com \nHTML e CSS");

  this.geraTrilhaPrimeirosPassos = function() {
      var trilhaPrimeirosPassos = new Trilha("Trilha Primeiros Passos", {group: "primerios_passos"});
      trilhaPrimeirosPassos.adicionaRelacoes([ 
            new Relacao(cursoPraticandoLogica, cursoLogica),
            new Relacao(cursoPrimeirosPassosHtmlCss, cursoPraticandoLogica),
            new Relacao(cursoBancoSqlComplexo, cursoBancoSql),
            new Relacao(cursoBancoSql, cursoPraticandoLogica)
      ]);
      return trilhaPrimeirosPassos;
  }

  var cursoJavaBibliotecas   = new Curso(id++, "Java E Suas \nBibliotecas");
  var cursoJavaBancoDeDados   = new Curso(id++, "JDBC E Banco De \nDados Em Java");
  var cursoJavaDesignPattern   = new Curso(id++, "Design Patterns Para \nBons Programadores");

  this.geraTrilhaJava = function() {
      //------------ Java
      var javaPP      = new Curso(id++, "Primeiros Passos \ncom Java");
      var javaOO      = new Curso(id++, "Java E Orientação \nA Objetos");
      var javaEclipse = new Curso(id++, "Eclipse: \nProdutividade Extrema");
      var java8       = new Curso(id++, "Java 8");

      var trilhaJava = new Trilha("Trilha Java", {group: 'java'});
      trilhaJava.adicionaRelacoes([
            new RelacaoCursoTrilha(javaPP, cursoPraticandoLogica),
            new Relacao(javaOO, javaPP),
            new Relacao(cursoJavaBibliotecas, javaOO),
            new RelacaoCursoTrilha(cursoJavaBancoDeDados, cursoBancoSql),
            new Relacao(cursoJavaBancoDeDados, cursoJavaBibliotecas),
            new Relacao(cursoJavaDesignPattern, cursoJavaBibliotecas),
            new Relacao(javaEclipse, cursoJavaBibliotecas),
            new Relacao(java8, cursoJavaBibliotecas)
      ]);
      return trilhaJava;
  }

  var cursoServlet   = new Curso(id++, "Servlet 3 E \nFundamentos Web");
  var cursoJpa   = new Curso(id++, "JPA 2: Persistência De Dados \nCom JPA E Hibernate");
  var cursoJsf   = new Curso(id++, "JSF 2: Simplicidade E \nProdutividade Na Web");
  var vraptor3   = new Curso(id++, "VRaptor 3: Web Rápida \nE Fácil Com Java");
  var jstl      = new Curso(id++, "JSTL: Qualidade \nNas JSPs");
  var vraptor4  = new Curso(id++, "VRaptor 4");
  var springMVC = new Curso(id++, "Desenvolvendo Aplicações \nWeb Com Spring MVC 4");

  this.geraTrilhaJavaWeb = function() {
      var trilhaJavaWeb = new Trilha("Trilha Java para Web", {group: 'java_web'});
      trilhaJavaWeb.adicionaRelacoes([
          new RelacaoCursoTrilha(cursoServlet, cursoJavaBibliotecas),
          new RelacaoCursoTrilha(cursoServlet, cursoPrimeirosPassosHtmlCss),
          new RelacaoCursoTrilha(vraptor3, cursoServlet),
          new Relacao(jstl, cursoServlet),
          new Relacao(vraptor4, vraptor3),
          new RelacaoCursoTrilha(cursoJpa, cursoJavaBancoDeDados),
          new Relacao(cursoJsf, cursoServlet),
          new Relacao(springMVC, cursoServlet),

      ]);
      return trilhaJavaWeb;
  }

    var cursoOOAprimorando = new Curso(id++, "Aprimorando A Orientação \nA Objetos Com Java");
    var dp2           = new Curso(id++, "Design Patterns Para \nBons Programadores 2");
    var jasper        = new Curso(id++, "Relatórios Em Java Com \nJasperReports E IReport");
    var xstream       = new Curso(id++, "XStream: \nTrabalhando Com XML");
    var ant           = new Curso(id++, "ANT: Builds De \nSoftware Automatizados");
    var ivy           = new Curso(id++, "Ivy: Gerenciamento \nDas Dependências Flexível");
    var maven         = new Curso(id++, "Maven: Gerenciando \nDependências");
    var rest          = new Curso(id++, "Web Services REST \nCom JAX-RS E Jersey");
    var solid         = new Curso(id++, "OO Avançada \nE SOLID");
    var ejb           = new Curso(id++, "EJB 3");
    var projetoJavaEE  = new Curso(id++, "Projeto Amigo Secreto \nCom Java EE E JBoss Wildfly");

  this.geraTrilhaJavaAvancado = function() {

      var trilhaJavaAvancado = new Trilha("Trilha Java Avancado", {group: "java_avancado"});
      trilhaJavaAvancado.adicionaRelacoes([
          new RelacaoCursoTrilha(cursoOOAprimorando, cursoJavaDesignPattern),
          new Relacao(dp2, cursoOOAprimorando),
          new RelacaoCursoTrilha(jasper, cursoServlet),
          new RelacaoCursoTrilha(xstream, cursoJavaBibliotecas),
          new RelacaoCursoTrilha(ant, cursoServlet),
          new Relacao(ivy, ant),
          new Relacao(maven, ivy),
          new RelacaoCursoTrilha(rest, cursoServlet),
          new Relacao(rest, xstream),
          new Relacao(solid, dp2),
          new RelacaoCursoTrilha(ejb, cursoJpa),
          new Relacao(projetoJavaEE, ejb),
          new RelacaoCursoTrilha(projetoJavaEE, cursoJsf)
      ]);
      return trilhaJavaAvancado;
  }

  var cert1 = new Curso(id++, "Java SE 7 Programmer I - \nO Básico De Java");
  var cert2 = new Curso(id++, "Java SE 7 Programmer I - \nTrabalhando Com Tipos De Dados Em Java");
  var cert3 = new Curso(id++, "Java SE 7 Programmer I - \nOperadores E Construções De Decisão");
  var cert4 = new Curso(id++, "Java SE 7 Programmer I - \nCriando E Usando Arrays");
  var cert5 = new Curso(id++, "Java SE 7 Programmer I - \nUsando Laços");
  var cert6 = new Curso(id++, "Java SE 7 Programmer I - \nMétodos E Encapsulamento");
  var cert7 = new Curso(id++, "Java SE 7 Programmer I - \nTrabalhando Com Herança");
  var cert8 = new Curso(id++, "Java SE 7 Programmer I - \nLidando Com Exceções");

 this.geraTrilhaJavaCertificacao = function() {

      var trilhaJavaCertificacao = new Trilha("Trilha Certificação Java", {group: "java_certificao"});
      trilhaJavaCertificacao.adicionaRelacoes([
          new RelacaoCursoTrilha(cert1, cursoJavaBibliotecas),
          new Relacao(cert2, cert1),
          new Relacao(cert3, cert2),
          new Relacao(cert4, cert3),
          new Relacao(cert5, cert4),
          new Relacao(cert6, cert5),
          new Relacao(cert7, cert6),
          new Relacao(cert8, cert7)
      ]);
      return trilhaJavaCertificacao;
  }

  var cursoJavaScript = new Curso(id++, "Javascript");
  var cursoAvancandoNoHtmlCss = new Curso(id++, "Avançando No \nHTML E CSS");
  var introHtml   = new Curso(id++, "Introdução A \nHTML E CSS");    
  var jquery      = new Curso(id++, "Introdução \nAo JQuery");
  var jquery2     = new Curso(id++, "JQuery Parte 2: Manipulação \nDinâmica De Conteúdo");
  var responsivo  = new Curso(id++, "Web Design \nResponsivo");
  var chart       = new Curso(id++, "Gráficos Com \nGoogle Chart Tools");
  var angular     = new Curso(id++, "AngularJS");
  var grunt       = new Curso(id++, "Automação De \nTarefas Com Grunt");
  var less        = new Curso(id++, "Introdução \nAo LESS");
  var mean        = new Curso(id++, "Introdução \nMEAN Stack");

  this.geraTrilhaFrontEnd = function() {

      var trilhaFront = new Trilha("Trilha HTML e Front End", {group: "front_end"});
      trilhaFront.adicionaRelacoes([
          new RelacaoCursoTrilha(introHtml, cursoPrimeirosPassosHtmlCss),
          new Relacao(cursoJavaScript, introHtml),
          new Relacao(cursoAvancandoNoHtmlCss, cursoJavaScript),
          new Relacao(jquery, cursoJavaScript),
          new Relacao(jquery2, jquery),
          new Relacao(responsivo, cursoAvancandoNoHtmlCss),
          new Relacao(chart, cursoJavaScript),
          new Relacao(angular, cursoJavaScript),
          new Relacao(grunt, cursoJavaScript),
          new Relacao(less, cursoAvancandoNoHtmlCss),
          new Relacao(mean, angular)
      ]);
      return trilhaFront;
  }

  //testes
  var tdd       = new Curso(id++, "Testes De Unidade \nE TDD");
  var mocks     = new Curso(id++, "Testando Comportamento \nAtravés De Mocks");
  var testDao   = new Curso(id++, "Testando SQLs E DAOs");
  var selenium  = new Curso(id++, "Testando Sua Aplicação Web \nDe Ponta A Ponta Com Selenium");
  var testRest  = new Curso(id++, "Testando WebServices \nCom Rest Assured");
  var jasmine   = new Curso(id++, "Testes Em Javascript \nCom Jasmine");

  this.geraTrilhaTestesSoftware = function() {
      var trilhaTestes = new Trilha("Trilha Testes de Software", {group: "testes"});
      trilhaTestes.adicionaRelacoes([
            new RelacaoCursoTrilha(tdd, cursoOOAprimorando),
            new Relacao(mocks, tdd),
            new Relacao(testDao, mocks),
            new RelacaoCursoTrilha(testDao, cursoJavaBancoDeDados),
            new Relacao(selenium, mocks),
            new RelacaoCursoTrilha(selenium, cursoAvancandoNoHtmlCss),
            new RelacaoCursoTrilha(jasmine, cursoJavaScript)
      ]);
      return trilhaTestes;
  }

  //infra
  var git     = new Curso(id++, "Git: Trabalho Em Equipe \nCom Controle E Segurança");
  var ec2     = new Curso(id++, "Introdução Ao Cloud Do \nEC2 No Amazon Web Services");
  var linux1  = new Curso(id++, "Linux Com Ubuntu: \nPrimeiros Passos");
  var linux2  = new Curso(id++, "Linux Com Ubuntu: \nProcessos E Programas");
  var vagrant = new Curso(id++, "Devops: Provisionamento \nCom Vagrant E Puppet");
  var jenkins = new Curso(id++, "Jenkins: Automação De Deploy \nE Integração Contínua");

  this.geraTrilhaInfra = function() {

      var trilhaInfra = new Trilha("Trilha Infraestrutura", {group: "infra"});
      trilhaInfra.adicionaRelacoes([
            new Relacao(linux2, linux1),
            new Relacao(vagrant, linux2),  
            new RelacaoCursoTrilha(vagrant, cursoServlet),
            new RelacaoCursoTrilha(vagrant, cursoBancoSql),
            new Relacao(vagrant, ec2),
            new Relacao(jenkins, git),       
            new RelacaoCursoTrilha(jenkins, maven),
            new RelacaoCursoTrilha(jenkins, selenium)     
      ]);
      return trilhaInfra;
  }

 //------ trilha C#
  var csharpFund   = new Curso(id++, "C# E Seus Fundamentos");
  var csharpOO     = new Curso(id++, "C# E Orientação A Objetos");
  var csharpAvanc  = new Curso(id++, "C# E Tópicos Avançados");
  var aspMvc       = new Curso(id++, "ASP.NET MVC 5");
  var razor        = new Curso(id++, "Razor No Asp.Net MVC");
  var nhibernate   = new Curso(id++, "Persistência De Dados \nCom NHibernate");
  var entityFr     = new Curso(id++, "Entity Framework");
  var csharpDP     = new Curso(id++, "Design Patterns Para \nBons Programadores Em C#");
  var csharpDP2    = new Curso(id++, "Design Patterns .NET 2");
  var csharpProjeto = new Curso(id++, "Controle Financeiro Com Asp.Net \nMVC 5 E Entity Framework 6");

  this.geraTrilhaCSharp = function() {
     var trilhaCSharp = new Trilha(" Trilha C# e .NET", {group: "csharp"});
      trilhaCSharp.adicionaRelacoes([
            new RelacaoCursoTrilha(csharpFund, cursoPrimeirosPassosHtmlCss),
            new Relacao(csharpOO, csharpFund),  
            new Relacao(csharpAvanc, csharpOO),
            new RelacaoCursoTrilha(entityFr, cursoBancoSql),
            new Relacao(entityFr, csharpAvanc),
            new RelacaoCursoTrilha(nhibernate, cursoBancoSql),
            new Relacao(nhibernate, csharpAvanc),
            new Relacao(aspMvc, csharpAvanc),       
            new Relacao(razor, aspMvc),
            new Relacao(csharpDP, csharpAvanc),  
            new Relacao(csharpDP2, csharpDP),
            new Relacao(csharpProjeto, entityFr),
            new Relacao(csharpProjeto, aspMvc) 
      ]);
      return trilhaCSharp;
  }

//------ trilha Android
      var android1   = new Curso(id++, "Android: Aplicações E \nArmazenamento De Dados - Parte 1");
      var android2   = new Curso(id++, "Android : Interface, Aparência \nE Recursos Do Device - Parte 2");
      var android3   = new Curso(id++, "Android : Integração Com O \nServidor E Mapas - Parte 3");
      var android4   = new Curso(id++, "Jogos Em Android");


  this.geraTrilhaAndroid = function() {
          var trilhaAndroid = new Trilha(" Trilha Android", {group: "android"});
      trilhaAndroid.adicionaRelacoes([
              new RelacaoCursoTrilha(android1, cursoJavaBibliotecas), 
              new Relacao(android2, android1),
              new Relacao(android3, android2),
              new Relacao(android4, android3)
      ]);
      return trilhaAndroid;
  }

    //------ trilha iOS
    var swift1   = new Curso(id++, "Swift Para IOS");
    var swift2   = new Curso(id++, "Swift Para IOS 2");
    var swift3   = new Curso(id++, "Swift Para IOS 3");

  this.geraTrilhaIos = function() {
     var trilhaIos = new Trilha("Trilha iOS", {group: "ios"})
      trilhaIos.adicionaRelacoes([
              new RelacaoCursoTrilha(swift1, cursoPraticandoLogica),  
              new Relacao(swift2, swift1),
              new Relacao(swift3, swift2)
      ]);
      return trilhaIos;
  }
  

  //------ trilha agil
      var agilIntro   = new Curso(id++, "Introdução Aos \nMétodos Ágeis");
      var scrum   = new Curso(id++, "Agilidade Com Scrum");
      var uml   = new Curso(id++, "Introdução A UML");
 
  this.geraTrilhaAgil = function() {
     var trilhaAgil = new Trilha("Trilha Agilidade", {group: "agil"});
      
      trilhaAgil.adicionaCursos([agilIntro, uml]);//eles tem algum relacionamento?
      trilhaAgil.adicionaRelacoes([
              new Relacao(scrum, agilIntro)
      ]);

    return trilhaAgil;
  }

//------ trilha ruby
  var rails1   = new Curso(id++, "Ruby On Rails 3 - Do Zero Ao Deploy");
  var rails2   = new Curso(id++, "Ruby On Rails 3 - Avançando A Aplicação");
  var rails3   = new Curso(id++, "Ruby On Rails 3: Slugs, APIs Web E Segurança");
  var rubyOO   = new Curso(id++, "Aprimorando A Orientação A Objetos Com Ruby");
  
  this.geraTrilhaRails = function() {
    var trilhaRails = new Trilha("Trilha Ruby e Rails", {group: "ruby"});
    trilhaRails.adicionaRelacoes([
            new RelacaoCursoTrilha(rails1, cursoPrimeirosPassosHtmlCss), 
            new Relacao(rails2, rails1),
            new Relacao(rails3, rails2),
            new Relacao(rubyOO, rails1)
    ]);
    return trilhaRails;
  }
  
  //------ trilha php
  var php1   = new Curso(id++, "PHP, Mysql E \nFundamentos Da Web");
  var php2   = new Curso(id++, "PHP, Mysql E \nFundamentos Da Web 2");
  var codeIgniter   = new Curso(id++, "Code Igniter");
  var codeIgniter2  = new Curso(id++, "Code Igniter - Avançado");

  this.geraTrilhaPhp = function() {
     var trilhaPhp = new Trilha("Trilha PHP", {group: "php"});
      trilhaPhp.adicionaRelacoes([
              new RelacaoCursoTrilha(php1, cursoPrimeirosPassosHtmlCss), 
              new Relacao(php2, php1),
              new Relacao(codeIgniter, php2),
              new Relacao(codeIgniter2, codeIgniter)
      ]);
      return trilhaPhp;
  }

  this.getTrilhasParaDesenvolvedorJavaWeb = function() {
      
      //ordem importa para agrupamento
      return [
        this.geraTrilhaPrimeirosPassos(),
        this.geraTrilhaJava(),
        this.geraTrilhaJavaWeb(),
        this.geraTrilhaFrontEnd()
      ]
  } 

  this.getTrilhasParaDesenvolvedorJavaNinja = function() {
      
      //ordem importa para agrupamento
      return [
        this.geraTrilhaPrimeirosPassos(),
        this.geraTrilhaJava(),
        this.geraTrilhaJavaWeb(),
        this.geraTrilhaJavaAvancado(),
        this.geraTrilhaFrontEnd(),
        this.geraTrilhaTestesSoftware(),
        this.geraTrilhaAgil()
      ]
  } 

    this.getTrilhasParaJavaCertificacao = function() {
      
      //ordem importa para agrupamento
      return [
        this.geraTrilhaPrimeirosPassos(),
        this.geraTrilhaJava(),
        this.geraTrilhaJavaCertificacao()
      ]
  } 

  this.getTrilhasParaDesenvolvedorFrontEnd = function() {
      
      //ordem importa para agrupamento
      return [
        this.geraTrilhaPrimeirosPassos(),
        this.geraTrilhaFrontEnd()      ]
  } 

  this.getTrilhasParaDesenvolvedorPhp = function() {
      
      //ordem importa para agrupamento
      return [
        this.geraTrilhaPrimeirosPassos(),
        this.geraTrilhaFrontEnd(),
        this.geraTrilhaPhp()
        ]
  }

  this.getTrilhasParaDesenvolvedorRails = function() {
      
      //ordem importa para agrupamento
      return [
        this.geraTrilhaPrimeirosPassos(),
        this.geraTrilhaFrontEnd(),
        this.geraTrilhaRails()
        ]
  }

    this.getTrilhasParaDesenvolvedorDotNet = function() {
      
      //ordem importa para agrupamento
      return [
        this.geraTrilhaPrimeirosPassos(),
        this.geraTrilhaFrontEnd(),
        this.geraTrilhaCSharp()
        ]
  }

  this.getTrilhasParaDesenvolvedorMobile = function() {
      
      //ordem importa para agrupamento
      return [
        this.geraTrilhaPrimeirosPassos(),
        this.geraTrilhaJava(),
        this.geraTrilhaAndroid(),
        this.geraTrilhaIos()
        ]
  }

  this.getTodasAsTrilhas = function() {
      
      //ordem importa para agrupamento
      return [
        this.geraTrilhaPrimeirosPassos(),
        this.geraTrilhaJava(),
        this.geraTrilhaJavaWeb(),
        this.geraTrilhaJavaAvancado(),
        this.geraTrilhaJavaCertificacao(),
        this.geraTrilhaFrontEnd(),
        this.geraTrilhaTestesSoftware(),
        this.geraTrilhaInfra(),
        this.geraTrilhaCSharp(),
        this.geraTrilhaAndroid(),
        this.geraTrilhaIos(),
        this.geraTrilhaAgil(),
        this.geraTrilhaRails(),
        this.geraTrilhaPhp()
      ]
  } 

  this.geraTrilhas = function(trilha) {
          
          var trilhas = null;
          if(trilha == 'java') {
              trilhas = this.getTrilhasParaDesenvolvedorJavaWeb();
          } else if(trilha == 'ninja') {
              trilhas = this.getTrilhasParaDesenvolvedorJavaNinja();
          } else if(trilha == 'cert') {
              trilhas = this.getTrilhasParaJavaCertificacao();
          } else if(trilha == 'php') {
              trilhas = this.getTrilhasParaDesenvolvedorPhp();
          } else if(trilha == 'todos') {
              trilhas = this.getTodasAsTrilhas();
          } else if(trilha == 'net') {
              trilhas = this.getTrilhasParaDesenvolvedorDotNet();
          } else if(trilha == 'rails') {
              trilhas = this.getTrilhasParaDesenvolvedorRails();
          } else if(trilha == 'front') {
              trilhas = this.getTrilhasParaDesenvolvedorFrontEnd();
          } else if(trilha == 'mobile') {
              trilhas = this.getTrilhasParaDesenvolvedorMobile();
          } 
        return trilhas
  }

}