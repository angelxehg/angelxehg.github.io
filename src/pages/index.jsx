import React from "react"
import Container from "react-bootstrap/Container"

import SEO from "@components/seo"
import { useSiteMetadata } from "@hooks/use-site-metadata"

const IndexPage = () => {
  const site = useSiteMetadata()
  return (
    <div>
      <SEO title="Inicio" lang="es" />
      <Container fluid="md" className="pt-3 pb-3">
        <header>
          <h1>{site.title}</h1>
          <p>{site.description}</p>
        </header>
        <section>
          <h2>Acerca de</h2>
          <p>
            Minus commodi dolorum voluptates. Quo necessitatibus blanditiis mollitia et non rem est ducimus. Et eveniet maiores ea illo magni incidunt facilis. Dolor rerum cumque omnis vel delectus ut.
          </p>
          <p>
            Architecto nobis est similique amet non perspiciatis. Quisquam illo expedita omnis quidem. Nihil veniam harum esse. Quia natus atque maiores. Quidem id quis aspernatur ad quod soluta.
          </p>
          <p>
            Qui non saepe quia exercitationem ab rerum est minima. Quia omnis ad atque voluptas omnis temporibus. Dignissimos sed perferendis porro cum vitae. Alias at in fugiat repellendus molestiae fuga quasi.
          </p>
        </section>
        <section>
          <h2>Educación</h2>
          <p>
            Et dolorem culpa nisi sunt dolorem voluptates maiores. Ut omnis id deleniti. Odit molestiae at facilis aliquid explicabo inventore. Nesciunt ex necessitatibus tempore minima earum hic recusandae minima. Velit quod voluptatem facilis et at maxime. Atque sapiente ad facilis fugiat reprehenderit harum magnam.
          </p>
          <p>
            Quibusdam facilis dicta modi ut tempora amet nulla. Quaerat est accusantium nesciunt aut aut assumenda. Consequatur itaque reprehenderit nisi nemo.
          </p>
        </section>
        <section>
          <h2>Habilidades</h2>
          <p>
            Tenetur accusamus facere corporis. Explicabo corrupti illum minus id sequi at neque qui. Magnam ut molestias sequi quidem.
          </p>
          <p>
            Rerum magnam odit adipisci quia magni praesentium ratione nam. Velit dolorem culpa maxime libero velit ex voluptatibus ipsum. Natus ducimus blanditiis ut at quod voluptate. Quis numquam repellat reiciendis voluptas explicabo. Nisi excepturi rerum asperiores voluptates exercitationem pariatur.
          </p>
        </section>
        <section>
          <h2>Proyectos</h2>
          <p>
            Perspiciatis laudantium qui non unde rem aut aliquam. Ducimus eveniet atque provident magni. Rerum omnis voluptate alias dolorem dignissimos sit sunt. Illo totam ullam consectetur voluptatum quia qui reprehenderit.
          </p>
          <p>
            Qui quo ad odio. Perferendis sunt dolore ut repellendus hic. Aspernatur consequatur voluptatibus eos. Placeat sed ea occaecati. Perspiciatis nulla animi dolorem ab beatae facilis qui.
          </p>
          <p>
            Culpa hic commodi nihil voluptas aut facere neque. Numquam modi sint illum. Vero adipisci enim id numquam provident. Sed quasi odio illum dolores optio quo. Esse ratione rem eos consequuntur eos dolorem voluptatem corrupti.
          </p>
        </section>
      </Container>
    </div>
  )
}

export default IndexPage
