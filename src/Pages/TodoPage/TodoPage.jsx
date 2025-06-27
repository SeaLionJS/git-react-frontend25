import React from 'react'

export default function TodoPage() {
    return (
       <>
    <h1>BookMood</h1>
    <h2>Книги під настрій</h2>
        <label for="mood" class="mood">Ваш настрій:</label>
        <select id="mood">
        <option value="relax" class="relax">Хочу розслабитися</option>
        <option value="sad" class="sad">Сумно</option>
        <option value="adventure" class="adventure">Хочу пригод</option>
        <option value="love" class="love">Хочу любовну історію</option>
      </select>

</>
    )
}
