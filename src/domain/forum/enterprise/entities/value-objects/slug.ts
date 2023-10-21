// value - objects
// uma forma da gente abstrair uma regra de negocio especifica de um unico campo
// da nossa entidade, em uma classe separada

export class Slug {
    public value: string
  
   private constructor(value: string) {
      this.value = value
    }

    static create(slug: string){
      return new Slug(slug)
    }
  
    /**
     * Receives a string and normalize it as a slug.
     *
     * Example: "An example title" => "an-example-title"
     *
     * @param text {string}
     * 
     * Um método estático é um método que pertence à classe em vez de a uma instância da classe
     * (não precisa instânciar a classe)
     */
    
    static createFromText(text: string): Slug {
      const slugText = text
        .normalize('NFKD')
        .toLowerCase()
        .trim()
        .replace(/\s+/g, '-')
        .replace(/[^\w-]+/g, '')
        .replace(/_/g, '-')
        .replace(/--+/g, '-')
        .replace(/-$/g, '')
  
      return new Slug(slugText)
    }
  }