module Api
  module V1
    class NotesController < ApplicationController
      rescue_from ActiveRecord::RecordNotFound, with: :not_found
      before_action :set_note, only: %i[ show update destroy archive unarchive ]
      
      # GET /notes
      def index
        if params[:category_id]
          @notes = Note.joins(:categories).where(categories: { id: params[:category_id] })
        else
          @notes = Note.all
        end

        render json: @notes.to_json(include: :categories)
      end

      # GET /notes/1
      def show
        render json: @note.to_json(include: :categories) 
      end

      # POST /notes
      def create
        @note = Note.new(note_params.except(:category_ids))
        if @note.save
          @note.category_ids = note_params[:category_ids] || []
          render json: @note.to_json(include: :categories), status: :created, location: api_v1_note_url(@note)
        else
          render json: @note.errors, status: :unprocessable_entity
        end
      end

      # PATCH/PUT /notes/1
      def update
        if @note.update(note_params.except(:category_ids))
          @note.category_ids = note_params[:category_ids] || []
          render json: @note.to_json(include: :categories)
        else
          render json: @note.errors, status: :unprocessable_entity
        end
      end

      # PATCH /notes/1/archive
      def archive
        @note.update!(archived: true)
        render json: @note.to_json(include: :categories) 
      end

      # PATCH /notes/1/unarchive
      def unarchive
        @note.update!(archived: false)
        render json: @note.to_json(include: :categories) 
      end
      

      # DELETE /notes/1
      def destroy
        @note.destroy!
      end

      private
        def not_found
          render json: { error: 'Note not found' }, status: :not_found
        end

        # Use callbacks to share common setup or constraints between actions.
        def set_note
          @note = Note.find(params[:id])
        end

        # Only allow a list of trusted parameters through.
        def note_params
          params.require(:note).permit(:title, :content, :archived, category_ids: [])
        end
    end
  end
end