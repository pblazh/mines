(ns mines.game
  (:require [clojure.string :as S]))

(defn empty-gamefield [columns rows] (into [] (repeat (* columns rows) nil)))

(defn random-gamefield
  ([columns rows] (random-gamefield columns rows (int (/ (* columns rows) 10))))
  ([columns rows n] (shuffle (concat (repeat n 1)
                        (repeat (- (* columns rows) n) 0)))))
(defonce BOMBS 10)
(defn initial-state [] {:screen :screen-intro
                        :time 0
                        :complete false
                        :won false
                        :columns 10
                        :rows 10
                        :bombs BOMBS
                        :score 0
                        :initial (random-gamefield 10 10 BOMBS)
                        :gamefield (empty-gamefield 10 10)})


(defn position->index [data x y]
  (if (= y 0)
    x
    (+ x (* y (:columns data)))))

(defn index->position [data index]
  (list (rem index (:rows data))
        (int (/ index (:columns data)))))

(defn get-nearest-count [data app-state n]
  (let [[x y] (index->position data n)
        left (> x 0)
        top (> y 0)
        right (< x (dec (:columns data)))
        bottom (< y (dec (:rows data)))]
    (+ (if left (nth app-state (position->index data (dec x) y)) 0)
       (if top (nth app-state (position->index data x (dec y))) 0)
       (if right (nth app-state (position->index data (inc x) y)) 0)
       (if bottom (nth app-state (position->index data x (inc y))) 0)
       (if (and left top) (nth app-state (position->index data (dec x) (dec y))) 0)
       (if (and right top) (nth app-state (position->index data (inc x) (dec y))) 0)
       (if (and right bottom) (nth app-state (position->index data (inc x) (inc y))) 0)
       (if (and left bottom) (nth app-state (position->index data (dec x) (inc y))) 0))))

(defn get-score [gamefield]
  (count (filter number? gamefield)))

(defn alive? [gamefield]
  (count (filter #(= "x" %) gamefield)))

(defn try-complete [app-state]
  (let [ won? (and (every? identity (:gamefield app-state))
                   (= (:bombs app-state) 
                      (count (filter #(= % "?") (:gamefield app-state))))) ]
    (assoc app-state
           :won won?
           :complete (or won? (:complete app-state)))))

(defn try-square [app-state id]
  (let [gamefield (:gamefield app-state)
        initial (:initial app-state)
        value (nth initial id)
        alive? (= 0 value)
        new-value (cond alive? (get-nearest-count app-state initial id)
                        :else "x")
        gamefield (assoc (:gamefield app-state) id new-value)]
    (assoc app-state
           :gamefield gamefield
           :score (get-score gamefield)
           :complete (not alive?))))

(defn mark-square [app-state id]
  (let [gamefield (:gamefield app-state)
        value (nth gamefield id)
        new-value (cond
                    (= "?" value) nil
                    (= nil value) "?"
                    :else value)]
    (assoc app-state :gamefield (assoc gamefield id new-value))))
