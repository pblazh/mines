(ns mines.screens
  (:require [clojure.string :as S]
            [reagent.core :as r]
            [cljs.core.async :refer (put!)]
            [mines.game :refer (position->index index->position get-score)]
            [mines.channels :refer (EVENTCNANNEL)]))

(defn sign [which]
  (cond
    (= which "x") "☠ "
    (= which "?") "🚩"
    :else which))

(defn revealed-sign [which]
  (cond
    (= which 1) "💣"
    (= which "?") "🚩"
    (= which "x") "☠ "
    :else ""))

(defn is-not-bomb? [which]
  (not= which "x"))

(defn is-not-used? [which]
  (and  (not= which "x") (not= which "?")))

(defn game-square-style [props]
  (let [{:keys [x y value complete won size]} props ]
    {:position "absolute"
     :left (* x size)
     :top (* y size)
     :width (- size 4)
     :height (- size 4)
     :border-style "groove"
     :text-align "center"
     :letter-width "8px"
     :line-height (str (- size 6) "px")
     :font-size (str (- size 8) "px")
     :animation-delay (if (and (not won) complete)
                        (if (= value "x") "0s" (str (+ 0.3 (rand 0.3)) "s"))
                        "0")
     :cursor (if (or complete value) "default" "pointer")
     :background-color (if value (if (= value "x") "red" "#4e4e4e") (if complete "#aaaaaa" "#CCCCCC"))}))

(defn game-square [props]
  (fn [props]
      (if (is-not-bomb? (:value props))
        [:div {:class (if (:value props) "box-flipped" "box-normal")
               :style (game-square-style props)
               :on-click #(put! EVENTCNANNEL [:try-square! (:key props)])
               :on-context-menu (fn [ev]
                                  (.preventDefault (.-nativeEvent ev))
                                  (put! EVENTCNANNEL [:mark-square! (:key props)]))}
         (sign (:value props))]
        [:div {:class "box-flipped" :style (game-square-style props)} (revealed-sign (:initial props))])))

(defn revealed-square [props]
      [:div 
       {:class (if (= (:value props) "x") "box-caboom" "box-normal") :style (game-square-style props)}
       (if (is-not-used? (:value props))
        (revealed-sign (:initial props))     
        (sign (:value props)))])

(defn game-field [data]
  (let [SQUARE-SIZE 40
        columns (range (:columns data))
        rows (range (:rows data))]
    (fn [data]
      [:section
       [:div {
              :class (cond 
                       (and (:won data) (:complete data)) "box-won"
                       (and (not (:won data)) (:complete data)) "box-exploded"
                       :else "box-normal")
              :style {:position "relative"
                      :perspective-origin "200px 200px"
                      :perspective "300px"
                      :width (* (:columns data) SQUARE-SIZE)
                      :height (* (:rows data) SQUARE-SIZE)}}
        (for [y rows]
          (for [x columns]
            (let [
                  key (position->index data x y)
                  props {:key key
                         :complete (:complete data)
                         :size SQUARE-SIZE
                         :value (nth (:gamefield data) key)
                         :initial (nth (:initial data) key)
                         :x x
                         :y y }]
              (if (:complete data)
                [revealed-square props] 
                [game-square props]))))]])))

(defn intro [done data]
  [:section {:class "intro"}
   [:h1 "Mines"]
   [:button {:on-click done} "start"]])

(defn score [value] 
  [:span {:style {:color "red" :font-weight "bold"}} value])

(defn timer [value] 
    (let [minutes (int (/ value 60))
          seconds (- value (* minutes 60))
          minutes (if (< minutes 10) (str "0" minutes) minutes)
          seconds (if (< seconds 10) (str "0" seconds) seconds)]
    [:span {:style {:color "red" :font-weight "bold" :float "right"}} (str minutes ":" seconds)]))

(defn score-panel [data]
  [:div {:style {:display "inline-block"
                 :width "100%"
                 :font-size "25px"
                 :text-shadow "2px 2px 2px black"
                 :padding "0.2em"}}
   "bombs: " [score (:bombs data)] ", score: " [score (:score data)] " " [timer (:time data)]])

(defn game [done data]
  (let [columns (range (:columns data))
        rows (range (:rows data))]
    (fn [done data]
      [:section
       [game-field data]
       [score-panel data]
       (when (:complete data)
         [:div
          [:h1 
           {:style {:font-size "6em" :position "absolute" :bottom "50%" :width "100%" :text-align "center"}}
           (if (:won data) "YOU WON" "ALAS:(")]
          [:button {:class "restart" :on-click done} "restart"]])])))
