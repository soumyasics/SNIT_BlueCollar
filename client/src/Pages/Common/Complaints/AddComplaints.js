import React from 'react'
import './Complaints.css'

function AddComplaints({close}) {
  return (
    <>
        
        <div class="addcomplait">
	<article class="">
		<header class="modal-container-header">
			<span class="modal-container-title">
				Add Complaint
			</span>
			<button class="icon-button" onClick={close}>
            <svg fill="#fff" width="24px" height="24px" 
            viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="m20.48 3.512c-2.172-2.171-5.172-3.514-8.486-3.514-6.628 0-12.001 5.373-12.001 12.001 0 3.314 1.344 6.315 3.516 8.487 2.172 2.171 5.172 3.514 8.486 3.514 6.628 0 12.001-5.373 12.001-12.001 0-3.314-1.344-6.315-3.516-8.487zm-1.542 15.427c-1.777 1.777-4.232 2.876-6.943 2.876-5.423 0-9.819-4.396-9.819-9.819 0-2.711 1.099-5.166 2.876-6.943 1.777-1.777 4.231-2.876 6.942-2.876 5.422 0 9.818 4.396 9.818 9.818 0 2.711-1.099 5.166-2.876 6.942z"/><path d="m13.537 12 3.855-3.855c.178-.194.287-.453.287-.737 0-.603-.489-1.091-1.091-1.091-.285 0-.544.109-.738.287l.001-.001-3.855 3.855-3.855-3.855c-.193-.178-.453-.287-.737-.287-.603 0-1.091.489-1.091 1.091 0 .285.109.544.287.738l-.001-.001 3.855 3.855-3.855 3.855c-.218.2-.354.486-.354.804 0 .603.489 1.091 1.091 1.091.318 0 .604-.136.804-.353l.001-.001 3.855-3.855 3.855 3.855c.2.218.486.354.804.354.603 0 1.091-.489 1.091-1.091 0-.318-.136-.604-.353-.804l-.001-.001z"/></svg>
			</button>
		</header>
		<section class="modal-container-body rtf">
        <form>
          <div class="mb-3">
            <label for="recipient-name" class="col-form-label">Suspect Name</label>
            <input type="text" class="form-control" placeholder='Enter Suspect Name' id="recipient-name"/>
          </div>
          <div class="mb-3">
            <label for="message-text" class="col-form-label">Subject</label>
            <textarea class="form-control" style={{height:'100px'}} placeholder='Add your Complaint' id="message-text"></textarea>
          </div>
        </form>
		</section>
		<footer class="modal-container-footer">
			<button class="button is-ghost" style={{background:'#3D9AE0',color:'#fff'}} onClick={close}>BACK</button>
			<button class="button is-primary" style={{background:'#3D9AE0'}}>POST</button>
		</footer>
	</article>
        </div>
    </>
  )
}

export default AddComplaints