import { tagHeader } from "../../../components/standard/tagHeader";
import { wrapper } from "../../../components/standard/wrapper";
import { tagParagraph } from "../../../components/standard/tagParagraph";
import { titleHeader } from "../../../components/standard/titleHeader";
import { tagInput } from "../../../components/standard/tagInput";

export function headerHero() {
  const header = tagHeader({
    childrens: [div, inputWrapper],
    class_list: ["header-hero", "flex", "column"],
  });

  return header;
}

const h1 = titleHeader({
  tag: "h1",
  text: "Sua Agenda",
});

const p = tagParagraph({
  text: "Aqui você pode ver todos os clientes e serviços agendados para hoje.",
});

const div = wrapper({
  classes: ["hero", "flex", "column"],
  children: [h1, p],
});

const input = tagInput({
  atributes: { type: "date", id: "data" },
});

const inputWrapper = wrapper({
  children: [input],
  classes: ["input-wrapper"],
});
