# 🧩 Exercism: JavaScript Track

### 🛠️ The Philosophy

Solving every exercise in this track to build a flawless foundation in software logic. No task is too small; mastery is in the details.

### 📊 Progress Tracker

| Exercise                  | Core Concept(s) Learnt                                      | Status  |
| ------------------------- | ----------------------------------------------------------- | ------- |
| `lucian-lasagna`          | Function signatures, constants, & basic math                | ✅ Done |
| `annalyns-infiltration`   | Boolean logic & operator precedence (`&&`, logical OR, `!`) | ✅ Done |
| `freelancer-rates`        | String manipulation & index-based access                    | ✅ Done |
| `poetry-club-door-policy` | String manipulation & index-based access                    | ✅ Done |
| `elyses-enchantment`      | Array manipulation                                          | ✅ Done |
| `vehicle-purchase`        | Comparisons and Conditionals                                | ✅ Done |
| `mixed-juices`        | Conditionals and Loop (switch, while)                                | ✅ Done |

---

### 📓 Concept Log

## Annalyn's Infiltration

## Lucian's Lasagna

- I did this task on the site

## Frelancer Rates

- In this exercise, I had an issue with getting the discount as I mistook discount as `amount*discount`, instead of `amount - amount*discount percentage`

## Poetry Club Door Policy

- In this exercise, I had issue with the `backDoorResponse`, the task was to get the last letter of every line neglecting the whitespaces. But I changed the string methods and accessed the last character by doint `.chartAt(line.length-1)`, which is the last character of the original line with whitespaces and not when trimmed. So the solution after battling was to store the trimmed line in a seperate variable and used `.charAt(trimmedLine.length-1)` or `.at(-1)`

## Elyse's Enchantments

- In this exercise, I didn't pay attention to the return valuses of the `splice`, `pop`, `push` etc methods, until i tested the code and found out that the methods returns the value and not the array

---

### 💻 Environment

- **OS:** Fedora Linux
- **Workflow:** Test-Driven Development (TDD) via `bun test`
- **Goal:** 2-3 Exercises / Week

---

_Follow the journey on [X (Twitter)](https://x.com/idighekere)_
