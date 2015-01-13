//nao sei javascript, é tudo java!
function Curso(_id, _nome) {
  "use strict"

  var id = _id;
  var nome = _nome;
  

  this.getId = function() {
    return id;
  }

  this.getNome = function() {
    return nome;
  }

  this.getInfo = function() {
    return "20hs, 6 Seções, 34 Exercicios"; //TODO: deve ser dinamico 
  }

  this.toString = function() {
        return "Id: " + this.getId() + ", " 
                + this.getNome();  
    }
}

function Relacao(_primeiroCurso, _segundoCurso, _options) {
    "use strict"

    var primeiroCurso = _primeiroCurso;
    var segundoCurso  = _segundoCurso;

    var options = _options || {};
    var nome = options.nome || "";
    var length = options.length || 100;
    var style = options.style || 'arrow';//line, dash-line


    this.getTarget = function() {
        return primeiroCurso;
    }

    this.getSource = function() {
        return segundoCurso;
    }

    this.getNome = function() {
        return nome;
    }  

    this.getStyle = function() {
        return style;
    }

    this.toString = function() {
        return this.getSource().getNome() + " " 
                + this.getNome() + " " 
                  + this.getTarget().getNome(); 
    }
}

function RelacaoCursoTrilha(_primeiroCurso, _segundoCurso) {
    "use strict"

    var primeiroCurso = _primeiroCurso;
    var segundoCurso  = _segundoCurso;
    var relacao = new Relacao(primeiroCurso, segundoCurso);

    //delegando, nao sei fazer melhor
    this.getTarget = function() {
        return relacao.getTarget();
    }

    this.getSource = function() {
        return relacao.getSource();
    }

    this.getNome = function() {
        return relacao.getNome();
    }

    this.getStyle = function() {
        return 'dash-line';
    }

    this.toString = function() {
        return relacao.toString();
    }
}

function Trilha(_nome, _options){
  "use strict"

  var nome = _nome;
  var options = _options || {};
  var cor = options.cor || "#ddd";
  var group = options.group || "main";

  var relacoes = [];
  var cursos = [];

  this.adicionaRelacoes = function(_relacoes) {
    relacoes = relacoes.concat(_relacoes);
  }

  //treinamenta isolado, sem relacao
  this.adicionaCursos = function(_cursos) {
     cursos = cursos.concat(_cursos);
  }

  this.getCursos = function() {
    return cursos;
  }

  this.getRelacoes = function() {
    return relacoes;
  }

  this.getNome = function() {
        return nome;
  }
  
  this.getCor = function() {
        return cor;
  }

  this.getGroup = function() {
        return group;
  }

}

function ModeloGrafico() {
    "use strict"

    var dictCursos = {};
    var defaultSize = 10;
    var defaultColor = '#000';
    var defaultEdgeColor = '#000';
    var defaultXValue = Math.random();
    var defaultXOffset = 40;
    
    var defaultOffset = 10;
    var niveis = {}; 

    var graph = {
        nodes: [],
        edges: []
    };

    this.adicionaTrilhas = function(trilhas) {
      
      var idRelacao = 1;

      //console.log(trilhas);
      
      for (var j = 0; j < trilhas.length; j++) {

        var trilhaAtual = trilhas[j];
        var relacoes = trilhaAtual.getRelacoes();
        //console.log("relacoes" + relacoes);
      
        for (var i = 0; i < relacoes.length; i++) {

          var relacao = relacoes[i];
          //console.log("relacoes[i]" + relacoes[1]);


          var cursoSource = relacao.getSource();
          var cursoTarget = relacao.getTarget();

          //console.log("Trilha: " + trilhaAtual.getNome() + "j,i " + j +","+i);

          this.geraNoSeNaoExistir(cursoSource, trilhaAtual);
          this.geraNoSeNaoExistir(cursoTarget, trilhaAtual);

          this.adicionaEdge(idRelacao++, relacao)

          //console.log(relacao.toString());
          //console.log(dictCursos);
        }

        //caso exista algum curso isolado, sem relacao
        var cursos = trilhaAtual.getCursos();
        //console.log(cursos);
        for (var i = 0; i < cursos.length; i++) {
             this.geraNoSeNaoExistir(cursos[i], trilhaAtual);
        };


      }
    }

    this.geraNoSeNaoExistir = function(curso, trilha) {
        var id = curso.getId();
        if(dictCursos[id] == null) {
          //console.log(id);

          dictCursos[id] = curso;
          this.adicionaNo(curso, trilha);
        }
    }

    this.buscaCursoPelaId = function(id) {
        return dictCursos[id];
    }

    this.adicionaNo = function(curso, trilha) { 
      //console.log("Gerando no - " + curso.toString())
      //console.log("pushNo: " + trilha);

      if(curso.getId() == 1) {
         graph.nodes.push({
          id:     curso.getId(),
          label:  curso.getNome(),
          title:  curso.getNome() + ", " + trilha.getNome(),
          shape:  'image',
          image: 'img/start.png'
        });
      } else {
        graph.nodes.push({
            id:     curso.getId(),
            label:  curso.getNome(),
            title:  curso.getNome() + ", " + trilha.getNome(),
            group:  trilha.getGroup(),
        });
      }
    }

    this.adicionaEdge = function(id, relacao) {
      //console.log("Gerando edge - " + id + ", " + source.toString() + ", " + target.toString());

      graph.edges.push({
          from:   relacao.getSource().getId(),
          to:     relacao.getTarget().getId(),
          label:  relacao.getNome(),
          style:  relacao.getStyle(),
          color:  'gray'
      });
    }

    this.getData = function() {
        return graph;
    }
    
    this.getNodes = function() {
        return graph.nodes;
    }

    this.getEdges = function() {
        return graph.edges;
    }

}
