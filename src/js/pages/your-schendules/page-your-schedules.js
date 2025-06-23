import { myCreateElement } from "../../components/standard/myCreateElement";
import { createSchedules } from "./components/createSchedules";
import { filterByDate } from "./components/filter-by-date";
import { headerHero } from "./components/header-hero";
/** Componente "pageYourSchedule" cria uma section wrapper, afim de, receber elementos da estrutura da pagina principal.
 * @param {string} id - Identificar único que será utilizando para recarregar a página a cada inserção de novos schedules ou filtro de schedules por data.
 * @param {Array.<string>} [Class_list] - Classes css que irão padronizar a section.
 * @returns {HTMLElement} - Retorna o elemento construido e estilizado.
 */

export async function pageYourSchedules({ id, class_list }) {
  const section = myCreateElement({
    tag: "section",
    classes: class_list,
    attributes: { id: id },
  });

  section.append(headerHero(), await createSchedules(await filterByDate()));

  // Usa requestAnimationFrame para esperar renderização
  requestAnimationFrame(async () => {
    await filterByDate();
  });

  return section;
}
